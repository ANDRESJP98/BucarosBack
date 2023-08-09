const { Router } = require("express");
const router = Router();
const addProducts = require("../Controllers/addProducts");
const getAllProducts = require("../Controllers/getAllProducts");
const getDetail= require ("../Controllers/getDetail");
const deleteProduct= require ("../Controllers/deleteProduct");
const updateProduct= require ("../Controllers/updateProduct");
const getBrands=require("../Controllers/getBrands");
const addUser=require("../Controllers/addUser");
const getAllUsers=require("../Controllers/getAllUsers");
const loginUser=require("../Controllers/loginUser");
const deleteCarts=require("../Controllers/deleteCarts")
const updateCarts=require("../Controllers/updateCarts")
const getCart = require("../Controllers/getCart")
const addCarts = require("../Controllers/addCarts")
const updateUser=require("../Controllers/updateUser")
const getCartProducts=require("../Controllers/getCartProducts")
const flash = require("express-flash");
const getAllPurchases = require("../Controllers/getAllPurchases");
const addReview = require("../Controllers/addReview");
const getReviews = require("../Controllers/getReviews");
const findCartId = require('../Controllers/findCartId');
const getUserProduct = require("../Controllers/getUserProduct");
const getUserByID = require("../Controllers/getUserByID");
const updatePurchase = require("../Controllers/updatePurchase");
const purchaseCart = require("../Controllers/purchaseChart")



// TRAE TODOS LOS PRODUCTOS DE LA BASE DE DATOS
router.get("/products", getAllProducts)

// TRAE LA INFORMACION DE UN PRODUCTO SEGUN ID
router.get("/detail/:idProduct",getDetail)

//AGREGA NUEVOS PRODUCTOS A LA BASE DE DATOS
// Protección requerida tipo usuario solo ADMIN
router.post("/products", addProducts)

//ELIMINA UN PRODUCTO SEGUN SU ID
// Protección requerida tipo usuario solo ADMIN
router.delete("/products/:idProduct",deleteProduct)   //elimino proteccion isAdmin

//MODIFICA LOS VALORES DE UN PRODUCTO GUARDADO
// Protección requerida tipo usuario solo ADMIN
router.put("/products/:idProduct",updateProduct) //elimino proteccion isAdmin

//TRAE TODAS LAS MARCAS 
router.get("/brands", getBrands)

//CREAR UN USUARIO
router.post("/signup",addUser)

//MODIFICA LOS DATOS DE UN USUARIO
router.put("/user/:idUser",updateUser)


//lOGEAR USUARIO
router.post("/login",loginUser)

//Traer todos los usuarios
// Protección requerida tipo usuario solo ADMIN
router.get("/users",getAllUsers)
router.get("/users/:id", getUserByID)



//agrega a un cart la informacion del producto, pasando por body ProductId, CartId y cantidad de ese producto
//Proteger si el existe usuario logeado
router.post("/cart",  addCarts)

//obtiene un cart por usuario con query cartId
//Proteger si el existe usuario logeado
router.get("/cart", getCart)

//borra un cart por params cartProductId
//Proteger si el existe usuario logeado
router.delete("/cart/:cartProductId", deleteCarts)

//modifica un cart por params cartProductId
//Proteger si el existe usuario logeado
router.put("/cart/:cartProductId",  updateCarts)



///////////////SOLO PARA PRUEBAS EN EL BACK////////////////////
router.get("/cart_products/:idUser", getCartProducts)
router.get('/cart/:idUser', findCartId)


//-------COMPRAS USUARIO-------//

router.get("/purchase/:id", getAllPurchases)
router.put('/purchase/:id', updatePurchase);
router.get('/purchase', purchaseCart)

//------------REVIEWS----------//
router.post('/reviews/:userId', addReview)
router.get('/reviews/validate/:userId',getUserProduct)
router.get('/reviews/:productId', getReviews)





module.exports = router;




