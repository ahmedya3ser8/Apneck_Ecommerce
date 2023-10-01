import { useDispatch, useSelector } from "react-redux";
import { addToCart, clearCart, removeFromCart, removeItem } from "../RTK/Slices/cartSlice";

function Cart() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  return (
    <section className="py-28">
      <div className="container">
        {cart.length > 0 ? (
        <div className="cart-container grid grid-cols-1 md:grid-cols-2 gap-5">
          {cart.map(product => (
            <div key={product.id} className="products-box p-[20px] border-[1px] border-solid border-[#ccc] flex justify-around">
              <div className="product-img">
                <img src={product.imgUrl} alt="product-img" className='h-[220px] rounded-[10px] m-auto' />
              </div>
              <div className="product-content mt-2 p-[10px]">
                <h5 className='text-[18px] mb-2 font-medium transition-colors duration-300 hover:text-[#535bf2]'>{product.title}</h5>
                <div className="product-price flex flex-col gap-2 mb-[10px]">
                  <p className="text-[14px]"><b>Product Brand:</b> {product.type}</p>
                  <p className="text-[14px]"><b>Product Price: </b> {product.price}</p>
                  <p className="text-[14px]"><b>Product Number:</b> {product.count}</p>
                </div>
                <div className="cart-btns flex justify-around items-center gap-5 mb-[10px]">
                  <button className="p-[5px_10px] text-[18px] font-medium bg-[#e4f0e9da]" onClick={() => dispatch(addToCart(product))}>+</button>
                  <button className="p-[5px_10px] text-[18px] font-medium bg-[#e4f0e9da]">{product.count}</button>
                  <button className="p-[5px_10px] text-[18px] font-medium bg-[#e4f0e9da]" onClick={() => dispatch(removeItem(product))}>-</button>
                </div>
                <button onClick={() => dispatch(removeFromCart(product))} className="p-[5px_10px] bg-[#ff4500] text-white font-medium rounded-[10px] mt-[10px] block ml-auto" >Delete</button>
              </div>
            </div>
          ))}
        </div>
        ) : <div className="flex justify-center items-center h-[25vh] bg-[#e4f0e9da] text-[25px]">This Is No Items To Show</div> }
          <button className="p-[5px_10px] bg-[#ff4500] block mt-[15px] text-white rounded-[10px] ml-auto" onClick={() => dispatch(clearCart())}>Clear</button>
      </div>
    </section>
  )
}

export default Cart;