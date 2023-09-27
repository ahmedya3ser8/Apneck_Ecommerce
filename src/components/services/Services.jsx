import Button from "../Buttons/Button";

function Services() {
  return (
    <section className="py-10">
      <div className="container">
        <div className="services-box bg-[url('./src/assets/images/service.jpg')] bg-cover h-[35vh] rounded-[10px]">
          <div className="services-content p-[20px] flex flex-col justify-center items-center h-full text-white">
            <p className="mb-[10px] text-[18px]">Repair Services</p>
            <h2 className="text-[22px] mb-[10px]">On 70% Off on All Products And Accessories</h2>
            <Button text={'Explorer Now'}/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services;