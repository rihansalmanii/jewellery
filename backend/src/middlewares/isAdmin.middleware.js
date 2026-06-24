const jwt = require('jsonwebtoken')
const userModel = require('../models/user.model')
require('dotenv').config()

const isAdmin = async (req, res, next) => {

    try {
        const token = req.cookies.token

        if(!token) {
            return res.status(401).json({
                message: "Please Login first"
            })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await userModel.findById(decoded.id)

        if(!user.isAdmin) {
            return res.status(401).json({
                message: "not admin"
            })
        }

        req.user = user
        next()
    } catch(err) {
        return res.status(500).json({
            message: err.message
        })
    }
}


module.exports = {isAdmin}