import { Link } from "react-router-dom";

function CustomerItems({img}) {
  return (
    <div className="customer-content p-[10px_15px] border-[1px] border-solid border-[#ccc] rounded-[10px] max-w-[300px] transition-shadow duration-300">
      <div className="customer-img">
        <img src={img} alt="customer-img" className="w-80 object-cover" />
      </div>
      <p className="text-[12px] text-[#666] my-[10px] font-medium">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
      <Link to={'about'} className="block w-fit p-[10px] text-[16px] border-[1px] border-solid border-transparent rounded-[10px] transition-colors duration-300 hover:border-[#ea9d5a] hover:text-[#ff6000]">Learn more</Link>
    </div>
  )
}

export default CustomerItems;