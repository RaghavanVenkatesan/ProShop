import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import Paginate from '../components/Paginate';
import ProductCarousel from '../components/ProductCarousel';
import Meta from '../components/Meta';
import { fetchProductsStartAsync } from '../store/reducers/product/product.action';
// import { selectProducts, selectIsLoading, selectIsError} from '../store/reducers/product/product.select';
// import products from '../products';
// import axios from 'axios';
import Product from '../components/Product';

const HomeScreen = () => {
// const [products, setProducts] = useState([]);

const { keyword } = useParams();

const { pageNumber } = useParams();

let selected_page = pageNumber ? pageNumber : 1 ; 

const dispatch = useDispatch();

// const products = useSelector(selectProducts);
// const isLoading = useSelector(selectIsLoading);
// const error = useSelector(selectIsError);

const productList = useSelector((state) => state.productList)
const { isLoading, error, products, page, pages } = productList

useEffect(() => {
  // const fetchProducts = async () => {
  //   const { data } = await axios.get('/api/products');

  //   setProducts(data);
  // }

  // fetchProducts()
  dispatch(fetchProductsStartAsync(keyword, selected_page));
}, [dispatch, keyword, selected_page])

// const products = [];

  return (
    <>
    <Meta/>
    {!keyword ? (
      <ProductCarousel />
    ) : (
              <Link to='/' className='btn btn-light'>
              Go Back
            </Link>
    )}
     <h1>Latest Products</h1>
     {
      isLoading ? (
      <Loader/>
      ) : error ? (
      <Message variant='danger'>{error}</Message>
      ) : (
        <>    
      <Row>
        {
            products.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product}/>
                </Col>
            ))}    
        </Row>
        <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          /> 
        </>
        )}
    </>
  )
}

export default HomeScreen;
