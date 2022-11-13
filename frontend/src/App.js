import React from 'react';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';

const App = () => {
  return (
    <>
    <Header/>
    <main className='py-3'>
    <Container>
<Routes>
  <Route path='/' element={<HomeScreen/>}/>
  <Route path='/products/:id' element={<ProductScreen/>}/>
  <Route path='/cart/:id' element={<CartScreen/>}/>
  <Route path='/login' element={<LoginScreen/>}/>
</Routes>
    </Container>
    </main>
     <Footer/>
    </>
  );
}

export default App;
