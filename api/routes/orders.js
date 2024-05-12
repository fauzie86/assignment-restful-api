 /*const express = require('express');
 const router = express.Router();

 // Dummy data
 let orders = [
   { id: 1, product_id: 1, quantity: 3 },
   { id: 2, product_id: 2, quantity: 2 },
   // Add more orders as needed
 ];

 // Define orders routes
 router.get('/', (req, res) => {
   res.json(orders);
 });

 router.post('/', (req, res) => {
   // Implementation for POST /orders
   // ...
 });

 // Define other routes...

 module.exports = router;*/




//Task 3 add PUT & PATCH
/*const express = require('express');
const router = express.Router();

let orders = [
    { id: 1, product: 'Product 1', quantity: 5 },
    { id: 2, product: 'Product 2', quantity: 3 }
];

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'order were fetched',
        orders: orders
    });
});

router.post('/', (req, res, next) => {
    const newOrder = req.body;
    orders.push(newOrder);
    res.status(201).json({
        message: 'order was created',
        order: newOrder
    });
});

router.get('/:orderid', (req, res, next) => {
    const orderId = req.params.orderid;
    const order = orders.find(o => o.id === parseInt(orderId));
    if (order) {
        res.status(200).json({
            message: 'order details',
            order: order
        });
    } else {
        res.status(404).json({
            message: 'Order not found'
        });
    }
});

router.put('/:orderid', (req, res, next) => {
    const orderId = req.params.orderid;
    const updatedOrder = req.body;
    const index = orders.findIndex(o => o.id === parseInt(orderId));

    if (index !== -1) {
        orders[index] = { ...orders[index], ...updatedOrder };
        res.status(200).json({
            message: 'order put details',
            order: orders[index]
        });
    } else {
        res.status(404).json({
            message: 'Order not found'
        });
    }
});

router.patch('/:orderid', (req, res, next) => {
    const orderId = req.params.orderid;
    const updatedFields = req.body;
    const index = orders.findIndex(o => o.id === parseInt(orderId));

    if (index !== -1) {
        orders[index] = { ...orders[index], ...updatedFields };
        res.status(200).json({
            message: 'order patch details',
            order: orders[index]
        });
    } else {
        res.status(404).json({
            message: 'Order not found'
        });
    }
});

router.delete('/:orderid', (req, res, next) => {
    const orderId = req.params.orderid;
    orders = orders.filter(o => o.id !== parseInt(orderId));
    res.status(204).send();
});

module.exports = router;*/



const express = require('express');
const router = express.Router();

// Dummy data
let orders = [
  { id: 1, product_id: 1, quantity: 3 },
  { id: 2, product_id: 2, quantity: 2 },
  { id: 3, product_id: 3, quantity: 5 },
  { id: 4, product_id: 4, quantity: 8 },
  { id: 5, product_id: 5, quantity: 4 },



  // Add more orders as needed
];

// GET all orders
router.get('/', (req, res) => {
  res.json(orders);
});

// POST a new order
router.post('/', (req, res) => {
  const newOrder = {
    id: orders.length + 1,
    product_id: req.body.product_id,
    quantity: req.body.quantity,
  };

  orders.push(newOrder);

  res.status(201).json({
    message: 'Order created successfully',
    createdOrder: newOrder,
  });
});

// PUT (Update) an order by ID
router.put('/:orderId', (req, res) => {
  const orderId = req.params.orderId;
  const updatedOrder = {
    id: orderId,
    product_id: req.body.product_id,
    quantity: req.body.quantity,
  };

  const index = orders.findIndex((order) => order.id == orderId);

  if (index !== -1) {
    orders[index] = updatedOrder;
    res.status(200).json({
      message: 'Order updated successfully',
      updatedOrder: updatedOrder,
    });
  } else {
    res.status(404).json({
      message: 'Order not found',
    });
  }
});

// PATCH (Partial Update) an order by ID
router.patch('/:orderId', (req, res) => {
  const orderId = req.params.orderId;
  const updatedFields = req.body;

  const index = orders.findIndex((order) => order.id == orderId);

  if (index !== -1) {
    orders[index] = { ...orders[index], ...updatedFields };
    res.status(200).json({
      message: 'Order updated successfully',
      updatedOrder: orders[index],
    });
  } else {
    res.status(404).json({
      message: 'Order not found',
    });
  }
});

// DELETE an order by ID
router.delete('/:orderId', (req, res) => {
  const orderId = req.params.orderId;

  const index = orders.findIndex((order) => order.id == orderId);

  if (index !== -1) {
    orders.splice(index, 1);
    res.status(200).json({
      message: 'Order deleted successfully',
    });
  } else {
    res.status(404).json({
      message: 'Order not found',
    });
  }
});

module.exports = router;




