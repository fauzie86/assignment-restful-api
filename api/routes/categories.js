/*const express = require('express');
const router = express.Router();

// Dummy data
let categories = [
  { id: 1, name: 'Category 1' },
  { id: 2, name: 'Category 2' },
  // Add more categories as needed
];

// Define categories routes
router.get('/', (req, res) => {
  res.json(categories);
});

router.post('/', (req, res) => {
  // Implementation for POST /categories
  // ...
});

// Define other routes...

module.exports = router;*/



const express = require('express');
const router = express.Router();

// Dummy data
let categories = [
  { id: 1, name: 'Category A' },
  { id: 2, name: 'Category B' },
  { id: 2, name: 'Category C' },
  { id: 2, name: 'Category D' },
  { id: 2, name: 'Category F' },


  // Add more categories as needed
];

// GET all categories
router.get('/', (req, res) => {
  res.json(categories);
});

// POST a new category
router.post('/', (req, res) => {
  const newCategory = {
    id: categories.length + 1,
    name: req.body.name,
  };

  categories.push(newCategory);

  res.status(201).json({
    message: 'Category created successfully',
    createdCategory: newCategory,
  });
});

// PUT (Update) a category by ID
router.put('/:categoryId', (req, res) => {
  const categoryId = req.params.categoryId;
  const updatedCategory = {
    id: categoryId,
    name: req.body.name,
  };

  const index = categories.findIndex((category) => category.id == categoryId);

  if (index !== -1) {
    categories[index] = updatedCategory;
    res.status(200).json({
      message: 'Category updated successfully',
      updatedCategory: updatedCategory,
    });
  } else {
    res.status(404).json({
      message: 'Category not found',
    });
  }
});

// PATCH (Partial Update) a category by ID
router.patch('/:categoryId', (req, res) => {
  const categoryId = req.params.categoryId;
  const updatedFields = req.body;

  const index = categories.findIndex((category) => category.id == categoryId);

  if (index !== -1) {
    categories[index] = { ...categories[index], ...updatedFields };
    res.status(200).json({
      message: 'Category updated successfully',
      updatedCategory: categories[index],
    });
  } else {
    res.status(404).json({
      message: 'Category not found',
    });
  }
});

// DELETE a category by ID
router.delete('/:categoryId', (req, res) => {
  const categoryId = req.params.categoryId;

  const index = categories.findIndex((category) => category.id == categoryId);

  if (index !== -1) {
    categories.splice(index, 1);
    res.status(200).json({
      message: 'Category deleted successfully',
    });
  } else {
    res.status(404).json({
      message: 'Category not found',
    });
  }
});

module.exports = router;

