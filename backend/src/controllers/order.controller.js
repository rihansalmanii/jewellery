const orderModel = require('../models/order.model')
const productModel = require('../models/product.model')

const createOrder = async (req, res) => {
   try {
     const userId = req.user._id;

    const {items, address} = req.body;

    if(!items || items.length == 0) {
        return res.status(400).json({message: "cart is empty"})
    }

    if(!address) {
        return res.status(400).json({message: "address is required"})
    }

    let orderItem = [];
    let totalAmount = 0;

    for(let item of items) {
        const {productId, quantity} = item;

        if(!productId || quantity < 1) {
            return res.status(400).json({message: "invalid product or quatity"})
        }

        const product = await productModel.findById(productId);

        if(!product) {
            return res.status(404).json({message: "product not found"})
        }

        const itemTotal = product.salePrice * quantity;
        totalAmount += itemTotal;

        orderItem.push({
            product: productId,
            name: item.name,
            price: item.salePrice,
            quantity,
            image: item.images?.[0]?.url,
            total: itemTotal
        })

        

    }
    const order = await orderModel.create({
            user: userId,
            items: orderItem,
            totalAmount,
            orderStatus: "pending",
            address
        })

        res.status(201).json({
            message: "order created successfully",
            success: true,
            order
        })
    
   } catch(err) {
    return res.status(500).json({
        message: err.message
    })
   }
}

const getMyOrders = async (req, res) => {

    const user = req.user

    try {
        const orders = await orderModel.find({user: user._id})

        if(!orders) {
            return res.status(401).json({
                message: "No orders yet"
            })
        }

        res.status(200).json({orders})
    } catch(err) {
        res.status(500).json({
            message: err.message
        })
    }
}

module.exports = { createOrder, getMyOrders }