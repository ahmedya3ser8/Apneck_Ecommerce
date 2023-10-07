
function BlogBox({imgUrl, brand, text}) {
  return (
    <div className="blog-box flex justify-between flex-col xl:flex-row items-center gap-5 p-[20px] border-[1px] border-solid border-[#ccc]">
    <div className="blog-img w-full">
      <img src={imgUrl} alt="blog-img" className="w-[240px] h-[240px] object-cover rounded-[10px]" />
    </div>
    <div className="blog-content">
      <span className="block text-[16px] font-bold mb-[5px]">{brand}</span>
      <p className="text-[14px] text-[#666] mb-[5px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quibusdam tempore unde aperiam, consectetur harum a eum error,
        libero nemo quisquam ex assumenda corrupti rerum aut quod et sint facere reprehenderit?
      </p>
      <p className="text-[15px] text-[#777]">{text}</p>
    </div>
  </div>
  )
}

export default BlogBox;