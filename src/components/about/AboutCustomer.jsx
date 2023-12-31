import MainHeading from "../main-heading/MainHeading";
import CustomerBox from "./CustomerBox";

function AboutCustomer() {
  return (
    <section>
      <div className="container">
        <MainHeading head={'What our customers say...'} text={'Our customers never miss a bit on providing feedback'} />
        <div className="customer-container grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-y-[50px]">
          <CustomerBox img={'/images/customers/customer-01.webp'} brand={'Marvel Clein'}  text={'Last updated 3 mins ago'} />
          <CustomerBox img={'/images/customers/customer-02.jpg'} brand={'Melisa Ivy'}  text={'Last Updated now'} />
          <CustomerBox img={'/images/customers/customer-03.webp'} brand={'Tristian Ann'}  text={'Last Updated now'}/>
          <CustomerBox img={'/images/customers/customer-04.webp'} brand={'Phillip Omosh'}  text={'Last updated 3 mins ago'} />
          <CustomerBox img={'/images/customers/customer-02.jpg'} brand={'Melisa Ivy'}  text={'Last updated 3 mins ago'} />
          <CustomerBox img={'/images/customers/customer-01.webp'} brand={'Marvel Clein'}  text={'Last updated 3 mins ago'} />
        </div>
      </div>
    </section>
  )
}

export default AboutCustomer;