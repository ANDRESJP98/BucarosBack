const { Product } = require("../db")
const cloudinary = require("../utils/cloudinary");
const allowedExtensions = ["jpg", "jpeg", "png"];

const addProducts= async (req,res)=>{


    const { name, details, sizes, category, images, price, stock,brand, description, colours } = req.body;


    if(!name || !images || !price || !brand|| !category) return res.status(404).json({message: "Faltan datos"})

    try{
    const newProduct = await Product.create({name, details, sizes, category, images, price, stock,brand, description, colours})
    res.status(200).json(newProduct)
    }catch(err){res.status(404).json({message: "Llegue al catch del post de productos "+ err.message})}

}

module.exports = addProducts