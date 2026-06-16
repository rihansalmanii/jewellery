const express = require('express');
const router = express.Router();
const productController = require("../controllers/product.controller")
const upload = require("../middlewares/upload.middleware")


router.post('/add-product', upload.array('images', 5), productController.addProduct)
router.get('/', productController.getAllProducts)
router.get('/:id', productController.getProductById)
router.patch('/update-product/:id', upload.array('images', 5), productController.updateProductById)
router.delete('/delete-product/:id', productController.deleteProduct)


module.exports = router