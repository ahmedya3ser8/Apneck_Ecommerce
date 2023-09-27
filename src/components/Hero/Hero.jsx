import { Link } from 'react-router-dom';
import './Hero.css';

function Hero() {
  return (
    <section className="hero bg-[url('./src/assets/images/hero4.png')] bg-cover bg-center min-h-[calc(100vh - 70px)]">
      <div className="container">
        <div className="hero-content">
          <span>Trade in offer</span>
          <h1>Super Value Deals</h1>
          <h5>On all products</h5>
          <p>Save more today with Apneck</p>
          <Link to={'shop'}>Shop Now</Link>
        </div>
      </div>
    </section>
  )
}

export default Hero;