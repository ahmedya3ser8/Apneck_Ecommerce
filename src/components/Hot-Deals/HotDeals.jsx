import Button from "../Buttons/Button";

function HotDeals() {
  return (
    <section className="py-12">
      <div className="container">
        <div className="deals-container flex flex-col md:flex-row gap-5">
          <div className="w-full md:w-1/2 p-[15px] border-[1px] border-solid border-[#ccc]">
            <div className="flex flex-col md:flex-row gap-3">
              <div className="deals-hot-img">
                <img src="/images/Hot-Deals/banner-01.jpg" alt="deals img" className="w-full object-cover md:object-fill md:w-[180px] md:h-[180px]" />
              </div>
              <div className="flex flex-col justify-between gap-[15px]">
                <div className="deals-content">
                  <span className="block text-[14px] text-[#777] mb-[5px]">Hot Deals</span>
                  <h3 className="text-[20px] mb-[5px]">Buy One get One free.</h3>
                  <p className="text-[14px] text-[#666]">The latest best collection in our closet
                    Feel Cute with our outfits</p>
                </div>
                <Button text={'Learn More'}/>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-[15px] border-[1px] border-solid border-[#ccc]">
            <div className="flex flex-col md:flex-row gap-3">
              <div className="deals-hot-img">
                <img src="/images/Hot-Deals/banner-02.jpg" alt="deals img" className="w-full object-cover md:object-fill md:w-[180px] md:h-[180px]" />
              </div>
              <div className="flex flex-col justify-between gap-[15px]">
                <div className="deals-content">
                  <span className="block text-[14px] text-[#777] mb-[5px]" >Hot Deals</span>
                  <h3 className="text-[20px] mb-[5px]">Buy One get One free.</h3>
                  <p className="text-[14px] text-[#666]">The latest best collection in our closet
                    Feel Cute with our outfits</p>
                </div>
                <Button text={'Learn More'}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HotDeals;