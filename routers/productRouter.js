const express = require("express");
const router = express.Router();
const ProductCOntroller = require("../controllers/productController")

router.post("/addProduct", ProductCOntroller.addProduct);
router.get("/productById/:id", ProductCOntroller.getProductById);
router.get("/getAllProducts", ProductCOntroller.getAllProducts);

module.exports = router;