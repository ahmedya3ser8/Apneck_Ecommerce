import {BsFacebook, BsInstagram, BsLinkedin, BsTwitter} from 'react-icons/bs';
import HeadFooter from './HeadFooter';
import FooterLinks from './FooterLinks';

function Footer() {
  return (
    <footer className='pt-12 pb-[25px]'>
      <div className="container">
        <div className="footer-head pb-[20px]">
          <div className="footer-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            <div className="footer-content">
              <HeadFooter text={'Contact'} />
              <div className="footer-info">
                <p className='text-[14px] mb-[10px]'>
                  <b>Address: </b> Thika town, Naltex building, 2nd floor
                </p>
                <p className='text-[14px] mb-[10px]'>
                  <b>Phone: </b> <a href="tel:+20105468798" className='text-[#ea9d5a]'>Call us at +1 (234) 567-890</a>
                </p>
                <p className='text-[14px] mb-[10px]'>
                  <b>Hours:</b> From 8 a.m To 6 p.m
                </p>
                <p className='text-[15px] font-medium mb-[10px]'>Follow the developer</p>
                <div className="footer-social flex gap-5">
                  <a href="">
                  <BsFacebook className='text-[#ea9d5a] text-[20px]' />
                  </a>
                  <a href="">
                  <BsTwitter className='text-[#ea9d5a] text-[20px]' />
                  </a>
                  <a href="">
                  <BsInstagram className='text-[#ea9d5a] text-[20px]' />
                  </a>
                  <a href="">
                  <BsLinkedin className='text-[#ea9d5a] text-[20px]' />
                  </a>
                </div>
              </div>
            </div>
            <FooterLinks link1={'About Us'} link2={'Delivery'} link3={'Privacy Policy'} link4={'Terms & Conditions'} link5={'Fee Policy'} />
            <FooterLinks link1={'Profile'} link2={'View Cart'} link3={'Help'} link4={'Payments'} link5={'Coupons'} />
            <div className="footer-content">
              <HeadFooter text={'Install App'} />
              <p className='mb-[5px]'>Available On Google Play Services & App Store</p>
              <div className='footer-icons flex items-center gap-[10px] mb-[10px]'>
                <div className='footer-icon border-[1px] border-solid border-[#00a97f] rounded-[10px] group'>
                  <a href="#">
                    <img src="/images/pay/play.jpg" alt="footer-icon-img" className='p-[10px_8px] transition-transform duration-300 group-hover:translate-y-[-5px]'/>
                  </a>
                </div>
                <div className='footer-icon border-[1px] border-solid border-[#00a97f] rounded-[10px] group'>
                  <a href="#">
                    <img src="/images/pay/app.jpg" alt="footer-icon-img" className='p-[10px_8px] transition-transform duration-300 group-hover:translate-y-[-5px]' />
                  </a>
                </div>
              </div>
              <p className='mb-[10px]'>Payment Methods</p>
              <div className="payment border-[1px] border-solid border-[#00a97f] rounded-[10px]">
                <a href="">
                  <img src="/images/pay/pay.png" alt="payment-logo" className='p-[10px_8px] transition-transform duration-300 hover:translate-y-[-5px]' />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom pt-[20px] border-t-[1px] border-solid border-[#00a97f]">
          <div className="footer-container flex flex-col md:flex-row md:gap-[5px] justify-between items-center">
            <p className='text-[#00a97f]'>&copy; Developed by ahmed yasser 2023</p>
            <div className='footer-links'>
              <ul className='flex gap-2'>
                <li>
                  <a href="#" className='transition-colors duration-300 hover:text-[#ff4500]'>Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className='transition-colors duration-300 hover:text-[#ff4500]'>Terms of Use</a>
                </li>
                <li>
                  <a href="#" className='transition-colors duration-300 hover:text-[#ff4500]'>Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;