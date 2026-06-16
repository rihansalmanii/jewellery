const express = require('express');
const app = express();
const productRoutes = require("./routes/product.routes")
const cors = require('cors');

app.use(express.json());
app.use(cors());


app.use('/api/products', productRoutes)


module.exports = app;