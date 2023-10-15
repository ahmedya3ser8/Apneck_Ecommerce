import { useDispatch, useSelector } from "react-redux";
import { addToCart } from '../RTK/Slices/cartSlice';
import { useNavigate } from "react-router-dom";

function ProductDetails() {
  const detailsProducts = useSelector(state => state.detailsProduct.details);
  const {imgUrl, type, title, price, offer, desc, buttonText} = detailsProducts;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  return (
    <section className="py-24">
      <div className="container">
        <div className="details-box flex flex-col md:flex-row gap-[10px] md:gap-12 p-[20px] border-[1px] border-solid border-[#ccc]">
          <img src={imgUrl} alt="product img" className='h-[220px] object-cover rounded-[10px] m-auto' />
          <div className="details-content mt-2 p-[10px]">
            <span  className='block mb-2 text-[14px] text-[#cca27e]'>{type}</span>
            <h5 className='text-[18px] mb-2 font-medium transition-colors duration-300 hover:text-[#535bf2]'>{title}</h5>
            <div className="details-price flex gap-5">
              <span className='text-[#00a97f]'>{`$${price}`}</span>
              <span className='text-[#ea9d5a] line-through'>{`$${offer}`}</span>
            </div>
            <p>{desc}</p>
            <button className='block p-[10px] w-full mt-[15px] text-[18px] bg-[#354d61] text-white rounded-[10px]' onClick={() => dispatch(addToCart(detailsProducts))}>{buttonText}</button>
          </div>
        </div>
        <button className="p-[10px] bg-[#c3dacc86] mt-[10px] block ml-auto rounded-[10px] font-medium" onClick={() => navigate('/home/shop')}>Go back</button>
      </div>
    </section>
  )
}

export default ProductDetails;