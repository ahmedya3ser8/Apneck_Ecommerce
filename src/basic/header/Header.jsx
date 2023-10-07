import { useState } from 'react';
import logo from '/images/logo.webp';
import {FaUserAlt, FaShoppingCart} from 'react-icons/fa';
import {AiOutlineClose} from 'react-icons/ai';
import {AiOutlineMenu} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const [links, setLinks] = useState([
    {path: "/home", text: "Home"},
    {path: "shop", text: "Shop"},
    {path: "blog", text: "Blog"},
    {path: "about", text: "About"},
    {path: "contact", text: "Contact"},
  ]);
  const cart = useSelector(state => state.cart.cartItems);
  const [openMenu, setopenMenu] = useState(false);

  return (
    <header className='h-[70px] p-[10px] bg-[#cbd6cf] fixed top-0 left-0 w-full z-10'>
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="left w-[50%] flex flex-row-reverse justify-between items-center md:justify-end gap-5">
            <Link to="/home" className='w-[50px]' title='logo-img'>
              <img src={logo} alt="logo" className='h-[50px]' />
            </Link>
            <div className='text-[22px] md:hidden' onClick={() => setopenMenu(!openMenu)}>
              {openMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
            </div>
          </div>
          <div className="right flex items-center">
            <nav className='ml-[10px]'>
              <ul className={openMenu ? 'absolute left-0 top-[70px] w-full h-[223px] bg-white' : 'hidden md:flex md:gap-8'}>
                {links.map((link, index) => (
                  <li className='p-[8px] md:p-0 last:border-none border-b-[1px] border-solid border-[#ccc] md:border-none' key={index}>
                  <Link to={link.path} className='text-[18px] text-[#2b3d4c] transition-all duration-300 hover:pl-4 hover:text-[#ff4500] md:hover:pl-0'>{link.text}</Link>
                </li>
                ))}
              </ul>
            </nav>
            <div className="nav-icons ml-4 md:ml-12 flex gap-4 md:gap-6">
              <Link to={'/'} title='signup' >
                <FaUserAlt className='text-[22px] transition-all duration-300 hover:text-[#ff4500]' />
              </Link>
              <Link to={'cart'} className='relative' title='cart'>
                <FaShoppingCart className='text-[22px] transition-all duration-300 hover:text-[#ff4500]'/>
                <span className='absolute top-[-15px] right-[-10px] w-[20px] h-[20px] rounded-full bg-[#e4f0e9da] flex justify-center items-center z-[-1] font-medium'>
                  {cart.length}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;