
function ShopBanner() {
  return (
    <section className="py-20 bg-[url('/images/shop-banner.webp')] bg-cover">
      <div className="container">
        <div className="banner-content flex flex-col justify-center items-center text-white h-[20vh]">
          <h2 className="text-[25px] mb-[5px]"><b className="text-[25px] text-[#00a97f]">#100%</b> Off On All Products</h2>
          <p className="text-[15px]">Make your orders we will deliver..</p>
        </div>
      </div>
    </section>
  )
}

export default ShopBanner;