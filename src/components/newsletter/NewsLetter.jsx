import { Link } from "react-router-dom";

function NewsLetter() {
  return (
    <section className="bg-[#c3dacc86] py-10">
      <div className="container">
        <div className="newsletter flex flex-col md:flex-row sm:justify-around items-center gap-5 md:gap-0">
          <div className="left w-full md:w-[45%] text-center">
            <p className="text-[18px] mb-[5px]">Sign Up for a newsletter</p>
            <h5 className="text-[18px]">Get email updates on all our <a href="/" className="text-[#2196f3] font-medium text-[17px]">special offers</a> </h5>
          </div>
          <div className="right w-full md:w-[45%] flex gap-5">
            <input type="email" placeholder="example@example.com" className="w-full p-[10px] text-[15px] rounded-[10px] outline-none"/>
            <Link to={'about'} className="block w-fit p-[10px] text-[16px] border-[1px] border-solid border-transparent rounded-[10px] transition-colors duration-300 hover:border-[#ea9d5a] hover:text-[#ff6000]">Submit</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsLetter;