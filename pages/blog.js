import BlogCard from "../components/BlogListingCard";
import Footer from "../components/footer";
import styles from "./blog.module.css";
import FooterContainer from "../components/footer-container";

export async function getServerSideProps() {
  try {
    const response = await fetch(
      `https://romantic-acoustics-22fbc9f32c.strapiapp.com/api/blogs?populate=*`
    );
    const blogList = await response.json();
    console.log("BlogList", blogList);

    return {
      props: {
        blogList: blogList.data,
      },
    };
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return {
      props: {
        blogList: [],
      },
    };
  }
}

const Blog = ({ blogList }) => {
  return (
    <div className={styles.blog}>
      <FooterContainer />
      <div className={styles.banner}>
        <div className={styles.loremIpsumDolor}>HOME - BLOG</div>
        <h1 className={styles.mediumLengthHero}>Blog</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.blogs}>
          <section className={styles.heading}>
            <div className={styles.loremIpsumDolorSitAmetCoParent}>
              <div className={styles.loremIpsumDolor1}>BLOGS</div>
              <h1 className={styles.mediumLengthHero1}>Recent Articles</h1>
            </div>
          </section>
          <section className={styles.content}>
            <div className="row g-3 gy-5">
              {blogList?.length ? (
                blogList?.map((blog) => (
                  <div className="col col-12 col-md-4" key={blog.id}>
                    <BlogCard
                      documentId={blog.documentId}
                      Banner={blog.banner?.url ? blog.banner.url : null}
                      heading={blog.blog_name}
                      text={blog.short_details || "No details available"}
                      date={blog.blog_date}
                      {...blog}
                    />
                  </div>
                ))
              ) : (
                <div className="mt-3">Nothing to Show</div>
              )}
            </div>
            <div className={styles.row}></div>
          </section>
        </div>
      </div>
      <Footer
        maskGroup="/mask-group@2x.png"
        symbolsvg="/symbolsvg-21.svg"
        symbolsvg1="/symbolsvg-31.svg"
      />
    </div>
  );
};

export default Blog;
