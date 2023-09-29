import MainHeading from "../main-heading/MainHeading";
import BlogBox from "./BlogBox";

function BlogWrapper() {
  return (
    <section className="py-12">
      <div className="container">
        <MainHeading head={'Explore more in our library'} text={'Why we have trending Outfits Everywhere'} />
        <div className="blog-wrapper grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-12">
          <BlogBox imgUrl={'/src/assets/images/blog/blog-01.jpg'} brand={'Marvel Clein'}  text={'Last updated 3 mins ago'}  />
          <BlogBox imgUrl={'/src/assets/images/blog/blog-02.jpg'} brand={'Melisa Ivy'}  text={'Last Updated now'}  />
          <BlogBox imgUrl={'/src/assets/images/blog/blog-03.jpg'} brand={'Tristian Ann'}  text={'Last Updated now'}  />
          <BlogBox imgUrl={'/src/assets/images/blog/blog-04.jpg'} brand={'Phillip Omosh'}  text={'Last updated 3 mins ago'}  />
          <BlogBox imgUrl={'/src/assets/images/blog/blog-05.jpg'} brand={'Melisa Ivy'}  text={'Last updated 3 mins ago'}  />
          <BlogBox imgUrl={'/src/assets/images/blog/blog-06.jpg'} brand={'Marvel Clein'}  text={'Last updated 3 mins ago'}  />
          <BlogBox imgUrl={'/src/assets/images/blog/blog-07.jpg'} brand={'Tristian Ann'}  text={'Last updated 3 mins ago'}  />
          <BlogBox imgUrl={'/src/assets/images/blog/blog-03.jpg'} brand={'Melisa Ivy'}  text={'Last updated 3 mins ago'}  />
        </div>
      </div>
    </section>
  )
}

export default BlogWrapper;