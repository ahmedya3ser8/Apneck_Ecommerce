import { useState } from 'react';
import logo from '../../assets/images/logo.png';
import {FaUserAlt, FaShoppingCart} from 'react-icons/fa';
import {AiOutlineMenu} from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Header() {
  const [links, setLinks] = useState([
    {path: "/", text: "Home"},
    {path: "shop", text: "Shop"},
    {path: "blog", text: "Blog"},
    {path: "about", text: "About"},
    {path: "contact", text: "Contact"},
  ])
  return (
    <header className='h-[70px] p-[10px] bg-[#c3dacc86]'>
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="left flex items-center gap-5">
            <Link to="/" className='w-[50px]'>
              <img src={logo} alt="logo" className='h-[50px]' />
            </Link>
            <div>
              <input type="text" placeholder="Search..." className='w-full p-[10px] bg-white text-[18px] border-[1px] border-solid border-[#ccc] outline-none rounded-[25px]'/>
            </div>
          </div>
          <div className="right flex items-center">
            <nav className='ml-[10px]'>
              <ul className='hidden md:flex md:gap-8'>
                {links.map((link, index) => (
                  <li key={index}>
                  <Link to={link.path} className='text-[18px] text-[#2b3d4c] hover:text-slate-400'>{link.text}</Link>
                </li>
                ))}
              </ul>
              <AiOutlineMenu className='text-[22px] md:hidden' />
            </nav>
            <div className="nav-icons ml-4 md:ml-12 flex gap-4 md:gap-6">
              <FaUserAlt className='text-[22px] hover:text-slate-500' />
              <FaShoppingCart className='text-[22px] hover:text-slate-500'/>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;