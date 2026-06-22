const express = require('express');
const router = express.Router();
const {createOrder, getMyOrders} = require('../controllers/order.controller')
const {authUser} = require('../middlewares/auth.middleware')



router.post('/create', authUser, createOrder)
router.get('/my-orders', authUser, getMyOrders)


module.exports = router


