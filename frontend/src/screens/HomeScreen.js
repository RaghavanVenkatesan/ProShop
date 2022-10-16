import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { fetchProductsStartAsync } from '../store/reducers/product/product.action';
import { selectProducts, selectIsLoading, selectIsError} from '../store/reducers/product/product.select';
// import products from '../products';
// import axios from 'axios';
import Product from '../components/Product';

const HomeScreen = () => {
// const [products, setProducts] = useState([]);
const dispatch = useDispatch();

const products = useSelector(selectProducts);
const isLoading = useSelector(selectIsLoading);
const error = useSelector(selectIsError);

useEffect(() => {
  // const fetchProducts = async () => {
  //   const { data } = await axios.get('/api/products');

  //   setProducts(data);
  // }

  // fetchProducts()
  dispatch(fetchProductsStartAsync());
}, [dispatch])

// const products = [];

  return (
    <>
     <h1>Latest Products</h1>
     {
      isLoading ? (
      <Loader/>
      ) : error ? (
      <Message variant='danger'>{error}</Message>
      ) : (    
      <Row>
        {
            products.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product}/>
                </Col>
            ))
        }    
        </Row> )
     }
    </>
  )
}

export default HomeScreen;
