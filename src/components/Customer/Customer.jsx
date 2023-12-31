import MainHeading from "../main-heading/MainHeading";
import CustomerItems from "./CustomerItems";

function Customer() {
  return (
    <section className="py-12">
      <div className="container">
        <MainHeading head={'What our customers say...'} text={'Our customers never miss a bit on providing feedback'} />
        <div className="customer-container grid justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <CustomerItems img={'/images/customers/customer-01.webp'} />
          <CustomerItems img={'/images/customers/customer-02.jpg'} />
          <CustomerItems img={'/images/customers/customer-03.webp'} />
          <CustomerItems img={'/images/customers/customer-04.webp'} />
        </div>
      </div>
    </section>
  )
}

export default Customer;