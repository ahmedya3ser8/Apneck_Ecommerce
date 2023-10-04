
function Services() {
  return (
    <section className="py-10">
      <div className="container">
        <div className="services-box bg-[url('./static/images/service.jpg')] bg-cover h-[35vh] rounded-[10px]">
          <div className="services-content p-[20px] flex flex-col justify-center items-center h-full text-white text-center">
            <p className="mb-[10px] text-[18px]">Repair Services</p>
            <h2 className="text-[22px] mb-[10px]">On 70% Off on All Products And Accessories</h2>
            <button className="p-[10px] w-fit bg-[#ff6000] text-white rounded-[10px] text-[14px] border-[1px] border-solid border-transparent transition duration-300 hover:bg-transparent hover:border-[#ccc]">
              Explorer Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services;