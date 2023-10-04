import MainHeading from "../main-heading/MainHeading";
import CustomerItems from "./CustomerItems";

function Customer() {
  return (
    <section className="py-12">
      <div className="container">
        <MainHeading head={'What our customers say...'} text={'Our customers never miss a bit on providing feedback'} />
        <div className="customer-container grid justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <CustomerItems img={'/static/images/customers/customer-01.jpg'} />
          <CustomerItems img={'/static/images/customers/customer-02.jpg'} />
          <CustomerItems img={'/static/images/customers/customer-03.jpg'} />
          <CustomerItems img={'/static/images/customers/customer-04.jpg'} />
        </div>
      </div>
    </section>
  )
}

export default Customer;