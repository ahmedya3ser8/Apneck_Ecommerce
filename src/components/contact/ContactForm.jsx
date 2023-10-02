
function ContactForm() {
  return (
    <section className="py-12">
      <div className="container">
        <div className="contact-content bg-[#e4f0e9da] w-[66%] p-[20px] m-auto">
          <h3 className="text-[#00a97f] font-bold mb-[10px] text-center text-[22px]">Leave Us A message</h3>
          <form className="contact-form p-[10px]">
            <div className="form-info flex justify-between mb-[10px] gap-5">
              <input type="text" name="first name" placeholder="First Name" className="p-[10px] w-1/2" />
              <input type="text" name="last name" placeholder="Last Name" className="p-[10px] w-1/2" />
            </div>
            <div className="form-info flex flex-col gap-[10px]">
              <label className="mb-[5px]" >Enter Your Email address</label>
              <input type="email" name="mail" placeholder="example@example.com" className="p-[10px]" />
            </div>
            <div className="form-info">
              <label className="block p-[10px] mb-[5px]" >Type in your message</label>
              <textarea name="messaage" className="block w-full h-[150px] resize-none"></textarea>
            </div>
            <button className="contact-btn block p-[10px] bg-[#2b3d4c] text-white rounded-[10px] m-auto mt-[15px] border-[1px] border-solid border-transparent transition-all duration-300 hover:border-[#ccc] hover:bg-transparent hover:text-black" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactForm;