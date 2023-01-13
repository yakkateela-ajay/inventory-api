const Mongoose  = require("mongoose");
const ObjectId =  Mongoose.Types.ObjectId;
const productSchema = require("../models/product");

exports.addProduct = async function(request, response) {
    try {
        const product = new productSchema(request.body);
        await product.save();
        response.status(200).json({
            message: "product added successfully",
            data: product
        });
    } catch (error) {
        response.status(500).json(error);
    }
}

exports.getAllProducts = async function(request, response) {
    try {
        const productList = await productSchema.find();
        response.status(200).json({
            message: "products fetched successfully",
            data: productList
        });
    } catch (error) {
        response.status(500).json(error);
    }
}

exports.getProductById = async function(request, response) {
    try {
        const product = await productSchema.findOne({"_id": new ObjectId(request.params.id)});
        console.log("sdfdsfsd")
        response.status(200).json({
            message: "product fetched successfully",
            data: product
        });
    } catch (error) {
        console.log("error",error);
        response.status(500).json(error);
    }
}
