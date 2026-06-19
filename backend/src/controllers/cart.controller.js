const cartModel = require('../models/cart.model')

const addToCart = async (req, res) => {
    const {userId, productId, quantity} = req.body;

    try {
        const cart = await cartModel.findOne({userId});

        if(!cart) {
            return res.status(404).json({message: "cart not found"});
        }

        const product = cart.items.find(item => item.product.toString() === productId);

        if(product) {
            product.quantity += quantity;
        } else {
            cart.items.push({product: productId, quantity});
        }

        await cart.save();
        res.status(200).json({message: "product added to cart successfully"});
    } catch (err) {
        res.status(500).json({message: "error in adding product to cart"});
    }
}
