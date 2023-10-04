
function AboutApp() {
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-[25px] text-[#00a97f] mb-[25px] text-center font-bold">Download our <a href="#" className="text-[#0d6efd]">App</a></h2>
        <div className="about-video">
          <video autoPlay loop className="w-full h-[500px]">
            <source src="/static/images/about/about-app.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  )
}

export default AboutApp;