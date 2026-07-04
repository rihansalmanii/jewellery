const orderModel = require("../models/order.model");
const productModel = require("../models/product.model");

// create order
const createOrder = async (req, res) => {
  try {
    const userId = req.user._id;

    const { items, address } = req.body;

    if (!items || items.length == 0) {
      return res.status(400).json({ message: "cart is empty" });
    }

    if (!address) {
      return res.status(400).json({ message: "address is required" });
    }

    let orderItems = [];
    let totalAmount = 0;

    for (let item of items) {
      const { productId, quantity } = item;

      if (!productId || quantity < 1) {
        return res.status(400).json({ message: "invalid product or quatity" });
      }

      const product = await productModel.findById(productId);

      if (!product) {
        return res.status(404).json({ message: "product not found" });
      }

      if (product.stock < quantity) {
        return res
          .status(400)
          .json({
            message: `only ${product.stock} items left in stock for ${product.name}`,
          });
      }

      const itemTotal = product.salePrice * quantity;
      totalAmount += itemTotal;

      orderItems.push({
        product: product._id,
        name: product.name,
        price: product.salePrice,
        quantity,
        image: product.images?.[0]?.url,
        total: itemTotal,
      });
    }
    const order = await orderModel.create({
      user: userId,
      items: orderItems,
      totalAmount,
      orderStatus: "pending",
      address,
    });

    res.status(201).json({
      message: "order created successfully",
      success: true,
      order,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};

// get my orders
const getMyOrders = async (req, res) => {
  const user = req.user;

  try {
    const orders = await orderModel.find({ user: user._id });

    if (orders.length == 0) {
      return res.status(200).json({
        message: "No orders yet",
        orders: [],
      });
    }

    res.status(200).json({ orders });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// get order by id
const getOrderById = async (req, res) => {
  try {
    const id = req.params.id;

    const order = await orderModel.findById(id);

    if (order.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: "unauthorized" });
    }

    if (!order) {
      return res.status(404).json({ message: "order not found" });
    }

    res.status(200).json({ order });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// get all orders
const getAllOrders = async (req, res) => {
  try {
    const orders = await orderModel.find();

    if (orders.length == 0) {
      return res.status(200).json({
        message: "no orders found",
        orders: [],
      });
    }

    res.status(200).json({ orders });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// update order status
const updateOrderStatus = async (req, res) => {
  try {
    const orderId = req.params.id;
    const { status } = req.body;

    // validate inputs
    if (!orderId || !status) {
      return res.status(400).json({
        success: false,
        message: "orderId and status are required",
      });
    }

    const validStatuses = [
      "pending",
      "confirmed",
      "paid",
      "shipped",
      "delivered",
      "cancelled",
    ];

    if (!validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: "status value is invalid",
      });
    }

    const order = await orderModel.findById(orderId);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "order not found",
      });
    }

    if (order.status === "delivered") {
      return res.status(400).json({
        success: false,
        message: "order already delivered",
      });
    }

    if (order.status === "cancelled") {
      return res.status(400).json({
        success: false,
        message: "cancelled orders cannot be updated",
      });
    }

    // stock reduction logic
    if (status === "confirmed" && order.status !== "confirmed") {
      // validating each product in order
      for (let item of order.items) {
        const product = await productModel.findById(item.product);

        if (!product) {
          return res.status(404).json({
            success: false,
            message: "product not found",
          });
        }

        if (product.stock < item.quantity) {
          return res.status(400).json({
            success: false,
            message: `${product.name} is out of stock`,
          });
        }

        product.stock -= item.quantity;
        await product.save();
      }
    }

    order.status = status;
    await order.save();

    return res.status(200).json({
      success: true,
      message: "order status updated successfully",
      order,
    });
  } catch (err) {
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

// cancel order
const cancelOrder = async (req, res) => {
  try {
    const orderId = req.params.id;
    const userId = req.user._id;
    const role = req.user.role;

    const order = await orderModel.findById(orderId);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "order not found",
      });
    }

    if (role !== "admin") {
      if (userId.toString() !== order.user.toString()) {
        return res.status(403).json({
          success: false,
          message: "not authorized to cancel this order",
        });
      }

      if(!["pending", "confirm"].includes(order.status)) {
        return res.status(400).json({
            success: false,
            message: "you can only cancel pending or confirmed orders"
        });
      }
    }

    // already cancelled 
    if(order.status === "cancelled") {
        return res.status(400).json({
            success: false,
            message: "order already cancelled"
        })
    }

    // restoring stock
    if(["confirmed", "pending"].includes(order.status)) {
        for(let item of order.items) {
            const product = await productModel.findById(item.product)

            if(product) {
                product.stock += item.quantity
                await product.save()
            }
        }
    }

    order.status = "cancelled"
    await order.save()

    return res.status(200).json({
        success: true,
        message: role == "admin" 
        ? "Admin cancelled the order" 
        : "order cancelled successfully",
        order
    })

    
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports = {
  createOrder,
  getMyOrders,
  getOrderById,
  getAllOrders,
  updateOrderStatus,
  cancelOrder,
};
