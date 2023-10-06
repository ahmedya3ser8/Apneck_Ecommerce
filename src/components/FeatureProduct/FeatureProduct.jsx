import MainHeading from "../main-heading/MainHeading";
import FeatureItems from "./FeatureItems";

function FeatureProduct() {
  return (
    <section className=" py-12">
      <div className="container">
        <MainHeading head={'Featured Products'} text={'All Weather New Modern Designs'} />
        <div className="feature-container grid justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <FeatureItems img={'/images/products/products-01.webp'} type={'adidas'} desc={'Women\'s Badge of Sport Tee'} exist={'in stock'} offer={'$50% Off'} />
          <FeatureItems img={'/images/products/products-02.webp'} type={'levi s'} desc={'Men\'s 1950s Sportswear T-Shirt'} exist={'in stock'} offer={'$50% Off'} />
          <FeatureItems img={'/images/products/products-03.webp'} type={'under armour'} desc={'Men\'s Tech 2.0 Short Sleeve T-Shirt'} exist={'in stock'} offer={'$50% Off'} />
          <FeatureItems img={'/images/products/products-04.webp'} type={'h&m'} desc={'Women\'s Basic Tee, Men\'s Rebel Bold Te'} exist={'in stock'} offer={'$50% Off'} />
        </div>
      </div>
    </section>
  )
}

export default FeatureProduct;