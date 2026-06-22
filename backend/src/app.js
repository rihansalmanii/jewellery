const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser')

const productRoutes = require("./routes/product.routes")
const authRoutes = require('./routes/auth.routes')
const orderRoutes = require('./routes/order.routes')
// const cartRoutes = require('./routes/cart.routes')

app.use(express.json());
app.use(cors());
app.use(cookieParser())


app.use('/api/products', productRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/orders', orderRoutes)



// app.use('/api/cart', cartRoutes)


module.exports = app;