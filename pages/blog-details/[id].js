import Image1 from "../../components/image1";
import BlogContent from "../../components/blog-content";
import Comment1 from "../../components/comment1";
import Footer from "../../components/footer";
import styles from "./blog-details.module.css";
import { useEffect, useState } from "react";
import moment from "moment";
import FooterContainer from "../../components/footer-container";

export async function getStaticPaths() {
  const response = await fetch(
    `https://grateful-authority-34f01c9d0d.strapiapp.com/api/blogs?populate=*`
  );
  const concern = await response.json();

  const paths = concern?.data.map((concern) => ({
    params: { id: concern.documentId.toString() }, // Ensure the id is a string
  }));
  console.log("🚀 ~ paths ~ paths:", paths);
  return {
    paths, // The list of dynamic paths to pre-render
    fallback: false, // Set to 'false' if you want to show 404 for non-existent paths
  };
}

export async function getStaticProps(context) {
  const { id } = context.params;

  try {
    const response = await fetch(
      `https://grateful-authority-34f01c9d0d.strapiapp.com/api/blogs/${id}?populate=`
    );
    const blogData = await response.json();
    if (!blogData || !blogData.data) {
      return {
        notFound: true, // If no concern is found, show a 404 page
      };
    }

    return {
      props: { blogData: blogData.data }, // Pass only the relevant concern data
    };
  } catch (error) {
    console.error("Error fetching concern data:", error);
    return {
      notFound: true, // Fallback to 404 if an error occurs
    };
  }
}

const BlogDetails = () => {
  const [blogDetails, setBlogDetails] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchBlogDetails = async () => {
      const storedIds = JSON.parse(localStorage.getItem("documentIds")) || [];
      const documentId = storedIds[storedIds.length - 1];

      if (!documentId) {
        setError(true);
        return;
      }

      try {
        const response = await fetch(
          `https://grateful-authority-34f01c9d0d.strapiapp.com/api/blogs/${documentId}?populate=*`
        );
        const data = await response.json();
        console.log("Blog Details", data);

        if (!data || !data.data) {
          setError(true);
        } else {
          setBlogDetails(data.data);
        }
        // console.log("Blog Details", blogDetails);
      } catch (error) {
        console.error("Error fetching blog details:", error);
        setError(true);
      }
    };

    fetchBlogDetails();
  }, []);

  if (error) {
    return <div>Error loading blog details. Please try again later.</div>;
  }

  const sectionsElements = [];
  blogDetails?.attributes?.blog_info?.sections?.forEach((section, index) => {
    sectionsElements.push(
      <div key={index}>
        <h3>{section?.title}</h3>
        <p>{section?.content}</p>
      </div>
    );
  });

  return (
    <div className={styles.blogDetails}>
      <FooterContainer />
      <div className={styles.banner}>
        <div className={styles.loremIpsumDolor}>HOME - BLOG</div>
        <h1 className={styles.mediumLengthHero}>{blogDetails?.blog_name}</h1>
      </div>
      <main className={styles.blog}>
        <Image1
          Mainimg={blogDetails?.banner?.url}
          category={blogDetails?.attributes?.category}
        />
        <section className={styles.content}>
          <div className={styles.heading}>
            <div className={styles.loremIpsumDolorSitAmetCoParent}>
              <div className={styles.loremIpsumDolor1}>
                {blogDetails?.blog_author}
              </div>
              <div className={styles.loremIpsumDolor2}>
                {moment(blogDetails?.blog_date).format("DD MMMM YYYY")}
              </div>
            </div>
            <h1 className={styles.mediumLengthHero1}>
              {blogDetails?.blog_name}
            </h1>
          </div>
          <div className={styles.description}>
            <div className={styles.text}>
              <div>
                <h3>{blogDetails?.blog_info?.sections?.[0]?.title}</h3>
                <p>{blogDetails?.blog_info?.sections?.[0]?.content}</p>
              </div>
              <div>
                <h3>{blogDetails?.blog_info?.sections?.[1]?.title}</h3>
                <p>{blogDetails?.blog_info?.sections?.[1]?.content}</p>
              </div>
              <div>
                <h3>{blogDetails?.blog_info?.sections?.[2]?.title}</h3>
                <p>{blogDetails?.blog_info?.sections?.[2]?.content}</p>
              </div>
            </div>
          </div>
        </section>
        <BlogContent
          image1={blogDetails?.gallery?.[0]?.url}
          image2={blogDetails?.gallery?.[1]?.url}
        />

        <Comment1 />
      </main>
      <Footer
        maskGroup="/mask-group@2x.png"
        symbolsvg="/symbolsvg-21.svg"
        symbolsvg1="/symbolsvg-31.svg"
      />
    </div>
  );
};

export default BlogDetails;
