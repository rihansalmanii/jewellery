const cartModel = require('../models/cart.model')

const addToCart = async (req, res) => {
    const userId = req.user._id
    const {productId, quantity} = req.body;

    try {
        const cart = await cartModel.findOne({userId});

        if(!cart) {
            const newCart = await cartModel.create({
                user: userId,
                items: [{
                    productId,
                    quantity
                }] 
            })
            return res.status(201).json({cart})
        }

        const itemIndex = cart.items.findIndex((item) => item.productId.toString() === productId);

        if(itemIndex !== -1) {
            cart.items[itemIndex].quantity += 1;
        } else {
            cart.items.push({
                productId,
                quantity
            })
        }

        await cart.save()

        return res.status(200).json({
            message: "product added successfully",
            newart
        })


    } catch(err) {
        res.status(500).json({message: "error in adding product to cart"})
    }
}

const getCart = async (req, res) => {

}


module.exports = {addToCart}




























