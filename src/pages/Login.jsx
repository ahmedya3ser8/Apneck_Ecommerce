import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {BiSolidUser, BiLockAlt} from 'react-icons/bi';
import { toast } from "react-toastify";

function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    if (userName == localStorage.getItem('userName') && password == localStorage.getItem('pass')) {
      toast.success('Done', {
        position: 'bottom-left',
        autoClose: 1000,
      });
      navigate('/home')
    } else{
      toast.error('Failed', {
        position: 'bottom-left',
        autoClose: 1000,
      });
    }
  }
  const handleRegister = (e) => {
    e.preventDefault();
    navigate('/');
  }

  return (
    <section className="bg-[#4070f4] h-screen">
      <div className="container">
        <div className="login-content w-[80%] md:w-[600px] lg:w-[700px] h-[400px] bg-white absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h2 className="login-title text-[#4070f4] text-[35px] w-fit m-auto mb-[20px] p-[10px] font-bold relative before:content-[''] before:absolute before:h-[3px] before:w-[60px] before:bg-[#4070f4] before:bottom-0 before:left-[25%]">Login</h2>
          <form className="login-form px-[20px] m-auto" name="login-form">
            <div className="login-input flex items-center h-[50px] rounded-[10px] bg-[#ddd]  gap-3 p-[10px] my-4">
              <BiSolidUser className="text-[#666]" />
              <input type="text" placeholder="username" className="w-full bg-transparent p-1 outline-none" id="user" name="user" value={userName} onChange={(e) => setUserName(e.target.value)} />
            </div>
            <div className="login-input flex items-center h-[50px] rounded-[10px] bg-[#ddd] gap-3 p-[10px] my-4">
              <BiLockAlt className="text-[#666]" />
              <input type="password" placeholder="your password" className="w-full bg-transparent p-1 outline-none" id="password" name="pass" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="login-btns flex justify-around items-center mt-[30px]">
              <button type="submit" className="block w-[45%] p-[10px] bg-[#ddd] text-black rounded-[25px] font-medium text-[18px]" onClick={handleRegister}>Sign Up</button>
              <button type="submit" className="block w-[45%] p-[10px] bg-[#4070f4] text-white rounded-[25px] font-medium text-[18px]" onClick={handleClick}>Login</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Login;