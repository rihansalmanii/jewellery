const jwt = require('jsonwebtoken')
require('dotenv').config()

const authAdmin = async (req, res, next) => {
    
    const token = req.cookies.token;
    
    if(!token) {
        return res.status(401).json({
            message: "Please login first"
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await userModel.findById(decoded.id);
        if(!user) {
            return res.status(401).json({
                message: "user not found"
            })
        }

        if(user.role !== "admin") {
            return res.status(401).json({
                message: "unauthorized"
            })
        }

        req.user = user;
        next();

    } catch(err) {
        return res.status(401).json({
            message: "Invalid or expired token"
        })
    }
}