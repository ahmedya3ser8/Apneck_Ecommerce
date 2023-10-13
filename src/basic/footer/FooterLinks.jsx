import { Link } from "react-router-dom";
import HeadFooter from "./HeadFooter";

function FooterLinks({link1, link2, link3, link4, link5}) {
  return (
    <div className="footer-content">
      <HeadFooter text={'About'} />
      <div>
        <ul>
          <li className='mb-[5px] py-[5px]'>
            <Link to={"about"} className="transition-all duration-300 hover:pl-3 hover:text-[#ff4500]">{link1}</Link>
          </li>
          <li className='mb-[5px] py-[5px]'>
            <a href="#" className="transition-all duration-300 hover:pl-3 hover:text-[#ff4500]">{link2}</a>
          </li>
          <li className='mb-[5px] py-[5px]'>
            <a href="#" className="transition-all duration-300 hover:pl-3 hover:text-[#ff4500]">{link3}</a>
          </li>
          <li className='mb-[5px] py-[5px]'>
            <a href="#" className="transition-all duration-300 hover:pl-3 hover:text-[#ff4500]">{link4}</a>
          </li>
          <li className='mb-[5px] py-[5px]'>
            <a href="#" className="transition-all duration-300 hover:pl-3 hover:text-[#ff4500]">{link5}</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default FooterLinks;