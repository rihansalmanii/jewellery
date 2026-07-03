const express = require('express');
const router = express.Router();
const {createOrder, getMyOrders, getOrderById, getAllOrders, updateOrderStatus} = require('../controllers/order.controller')
const {authUser} = require('../middlewares/auth.middleware')
const {isAdmin} = require('../middlewares/isAdmin.middleware')


router.post('/create', authUser, createOrder)
router.get('/my-orders', authUser, getMyOrders)
router.get('/:id', authUser, getOrderById)
router.get('/', isAdmin, getAllOrders)
router.patch("/update-status/:id", authUser, isAdmin, updateOrderStatus)


module.exports = router


