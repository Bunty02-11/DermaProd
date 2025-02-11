import Image1 from "../../components/image1";
import BlogContent from "../../components/blog-content";
import Comment1 from "../../components/comment1";
import Footer from "../../components/footer";
import { useEffect, useState } from "react";
import moment from "moment";
import FooterContainer from "../../components/footer-container";
import styles from "./blog-details.module.css";

export async function getServerSidePaths() {
  const response = await fetch(
    `https://romantic-acoustics-22fbc9f32c.strapiapp.com/api/blogs?populate=*`
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

export async function getServerSideProps(context) {
  const { id } = context.params;

  try {
    const response = await fetch(
      `https://romantic-acoustics-22fbc9f32c.strapiapp.com/api/blogs/${id}?populate=*`
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

const BlogDetails = ({ blogData }) => {
  // console.log("🚀 ~ ConcernsDetails ~ blogData:", blogData);
  let blogDetails = blogData;
  // console.log("🚀 ~ ConcernsDetails ~ blogDetails:", blogDetails);
  return (
    <div className={styles.blogDetails}>
      <FooterContainer />
      <div className={styles.banner}>
        <div className={styles.loremIpsumDolor}>HOME - BLOG</div>
        <h1 className={styles.mediumLengthHero}>{blogDetails?.blog_name}</h1>
      </div>
      <div className={styles.container}>
        <main className={styles.blog}>
          <Image1
            Mainimg={blogDetails?.banner?.url}
            category={blogDetails?.attributes?.category}
            {...blogDetails}
          />
          <section className={styles.content}>
            <div className={styles.heading}>
              <div className={styles.loremIpsumDolorSitAmetCoParent}>
                <div className={styles.loremIpsumDolor1}>
                  ADMIN
                </div>
                <div className={styles.loremIpsumDolor2}>
                  {moment(blogDetails?.blog_date).format("DD MMMM YYYY")}
                </div>
              </div>
              <p className={styles.text}>
                {blogDetails?.blog_info?.introduction}
              </p>
            </div>
            <div className={styles.description}>
              <div className={styles.text}>
                {blogDetails?.blog_info?.sections?.map((section, index) => (
                  <div key={index}>
                    <h3>{section?.title}</h3>
                    <p>{section?.body}</p>

                    {section?.subsections?.length > 0 && (
                      <ul>
                        {section.subsections.map((subsection, subIndex) => (
                          <li key={subIndex}>
                            <h4>{subsection?.["sub-title"]}</h4>
                            <p>{subsection?.["sub-body"]}</p>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <BlogContent
              image1={blogDetails?.gallery1?.url}
              image2={blogDetails?.gallery2?.url}
              {...blogDetails}
            />
            <div className={styles.description}>
              <div className={styles.text}>
                <div>
                  <h3>Conclusion</h3>
                  <p>{blogDetails?.blog_info?.conclusion}</p>
                </div>
              </div>
            </div>
          </section>

          {/* <Comment1 /> */}
        </main>
      </div>
      <Footer
        maskGroup="/mask-group@2x.png"
        symbolsvg="/symbolsvg-21.svg"
        symbolsvg1="/symbolsvg-31.svg"
      />
    </div>
  );
};

export default BlogDetails;
