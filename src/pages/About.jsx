import AboutApp from "../components/about/AboutApp";
import AboutCustomer from "../components/about/AboutCustomer";
import AboutLanding from "../components/about/AboutLanding";
import AboutUs from "../components/about/AboutUs";
import Icons from '../components/icons/Icons';

function About() {
  return (
    <main className="overflow-hidden">
      <AboutLanding />
      <AboutUs />
      <AboutApp />
      <AboutCustomer />
      <Icons />
    </main>
  )
}

export default About;