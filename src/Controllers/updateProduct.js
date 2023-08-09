const { Product } = require("../db")
const { v4: uuidv4 } = require("uuid"); 
const cloudinary = require("../utils/cloudinary");

const updateProduct=async(req,res)=>{

    const {idProduct}=req.params
    if (!uuidv4(idProduct)) {
        return res.status(400).json({ message: "Id inválido" });
    }

    const { name, details, sizes, category, images, price, stock,brand, description, colours } = req.body;
  

    try {
        let uploadedImages = [];
        if(images.length>0){

        for (const image of images) {
         const cloudinaryResponse = await cloudinary.uploader.upload(image, {
         folder: 'products'
         });

        const imageUrl = cloudinaryResponse.secure_url;
        uploadedImages.push(imageUrl);
         }
        }

        const product= await Product.findOne({ where: { id: idProduct } });

        if(product){
            product.name=name?? product.name
            product.details=details?? product.details
            product.sizes=sizes?? product.sizes
            product.category=category??product.category
            product.brand=brand??product.brand
            product.description=description?? product.description
            product.colours=colours?? product.colours
            product.images = images.length ? uploadedImages : product.images;
            product.price = price??product.price;
            product.stock = stock!==""? stock: product.stock;
            
            const updatedProduct = await product.save();

          
            res.status(200).json(updatedProduct)
        }else{
            res.status(404).json({message:"Id no encontrado"})
        }
    } catch (error) {
            res.status(404).json({message:error.message})
    }
}

module.exports=updateProduct