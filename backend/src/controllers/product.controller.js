const productModel = require("../models/product.model");
const { upload } = require("../services/imagekit.service");

// add product
const addProduct = async (req, res) => {
  try {
    const { name, description, originalPrice, salePrice, quantity, category } =
      req.body;

    if (
      !name ||
      !description ||
      !originalPrice ||
      !salePrice ||
      !quantity ||
      !category
    ) {
      return res.status(400).json({
        message: "all fields are required",
      });
    }

    const files = req.files;

    if (!files || files.length == 0) {
      res.status(400).json({ message: "please upload atleast one image" });
    }


    const results = await Promise.all(files.map((file) => upload(file)));
    const uploadedFiles = results.map((r) => r.url);


    if (isNaN(originalPrice) || isNaN(salePrice) || isNaN(quantity)) {
      return res.status(400).json({ message: "please enter valid numbers" });
    }

    const newProduct = await productModel.create({
      name: name,
      description: description,
      originalPrice: originalPrice,
      salePrice: salePrice,
      quantity: quantity,
      category: category,
      images: uploadedFiles,
    });

    res.status(201).json({
      message: "product created successfully",
      newProduct,
    });
  } catch (err) {
    res.status(500).json({ message: "error in creating product" + err });
  }
};

// get all products

const getAllProducts = async (req, res) => {
  try {
    const products = await productModel.find();
    if(!products) {
        return res.status(404).json({ message: "no products found" });
    }

  res.status(200).json({
    message: "products fetched successfully",
    products,
  });
  } catch(err) {
    res.status(500).json({ message: "error in fetching products" });
  }
};

// get product by id

const getProductById = async (req, res) => {
  const id = req.params.id;

  try {
    const product = await productModel.findById(id);

    if (!product) {
      return res.status(404).json({ message: "product not found" });
    }

    res.status(200).json({
      message: "product fetched successfully",
      product,
    });
  } catch (err) {
    res.status(500).json({ message: "error in fetching product" });
  }
};

// update product

const updateProduct = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedProduct = await productModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedProduct) {
      return res.status(404).json({ message: "product not found" });
    }

    res.status(200).json({
      message: "product updated successfully",
      product: updatedProduct,
    });
  } catch (err) {
    res.status(500).json({ message: "error in updating product" });
  }
};

// delete product

const deleteProduct = async (req, res) => {
  const id = req.params.id;

  try {
    const deleted = await productModel.findByIdAndDelete(id);

    if (!deleted) {
      res.status(404).json({ message: "product not found" });
    }

    res.status(200).json({
      message: "product deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ message: "error in deleting product" });
  }
};

module.exports = {
  addProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
