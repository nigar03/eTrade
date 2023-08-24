import React, { useContext } from 'react';
import Nav from './components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from './pages/Shop';
import { ProductProvider } from './context/ProductProvider';
import ProductDetails from './pages/ProductDetails';
import Home from './pages/Home';
import { CartProvider } from 'react-use-cart';
import CartPage from './pages/CartPage'
import { ModeContext, ModeProvider } from './context/ModeContext';



const Main = () => {
  const [mode] = useContext(ModeContext)
  return (

    <div className={mode}>
      <CartProvider>
        <ProductProvider>
          <Nav />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/shop' element={<Shop />} > </Route>
            <Route path='/shop/:url' element={<ProductDetails />} > </Route>
            <Route path='/cart' element={<CartPage />} > </Route>
          </Routes>
        </ProductProvider>
      </CartProvider>

    </div>




  )
}

function App() {
  return (

    <BrowserRouter>
      <ModeProvider>
        <Main />
      </ModeProvider>
    </BrowserRouter>



  )

}

export default App