const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    items: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "product",
                required: true
            },
            quantity: {
                type: Number,
                required: true
            }
        }
    ],
    qunatity: {
        type: Number,
        required: true
    }
}, {timestamps: true})

const cartModel = mongoose.model("cart", cartSchema)

module.exports = cartModel