
function BlogLanding() {
  return (
    <section className="py-20 bg-[url('/src/assets/images/blog.jpg')] bg-cover bg-center">
      <div className="container">
        <div className="landing-blog flex justify-center items-center flex-col text-white h-[20vh]">
          <h2 className="text-[20px] font-bold mb-[5px]">#Read More</h2>
          <p className="text-[16px] md:text-[18px]">Get to know what our trusted customers say...</p>
        </div>
      </div>
    </section>
  )
}

export default BlogLanding;