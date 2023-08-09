const { Product } = require("../db");
const { Op } = require('sequelize');

const getAllProducts = async(req,res)=>{

    try{
        const {name,sizes, category,brand, page = 1, limit = 6}=req.query
        let {priceMin,priceMax}=req.query

        const conditions={}
        
         if(name){
            conditions[Op.or] = [
                { name: { [Op.iLike]: `%${name}%` } },
                { brand: { [Op.iLike]: `%${name}%` } },
                { description: { [Op.iLike]: `%${name}%` } },
                { details: { [Op.iLike]: `%${name}%` } }
            ];
        }
        if (sizes) {
            conditions.sizes = {
                [Op.contains]: sizes
            };
        }
        if(priceMin&&priceMax){
            priceMin=Number(priceMin)
            priceMax=Number(priceMax)
            conditions.price = {
                [Op.between]: [priceMin, priceMax]
              };
        }
        if(category){
            conditions.category = {
                [Op.iLike]: `%${category}%`
              };
        }
        if(brand){
            conditions.brand = {
                [Op.iLike]: `%${brand}%`
              };
        }
        const offset = (page - 1) * limit;
        const totalCount = await Product.count({ where: conditions });
    
        const allProducts = await Product.findAll({
          where: conditions,
          offset,
          limit
        });
        const totalPages = Math.ceil(totalCount / limit);
        const NextPage = page < totalPages;
        const PreviousPage = page > 1;
        const response = {
            totalPages: totalPages,
            itemsPerPage: limit,
            totalItems: totalCount,
            currentPageItems: allProducts.length,
            NextPage: NextPage,
            PreviousPage: PreviousPage,
            products: allProducts, 

        };
        
        res.status(201).json(response)
    }
    catch(err){res.status(404).json({message: "Catch de getAllProducts "+err.message})}
}

module.exports = getAllProducts