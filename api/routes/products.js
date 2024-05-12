/*const express = require('express');
const router = express.Router();

// Dummy data
let products = [
  { id: 1, name: 'Product 1' },
  { id: 2, name: 'Product 2' },
  // Add more products as needed
];

// Define products routes
router.get('/', (req, res) => {
  res.json(products);
});

router.post('/', (req, res) => {
  // Implementation for POST /products
  // ...
});

// Define other routes...

module.exports = router;*/



const express = require('express');
const router = express.Router();

// Dummy data
let products = [
  { id: 1, name: 'Levis' },
  { id: 2, name: 'Nike' },
  { id: 3, name: 'Adidas' },
  { id: 4, name: 'Puma' },
  { id: 5, name: 'Polo' },

  // Add more products as needed
];

// GET all products
router.get('/', (req, res) => {
  res.json(products);
});

// POST a new product
router.post('/', (req, res) => {
  const newProduct = {
    id: products.length + 1,
    name: req.body.name,
  };

  products.push(newProduct);

  res.status(201).json({
    message: 'Product created successfully',
    createdProduct: newProduct,
  });
});

// PUT (Update) a product by ID
router.put('/:productId', (req, res) => {
  const productId = req.params.productId;
  const updatedProduct = {
    id: productId,
    name: req.body.name,
  };

  const index = products.findIndex((product) => product.id == productId);

  if (index !== -1) {
    products[index] = updatedProduct;
    res.status(200).json({
      message: 'Product updated successfully',
      updatedProduct: updatedProduct,
    });
  } else {
    res.status(404).json({
      message: 'Product not found',
    });
  }
});

// PATCH (Partial Update) a product by ID
router.patch('/:productId', (req, res) => {
  const productId = req.params.productId;
  const updatedFields = req.body;

  const index = products.findIndex((product) => product.id == productId);

  if (index !== -1) {
    products[index] = { ...products[index], ...updatedFields };
    res.status(200).json({
      message: 'Product updated successfully',
      updatedProduct: products[index],
    });
  } else {
    res.status(404).json({
      message: 'Product not found',
    });
  }
});

// DELETE a product by ID
router.delete('/:productId', (req, res) => {
  const productId = req.params.productId;

  const index = products.findIndex((product) => product.id == productId);

  if (index !== -1) {
    products.splice(index, 1);
    res.status(200).json({
      message: 'Product deleted successfully',
    });
  } else {
    res.status(404).json({
      message: 'Product not found',
    });
  }
});

module.exports = router;


