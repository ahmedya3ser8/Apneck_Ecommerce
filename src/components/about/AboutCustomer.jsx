import MainHeading from "../main-heading/MainHeading";
import CustomerBox from "./CustomerBox";

function AboutCustomer() {
  return (
    <section>
      <div className="container">
        <MainHeading head={'What our customers say...'} text={'Our customers never miss a bit on providing feedback'} />
        <div className="customer-container grid justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-y-[50px]">
          <CustomerBox img={'/public/static/images/customers/customer-01.jpg'} brand={'Marvel Clein'}  text={'Last updated 3 mins ago'} />
          <CustomerBox img={'/public/static/images/customers/customer-02.jpg'} brand={'Melisa Ivy'}  text={'Last Updated now'} />
          <CustomerBox img={'/public/static/images/customers/customer-03.jpg'} brand={'Tristian Ann'}  text={'Last Updated now'}/>
          <CustomerBox img={'/public/static/images/customers/customer-04.jpg'} brand={'Phillip Omosh'}  text={'Last updated 3 mins ago'} />
          <CustomerBox img={'/public/static/images/customers/customer-02.jpg'} brand={'Melisa Ivy'}  text={'Last updated 3 mins ago'} />
          <CustomerBox img={'/public/static/images/customers/customer-01.jpg'} brand={'Marvel Clein'}  text={'Last updated 3 mins ago'} />
        </div>
      </div>
    </section>
  )
}

export default AboutCustomer;