/*const express = require('express');
const router = express.Router();

// Dummy data
let customers = [
  { id: 1, name: 'Customer 1' },
  { id: 2, name: 'Customer 2' },
  // Add more customers as needed
];

// Define customers routes
router.get('/', (req, res) => {
  res.json(customers);
});

router.post('/', (req, res) => {
  // Implementation for POST /customers
  // ...
});

// Define other routes...

module.exports = router;*/


const express = require('express');
const router = express.Router();

// Dummy data
let customers = [
  { id: 1, name: 'Joe jambul' },
  { id: 2, name: 'Mat kapak' },
  { id: 2, name: 'Ismit ulam raja' },
  { id: 2, name: 'Kluang man' },
  { id: 2, name: 'Labu & labi' },



  // Add more customers as needed
];

// GET all customers
router.get('/', (req, res) => {
  res.json(customers);
});

// POST a new customer
router.post('/', (req, res) => {
  const newCustomer = {
    id: customers.length + 1,
    name: req.body.name,
  };

  customers.push(newCustomer);

  res.status(201).json({
    message: 'Customer created successfully',
    createdCustomer: newCustomer,
  });
});

// PUT (Update) a customer by ID
router.put('/:customerId', (req, res) => {
  const customerId = req.params.customerId;
  const updatedCustomer = {
    id: customerId,
    name: req.body.name,
  };

  const index = customers.findIndex((customer) => customer.id == customerId);

  if (index !== -1) {
    customers[index] = updatedCustomer;
    res.status(200).json({
      message: 'Customer updated successfully',
      updatedCustomer: updatedCustomer,
    });
  } else {
    res.status(404).json({
      message: 'Customer not found',
    });
  }
});

// PATCH (Partial Update) a customer by ID
router.patch('/:customerId', (req, res) => {
  const customerId = req.params.customerId;
  const updatedFields = req.body;

  const index = customers.findIndex((customer) => customer.id == customerId);

  if (index !== -1) {
    customers[index] = { ...customers[index], ...updatedFields };
    res.status(200).json({
      message: 'Customer updated successfully',
      updatedCustomer: customers[index],
    });
  } else {
    res.status(404).json({
      message: 'Customer not found',
    });
  }
});

// DELETE a customer by ID
router.delete('/:customerId', (req, res) => {
  const customerId = req.params.customerId;

  const index = customers.findIndex((customer) => customer.id == customerId);

  if (index !== -1) {
    customers.splice(index, 1);
    res.status(200).json({
      message: 'Customer deleted successfully',
    });
  } else {
    res.status(404).json({
      message: 'Customer not found',
    });
  }
});

module.exports = router;
