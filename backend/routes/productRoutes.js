const express = require('express');
const router  = express.Router();
const { getProducts, getProductById } = require('../controllers/productController');

// router.get('/', asyncHandler(async (req, res) => {
//     const products = await Product.find({})
//     res.json(products);
// }))

router.route('/').get(getProducts);
router.route('/:id').get(getProductById);

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