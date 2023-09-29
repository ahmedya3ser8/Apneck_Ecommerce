import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeFromCart } from "../RTK/Slices/cartSlice";

function Cart() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  return (
    <section>
      <div className="container">
        <button onClick={() => dispatch(clearCart())}>clear</button>
        {cart.map(product => (
          <div key={product.id} className="products-box p-[20px] border-[1px] border-solid border-[#ccc] flex justify-around">
            <div className="product-img">
              <img src={product.imgUrl} alt="product-img" className='h-[220px] rounded-[10px] m-auto' />
            </div>
            <div className="product-content mt-2 p-[10px]">
              <h5 className='text-[18px] mb-2 font-medium transition-colors duration-300 hover:text-[#535bf2]'>{product.title}</h5>
              <div className="product-price flex gap-5">
                <p><b>Product Brand:</b> {product.type}</p>
                <p><b>Product Price: </b> {product.price}</p>
                <p><b>Product Number:</b> {product.count}</p>
              </div>
              <div className="cart-btns">
                <button>+</button>
                <button>{product.count}</button>
                <button>-</button>
              </div>
              <button onClick={() => dispatch(removeFromCart(product))}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Cart;