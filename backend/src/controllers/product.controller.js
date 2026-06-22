const productModel = require("../models/product.model");
const { upload, deleteFile } = require("../services/imagekit.service");

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
      return res.status(400).json({ message: "please upload atleast one image" });
    }


    const results = await Promise.all(files.map((file) => upload(file)));

    const uploadedFiles = results.map((r) => ({
      url: r.url,
      fileId: r.fileId
    }));


    if (isNaN(originalPrice) || isNaN(salePrice) || isNaN(quantity)) {
      return res.status(400).json({ message: "please enter valid numbers" });
    }

    const newProduct = await productModel.create({
      name: name,
      description: description,
      originalPrice: Number(originalPrice),
      salePrice: Number(salePrice),
      quantity: Number(quantity),
      category: category,
      images: uploadedFiles,
    });

    res.status(201).json({
      message: "product created successfully",
      newProduct,
    });
  } catch (err) {
    res.status(500).json({ message: err.message});
  }
};


// get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await productModel.find();
    if(products.length == 0) {
        return res.status(404).json({ message: "no products found" });
    }

  res.status(200).json({
    message: "products fetched successfully",
    products: products,
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
const updateProductById = async (req, res) => {
  const id = req.params.id;

  try {
    const product = await productModel.findById(id)

    if(!product) {
      return res.status(404).json({message: "product not found"})
    }


    const updatedData = {...req.body}


    Object.keys(updatedData).forEach((key) => {
      if(updatedData[key] !== undefined) {
        product[key] = updatedData[key]
      }
    })


    if(req.files && req.files.length > 0) {

      // deleting old images from imagekit
      if(product.images && product.images.length > 0) {
        await Promise.all(
          product.images.map((img) => deleteFile(img.fileId))
        )
      }

      // uploading new images to imagekit
      const uploadedImages = await Promise.all(
        req.files.map((img) => upload(img))
      )

      product.images = uploadedImages.map((img) => ({
        url: img.url,
        fileId: img.fileId
      }))
    }

    
    await product.save()

    res.status(200).json({
      success: true,
      message: "product update successfully",
      product
    })

  } catch (err) {
    res.status(500).json({ message: "error in updating product"+err });
  }
};


// delete product
const deleteProduct = async (req, res) => {
  const id = req.params.id;

  try {
    const deleted = await productModel.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: "product not found" });
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
  updateProductById,
  deleteProduct,
};



