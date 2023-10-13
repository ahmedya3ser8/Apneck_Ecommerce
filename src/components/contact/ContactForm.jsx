
function ContactForm() {
  return (
    <section className="py-12">
      <div className="container">
        <div className="contact-content bg-[#e4f0e9da] w-full md:w-[66%] p-[20px] m-auto">
          <h3 className="text-[#00a97f] font-bold mb-[10px] text-center text-[22px]">Leave Us A message</h3>
          <form className="contact-form p-[10px]" name="contact-form" id="contact-form">
            <div className="form-info flex justify-between mb-[10px] gap-5">
              <input type="text" name="first name" placeholder="First Name" id="firstname" className="p-[10px] w-1/2 outline-none rounded-[10px]" />
              <input type="text" name="last name" placeholder="Last Name" id="lastname" className="p-[10px] w-1/2 outline-none rounded-[10px]" />
            </div>
            <div className="form-info flex flex-col gap-[10px] my-[15px]">
              <input type="email" name="mail" placeholder="example@example.com" id="mail" className="p-[10px] outline-none rounded-[10px]" />
            </div>
            <div className="form-info">
              <textarea name="messaage" placeholder="Write Your Message" id="message" className="block w-full h-[150px] p-[10px] resize-none outline-none rounded-[10px] placeholder:text-slate-400"></textarea>
            </div>
            <button className="contact-btn block p-[10px] bg-[#2b3d4c] text-white rounded-[10px] m-auto mt-[15px] border-[1px] border-solid border-transparent transition-all duration-300 hover:border-[#ccc] hover:bg-transparent hover:text-black" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactForm;