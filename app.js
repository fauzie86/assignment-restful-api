 const express = require('express');
 const app = express();
 const productsRoutes = require('./api/routes/products');
 const ordersRoutes = require('./api/routes/orders');
 const customersRoutes = require('./api/routes/customers');
 const categoriesRoutes = require('./api/routes/categories');
 const reviewsRoutes = require('./api/routes/reviews');

 // Use routes
 app.use('/products', productsRoutes);
 app.use('/orders', ordersRoutes);
 app.use('/customers', customersRoutes);
 app.use('/categories', categoriesRoutes);
 app.use('/reviews', reviewsRoutes);

 
module.exports = app;






 