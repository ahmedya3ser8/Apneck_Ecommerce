import FeatureItems from "../FeatureProduct/FeatureItems";
import MainHeading from "../main-heading/MainHeading";

function Arrivals() {
  return (
    <section>
      <div className="container">
        <MainHeading head={'New Arrivals'} text={'Your Best Designer Outfits'} />
        <div className="feature-container grid justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <FeatureItems img={'/images/products/arrivals-01.webp'} type={'nike'} desc={'Men\'s Dri-FIT T-Shirt'} exist={'in stock'} offer={'60% off'}/>
          <FeatureItems img={'/images/products/arrivals-02.webp'} type={'adidas'} desc={'Women\'s Badge of Sport Tee'} exist={'in stock'} offer={'60% off'}/>
          <FeatureItems img={'/images/products/arrivals-03.webp'} type={'levi s'} desc={'Men\'s 1950s Sportswear T-Shirt'} exist={'out of stock'} offer={'normal rates'}/>
          <FeatureItems img={'/images/products/arrivals-04.webp'} type={'under armour'} desc={'Men\'s Tech 2.0 Short Sleeve T-Shirt'} exist={'out of stock'} offer={'normal rates'}/>
        </div>
      </div>
    </section>
  )
}

export default Arrivals;