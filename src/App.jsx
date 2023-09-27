import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Layout from './components/Layout';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='shop' element={<Shop />} />
          <Route path='blog' element={<Blog />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;