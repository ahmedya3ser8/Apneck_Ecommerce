
function FeatureItems({img, type, desc, exist, offer}) {
  return (
    <div className="feature-item p-[10px_15px] border-[1px] border-solid border-[#ccc] rounded-[10px] max-w-[250px] transition-shadow duration-300 hover:shadow-[10px_10px_20px_#00000014]">
      <div className="feature-img mb-[10px]">
        <img src={img} className="h-[220px] object-cover m-auto" alt="feature img" />
      </div>
      <div className="feature-info mb-[10px]">
        <span className="text-[14px] block mb-[5px] text-[#777]">{type}</span>
        <h5 className="mb-[10px] text-[18px]">{desc}</h5>
      </div>
      <div className="feature-content bg-[#21252908] p-[10px] border-t-[1px] border-solid border-[#ccc] text-center">
        <span className="block mb-2 text-[18px] text-[#ff4500]">{exist}</span>
        <span className="text-[14px] text-[#6b3b11] line-through">{offer}</span>
      </div>
    </div>
  )
}

export default FeatureItems;