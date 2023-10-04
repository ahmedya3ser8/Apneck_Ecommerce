// import { useEffect } from 'react';
import {AiFillStar, AiOutlineStar} from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../RTK/Slices/cartSlice';
import { Link } from 'react-router-dom';
import { viewDetails } from '../../RTK/Slices/detailsSlice';

function Products() {
  const products = useSelector(state => state.products.data);
  const dispatch = useDispatch();

  return (
    <section className="py-12">
      <div className="container">
        <div className="products-container grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-8 gap-y-12">
          {products.map(product => (
            <div key={product.id} className="products-box p-[20px] border-[1px] border-solid border-[#ccc] transition-shadow duration-300 hover:shadow-[10px_10px_20px_#00000014]">
              <img src={product.imgUrl} alt="product-img" className='h-[220px] rounded-[10px] m-auto' />
              <div className="product-content mt-2 p-[10px] flex flex-col gap-2">
                <span className='block mb-2 text-[14px] text-[#cca27e]'>{product.type}</span>
                <h5 className='text-[14px] mb-2 font-medium transition-colors duration-300 hover:text-[#535bf2]'>{product.title}</h5>
                <div className="product-stars flex gap-[5px] mb-2">
                  <AiFillStar className='text-[20px] text-[#ea9d5a]' />
                  <AiFillStar className='text-[20px] text-[#ea9d5a]' />
                  <AiFillStar className='text-[20px] text-[#ea9d5a]' />
                  <AiFillStar className='text-[20px] text-[#ea9d5a]' />
                  <AiOutlineStar className='text-[20px] text-[#808080]' />
                </div>
                <div className="product-price flex gap-5">
                  <span className='text-[#00a97f]'>{`$${product.price}`}</span>
                  <span className='text-[#ea9d5a] line-through'>{`$${product.offer}`}</span>
                </div>
                <Link to='/details' onClick={() => dispatch(viewDetails(product))} className='block my-[10px] text-center text-[20px] text-[#535bf2] font-bold transition-colors duration-300 hover:text-[#ea9d5a]'>{product.linkText}</Link>
                <button className='block p-[10px] w-fit m-auto text-[18px] bg-[#354d61] text-white rounded-[10px]' onClick={() => dispatch(addToCart(product))}>{product.buttonText}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products;