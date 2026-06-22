const jwt = require('jsonwebtoken')
require('dotenv').config()
const userModel = require('../models/user.model.js')

const authUser = async (req, res, next) => {
    
    const token = req.cookies.token;
    try {
    
    if(!token) {
        return res.status(401).json({
            message: "Please login first"
        })
    }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await userModel.findById(decoded.id);
        if(!user) {
            return res.status(401).json({
                message: "user not found"
            })
        }
        
        req.user = user;
        next();

    } catch(err) {
        return res.status(401).json({
            message: "message from auth middleware"
        })
    }
}

module.exports = {authUser}