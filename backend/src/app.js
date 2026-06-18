const express = require('express');
const app = express();
const productRoutes = require("./routes/product.routes")
const cors = require('cors');
const authRoutes = require('./routes/auth.routes')

app.use(express.json());
app.use(cors());


app.use('/api/products', productRoutes)
app.use('/api/auth', authRoutes)


module.exports = app;