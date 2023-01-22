const express = require('express');
const router  = express.Router();
const { createProductReview, getProducts, getProductById, createProduct, updateProduct, deleteProduct, getTopProducts } = require('../controllers/productController');

// this one causing the error
const  protect  = require('../middleware/authMiddleware');
const admin = require('../middleware/authUserMiddleware');

// router.get('/', asyncHandler(async (req, res) => {
//     const products = await Product.find({})
//     res.json(products);
// }))

router.route('/').get(getProducts).post(protect, admin, createProduct);
router.route('/:id/reviews').post(protect, createProductReview);
router.get('/top', getTopProducts);
router.route('/:id').get(getProductById).delete(protect, admin, deleteProduct).put(protect, admin, updateProduct);

// router.get('/:id', asyncHandler(async (req, res) => {
//     const  product = await Product.findById(req.params.id);
    
//     if(product) {
//         res.json(product)
//     } else {
//         res.status(404)
//         throw new Error('Product Not Found')
//     }
// }))

module.exports = router;