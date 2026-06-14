const productModel = require('../models/product.model');
const { get } = require('../routes/product.routes');


const addProduct = async (req, res) => {
    const {name, description, originalPrice, salePrice, quantity, category} = req.body

    const newProduct = await productModel.create({
        name: name,
        description: description,
        originalPrice: originalPrice,
        salePrice: salePrice,
        quantity: quantity,
        category: category
    })

    res.status(201).json({
        message: "product created successfully",
        newProduct
    })
}

const getAllProducts = async (req, res) => {

    const products = await productModel.find()

    res.status(200).json({
        message: "products fetched successfully",
        products
    })
}

module.exports = { addProduct, getAllProducts }
