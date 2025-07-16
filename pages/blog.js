import BlogCard from "../components/BlogListingCard";
import Footer from "../components/footer";
import styles from "./blog.module.css";
import FooterContainer from "../components/footer-container";
import axios from "axios";

export async function getServerSideProps() {
  try {
    const response = await axios.get("https://exw7ljbf37.execute-api.us-east-1.amazonaws.com/stagging/api/blogs");
    // Adjust this line if your API structure is different
    // console.log("Fetched blogs:", response.data);
    const blogs = (response.data);
    return {
      props: {
        blogList: blogs,
        error: null,
      },
    };
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return {
      props: {
        blogList: [],
        error: error.message || "Failed to fetch blog data",
      },
    };
  }
}

const Blog = ({ blogList, error }) => {
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
            {error && (
              <div className="alert alert-danger" role="alert">
                Failed to load blog data. Please try again later.
              </div>
            )}
            <div className="row g-3 gy-5">
              {blogList.length > 0 ? (
                blogList.map((blog) => (
                  // console.log("Rendering blog:", blog),
                  <div className="col col-12 col-md-4" key={blog._id}>
                    <BlogCard
                      Banner={
                        blog.banner ||
                        blog.image ||
                        "/placeholder-image4@2x.png"
                      }
                      heading={blog.title || "No title available"}
                      text={blog.meta_description || "No details available"}
                      date={blog.date || new Date().toISOString()}
                      documentId={blog._id || ""}
                      className=""
                    />
                  </div>
                ))
              ) : (
                <div className="col-12 text-center py-5">
                  No blog posts available
                </div>
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