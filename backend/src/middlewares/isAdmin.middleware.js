const isAdmin = (req, res, next) => {
    try {
        if(!req.user) {
            return res.status(401).json({
                message: "Please Login first"
            })
        }

        if(req.user.role !== "admin") {
            return res.status(401).json({
                message: "Unauthorized"
            })
        }

        next()
    } catch(err) {
        return res.status(500).json({
            message: err.message
        })
    }
}


module.exports = isAdmin