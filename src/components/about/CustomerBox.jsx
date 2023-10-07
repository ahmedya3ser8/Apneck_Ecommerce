
function CustomerBox({img, brand, text}) {
  return (
    <div className="customer-content p-[10px_15px] m-auto border-[1px] border-solid border-[#ccc] rounded-[10px] max-w-[300px] transition-shadow duration-300">
      <div className="customer-img">
        <img src={img} alt="customer img" className="w-80 object-cover" />
      </div>
      <div className="customer-info my-2">
        <span className="block text-[16px] font-bold mb-[5px]">{brand}</span>
        <p className="text-[14px] text-[#666] mb-[5px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit
          Doloribus maxime consequatur, ipsam architecto incidunt volup
          tate! Iste ipsa numquam quos nam quibusdam perferendis excepturi rem, a quo laudantium libero dolore nisi.
        </p>
        <p className="text-[15px] text-[#777]">{text}</p>
      </div>
  </div>
  )
}

export default CustomerBox;