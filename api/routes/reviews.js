/*const express = require('express');
const router = express.Router();

// Dummy data
let reviews = [
  { id: 1, product_id: 1, text: 'Great product!' },
  { id: 2, product_id: 2, text: 'Awesome service!' },
  // Add more reviews as needed
];

// Define reviews routes
router.get('/', (req, res) => {
  res.json(reviews);
});

router.post('/', (req, res) => {
  // Implementation for POST /reviews
  // ...
});



module.exports = router;*/


const express = require('express');
const router = express.Router();

// Dummy data
let reviews = [
  { id: 1, product_id: 1, rating: 4, comment: 'Good product' },
  { id: 2, product_id: 2, rating: 5, comment: 'Excellent quality' },
  { id: 3, product_id: 3, rating: 6, comment: 'Nice!' },
  { id: 4, product_id: 4, rating: 7, comment: 'You are the best!' },
  { id: 5, product_id: 5, rating: 8, comment: 'Keep it up bro!' },



  // Add more reviews as needed
];

// GET all reviews
router.get('/', (req, res) => {
  res.json(reviews);
});

// POST a new review
router.post('/', (req, res) => {
  const newReview = {
    id: reviews.length + 1,
    product_id: req.body.product_id,
    rating: req.body.rating,
    comment: req.body.comment,
  };

  reviews.push(newReview);

  res.status(201).json({
    message: 'Review created successfully',
    createdReview: newReview,
  });
});

// PUT (Update) a review by ID
router.put('/:reviewId', (req, res) => {
  const reviewId = req.params.reviewId;
  const updatedReview = {
    id: reviewId,
    product_id: req.body.product_id,
    rating: req.body.rating,
    comment: req.body.comment,
  };

  const index = reviews.findIndex((review) => review.id == reviewId);

  if (index !== -1) {
    reviews[index] = updatedReview;
    res.status(200).json({
      message: 'Review updated successfully',
      updatedReview: updatedReview,
    });
  } else {
    res.status(404).json({
      message: 'Review not found',
    });
  }
});

// PATCH (Partial Update) a review by ID
router.patch('/:reviewId', (req, res) => {
  const reviewId = req.params.reviewId;
  const updatedFields = req.body;

  const index = reviews.findIndex((review) => review.id == reviewId);

  if (index !== -1) {
    reviews[index] = { ...reviews[index], ...updatedFields };
    res.status(200).json({
      message: 'Review updated successfully',
      updatedReview: reviews[index],
    });
  } else {
    res.status(404).json({
      message: 'Review not found',
    });
  }
});

// DELETE a review by ID
router.delete('/:reviewId', (req, res) => {
  const reviewId = req.params.reviewId;

  const index = reviews.findIndex((review) => review.id == reviewId);

  if (index !== -1) {
    reviews.splice(index, 1);
    res.status(200).json({
      message: 'Review deleted successfully',
    });
  } else {
    res.status(404).json({
      message: 'Review not found',
    });
  }
});

module.exports = router;







