import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="hero bg-[url('./src/assets/images/hero4.png')] bg-cover bg-center min-h-screen relative top-[1px]">
      <div className="container">
        <div className="hero-content absolute top-[50%] translate-y-[-50%] w-[450px] p-[20px]">
          <span className='text-[14px] text-[#666] block mb-2'>Trade in offer</span>
          <h1 className='text-[35px] text-[#ff4500] font-bold mb-2'>Super Value Deals</h1>
          <h5 className='text-[25px] text-[#444] mb-2'>On all products</h5>
          <p className='text-[15px] text-[#777] mb-[20px]'>Save more today with Apneck</p>
          <Link to={'shop'} className='p-[10px] text-[18px] bg-[#2b3d4c] font-medium text-white rounded-[10px] border-[1px] border-solid border-transparent transition-all duration-300 hover:first-letter:bg-transparent hover:border-[#000] hover:bg-transparent hover:text-[#354d61]'>Shop Now</Link>
        </div>
      </div>
    </section>
  )
}

export default Hero;