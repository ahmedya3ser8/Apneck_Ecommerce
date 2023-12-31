import Arrivals from "../components/Arrivals/Arrivals";
import Customer from "../components/Customer/Customer";
import FeatureProduct from "../components/FeatureProduct/FeatureProduct";
import Hero from "../components/Hero/Hero";
import HotDeals from "../components/Hot-Deals/HotDeals";
import Icons from '../components/icons/Icons';
import NewsLetter from "../components/newsletter/NewsLetter";
import Services from "../components/services/Services";

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
      <NewsLetter />
    </main>
  )
}

export default Home;