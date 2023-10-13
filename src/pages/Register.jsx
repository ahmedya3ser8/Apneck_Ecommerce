import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {BiSolidUser, BiLockAlt} from 'react-icons/bi';
import {MdEmail} from 'react-icons/md';
import { toast } from "react-toastify";

function Register() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    if (userName | email | password == '') {
      toast.error('Failed Please Check username or password', {
        position: 'bottom-left',
        autoClose: 1000,
      });
    } else{
      localStorage.setItem('userName', userName)
      localStorage.setItem('mail', email)
      localStorage.setItem('pass', password)
      toast.success('Done', {
        position: 'bottom-left',
        autoClose: 1000,
      });
      navigate('login');
    }
  }

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('login')
  }
  return (
    <section className="bg-[#4070f4] h-screen">
      <div className="container">
        <div className="register-content w-[80%] md:w-[600px] lg:w-[700px] h-[400px] bg-white absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h2 className="register-title text-[#4070f4] text-[35px] w-fit m-auto mb-[20px] p-[10px] font-bold relative before:content-[''] before:absolute before:h-[3px] before:w-[60px] before:bg-[#4070f4] before:bottom-0 before:left-[25%]">Register</h2>
          <form className="register-form px-[20px] m-auto" name="register-form">
            <div className="register-input flex items-center h-[50px] rounded-[10px] bg-[#ddd] gap-3 p-[10px] my-4">
              <BiSolidUser className="text-[#666]" />
              <input type="text" placeholder="username" className="w-full bg-transparent p-1 outline-none" id="user" name="user" value={userName} onChange={(e) => setUserName(e.target.value)} />
            </div>
            <div className="register-input flex items-center h-[50px] rounded-[10px] bg-[#ddd] gap-3 p-[10px] my-4">
              <MdEmail className="text-[#666]" />
              <input type="email" placeholder="your email" className="w-full bg-transparent p-1 outline-none" id="email" name="mail" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="register-input flex items-center h-[50px] rounded-[10px] bg-[#ddd] gap-3 p-[10px] my-4">
              <BiLockAlt className="text-[#666]" />
              <input type="password" placeholder="your password" className="w-full bg-transparent p-1 outline-none" id="password" name="pass" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="register-btn mt-[20px]">
              <button type="submit" className="block w-full p-[10px] bg-[#4070f4] text-white rounded-[25px] font-medium text-[18px]" onClick={handleClick}>Sign Up</button>
            </div>
            <p className="p-[5px] text-center text-[18px] mt-[5px]">
              Already have an account?
              <button type="submit" className="text-[#4070f4] pl-2" onClick={handleLogin}>Login</button>
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Register;