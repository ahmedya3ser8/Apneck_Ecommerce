
function AboutUs() {
  return (
    <section className="py-12">
      <div className="container">
        <div className="about-us flex flex-col sm:flex-row items-center gap-[50px]">
          <div className="about-img w-full lg:w-[40%]">
            <img src="/images/about/about-us.jpg" alt="about-img" className="w-[420px] rounded-[10px]" />
          </div>
          <div className="about-content w-full lg:w-[60%]">
            <h2 className="text-[25px] font-bold text-[#ff4500] mb-[10px]">Who are we?</h2>
            <div className="about-info">
              <p className="text-[14px] w-full text-[#777] mb-[10px] lg:w-[350px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam tempore unde aperiam, consectetur harum a eum error,
                libero nemo quisquam ex assumenda corrupti rerum aut quod et sint facere reprehenderit?
              </p>
              <p className="text-[14px] w-full text-[#777] lg:w-[350px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam tempore unde aperiam, consectetur harum a eum error,
                libero nemo quisquam ex assumenda corrupti rerum aut quod et sint facere reprehenderit?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs;