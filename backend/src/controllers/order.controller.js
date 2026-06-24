const orderModel = require('../models/order.model')
const productModel = require('../models/product.model')


// create order
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

    let orderItems = [];
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

        orderItems.push({
            product: product._id,
            name: product.name,
            price: product.salePrice,
            quantity,
            image: product.images?.[0]?.url,
            total: itemTotal
        })

        

    }
    const order = await orderModel.create({
            user: userId,
            items: orderItems,
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


// get my orders
const getMyOrders = async (req, res) => {

    const user = req.user

    try {
        const orders = await orderModel.find({user: user._id})

        if(orders.length == 0) {
            return res.status(200).json({
                message: "No orders yet",
                orders: []
            })
        }

        res.status(200).json({orders})
    } catch(err) {
        res.status(500).json({
            message: err.message
        })
    }
}


// get order by id
const getOrderById = async (req, res) => {
    try {
        const id = req.params.id

        const order = await orderModel.findById(id)

        if(order.user.toString() !== req.user._id.toString()) {
            return res.status(401).json({message: "unauthorized"})
        }

        if(!order) {
            return res.status(404).json({message: "order not found"})
        }

        res.status(200).json({order})
    } catch(err) {
        res.status(500).json({
            message: err.message
        })
    }
}


// get all orders
const getAllOrders = async (req, res) => {
    try {
        const orders = await orderModel.find();

        if(orders.length == 0) {
            return res.status(200).json({
                message: "no orders found",
                orders: [],
            })
        }

        res.status(200).json({orders})
    } catch(err) {
        res.status(500).json({
            message: err.message
        })
    }
}

module.exports = { createOrder, getMyOrders, getOrderById, getAllOrders }