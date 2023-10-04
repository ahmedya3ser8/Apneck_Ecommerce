
function ContactUs() {
  return (
    <section className="py-12">
      <div className="container">
        <div className="contact-us flex flex-col lg:flex-row gap-[50px] text-center">
          <div className="contact-map">
            <iframe className="h-[420px] w-full lg:w-[440px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63826.53634427054!2d37.09345325!3d-1.04201225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f4e5b27c66117%3A0xb6f8a7e126152c26!2sThika!5e0!3m2!1sen!2ske!4v1668532780442!5m2!1sen!2ske"
              loading="lazy" referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
          <div className="contact-content bg-[#e4f0e9da] p-[20px]">
            <h2 className="text-[22px] font-bold mb-[5px]">Contact Us</h2>
            <div className="contact-info my-[8px]">
              <p className="mb-[5px]">
                <b>Address:</b>
                Thika town, Naltex building, 2nd floor 
              </p>
              <p className="mb-[5px]">
                <b>Phone:</b>
                <a href="tel:+1234567890" className="text-[#859efa]"> Call us at +1 (234) 567-890</a>
              </p>
              <p className="mb-[5px]">
                <b>Hours:</b>
                From 8 a.m To 6 p.m
              </p>
            </div>
            <div className="contact-text">
              <p className="mb-[5px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Natus quos iusto rerum architecto a eaque consequuntur impedit! Harum earum iste,
                suscipit soluta, culpa necessitatibus quia sit nulla doloremque officia cum.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Velit hic veniam unde numquam in ullam laudantium odit explicabo itaque! Voluptate similique,
                accusantium consequatur provident soluta quaerat maxime adipisci vero sed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs;