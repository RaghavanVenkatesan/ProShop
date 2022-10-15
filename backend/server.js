const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const {notFound, errorHandler} = require('./middleware/errorMiddleware'); 

// import express from 'express';
// import dotenv from 'dotenv';
// import products from './data/products.js';

// normal middleware
// app.use((req, res, next) => {
//     console.log(req.originalUrl);
// })

dotenv.config();

connectDB();

const app = express();

app.use('/api/products', productRoutes);

//passing the 404 error to the error middleware
// app.use((req, res, next) => {
//     const error = new Error(`Not Found - ${req.originalUrl}`);
//     res.status(404);
//     next(error);
// });

app.use(notFound);

//error middleware
// app.use((err, req, res, next) => {
//     const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
//     res.status(statusCode);
//     res.json({
//         message: err.message,
//         stack: process.env.NODE_ENV === 'production' ? null : err.stack
//     })
// })

app.use(errorHandler);
// app.get('/api/products', (req, res) => {
//     res.json(products);
// })

// app.get('/api/products/:id', (req, res) => {
//     const product = products.find(p => p._id === req.params.id);
//     res.json(product);
// })

const PORT = process.env.PORT || 5000

app.listen(5000, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));