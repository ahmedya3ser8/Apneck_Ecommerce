import Arrivals from "../components/Arrivals/Arrivals";
import Customer from "../components/Customer/Customer";
import FeatureProduct from "../components/FeatureProduct/FeatureProduct";
import Hero from "../components/Hero/Hero";
import HotDeals from "../components/Hot-Deals/HotDeals";
import Icons from '../components/icons/Icons';
import Services from "../components/services/services";

function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Icons />
      <FeatureProduct />
      <Services />
      <Arrivals />
      <HotDeals />
      <Customer />
    </main>
  )
}

export default Home;