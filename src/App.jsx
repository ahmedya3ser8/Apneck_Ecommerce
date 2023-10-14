import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Layout from './basic/Layout';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';
import { ToastContainer } from 'react-toastify';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='shop' element={<Shop />} />
          <Route path='blog' element={<Blog />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='cart' element={<Cart />} />
          <Route path='shop/details' element={<ProductDetails />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;