import Image1 from "../../components/image1";
import BlogContent from "../../components/blog-content";
import Comment1 from "../../components/comment1";
import Footer from "../../components/footer";
import { useEffect, useState } from "react";
import moment from "moment";
import FooterContainer from "../../components/footer-container";
import styles from "./blog-details.module.css";
import axios from "axios";

export async function getServerSidePaths() {
  try {
    const response = await fetch(
      `https://exw7ljbf37.execute-api.us-east-1.amazonaws.com/stagging/api/blogs`
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const blogs = await response.json();

    if (!blogs.data || !Array.isArray(blogs.data)) {
      return {
        paths: [],
        fallback: false,
      };
    }

    const paths = blogs.data.map((blog) => ({
      params: { id: blog._id.toString() }, // Ensure the id is a string
    }));
    console.log("🚀 ~ paths ~ paths:", paths);
    return {
      paths, // The list of dynamic paths to pre-render
      fallback: 'blocking', // Show loading state while fetching data
    };
  } catch (error) {
    console.error("Error fetching blog paths:", error);
    return {
      paths: [],
      fallback: 'blocking',
    };
  }
}

export async function getServerSideProps(context) {
  const { id } = context.params;

  try {
    const response = await axios.get(`https://exw7ljbf37.execute-api.us-east-1.amazonaws.com/stagging/api/blogs/${id}`);
    const blogData = response.data;
    if (!blogData) {
      return {
        props: {
          blogData: null,
          hasData: false,
          error: "Blog post not found"
        }
      };
    }

    return {
      props: { 
        blogData: blogData,
        hasData: true,
        error: null
      },
    };
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return {
      props: {
        blogData: null,
        hasData: false,
        error: error.message || "Failed to fetch blog data"
      },
    };
  }
}

const BlogDetails = ({ blogData, hasData, error }) => {
  
  let blogDetails = blogData;
  // console.log("🚀 ~ BlogDetails ~ blogData:", blogData);
  
  if (!hasData) {
    return (
      <div className={styles.blogDetails}>
        <FooterContainer />
        <div className={styles.banner}>
          <div className={styles.loremIpsumDolor}>HOME - BLOG</div>
          <h1 className={styles.mediumLengthHero}>Blog Details</h1>
        </div>
        <div className={styles.container}>
          <main className={styles.blog}>
            <div className="alert alert-danger text-center my-5" role="alert">
              {error ? `Error: ${error}` : "Blog post not found or unavailable"}
            </div>
          </main>
        </div>
        <Footer
          maskGroup="/mask-group@2x.png"
          symbolsvg="/symbolsvg-21.svg"
          symbolsvg1="/symbolsvg-31.svg"
        />
      </div>
    );
  }
  
  return (
    <div className={styles.blogDetails}>
      <FooterContainer />
      <div className={styles.banner}>
        <div className={styles.loremIpsumDolor}>HOME - BLOG</div>
        <h1 className={styles.mediumLengthHero}>{blogDetails?.title || "Blog Details"}</h1>
      </div>
      <div className={styles.container}>
        <main className={styles.blog}>
          <Image1
            Mainimg={
              blogDetails?.banner?.url ||
              blogDetails?.banner ||
              "/placeholder-image4@2x.png"
            }
            category={blogDetails?.category}
            {...blogDetails}
          />
          <section className={styles.content}>
            <div className={styles.heading}>
              <div className={styles.loremIpsumDolorSitAmetCoParent}>
                <div className={styles.loremIpsumDolor1}>
                  {blogDetails?.author ? blogDetails.author.toUpperCase() : "ADMIN"}
                </div>
                <div className={styles.loremIpsumDolor2}>
                  {blogDetails?.date
                    ? moment(blogDetails.date).format("DD MMMM YYYY")
                    : "No date available"}
                </div>
              </div>
              {/* <p className={styles.text}>
                {blogDetails?.intro || "No introduction available"}
              </p> */}
            </div>
            <div className={styles.description}>
              <div className={styles.text}>
                {Array.isArray(blogDetails?.content) &&
                  blogDetails.content.map((section, index) => (
                    <div key={index}>
                      <h3>{section?.title}</h3>
                      <p>{section?.body}</p>
                      {Array.isArray(section?.section) && section.section.length > 0 && (
                        <ul>
                          {section.section.map((subsection, subIndex) => (
                            <li key={subIndex}>
                              <h4>{subsection?.title}</h4>
                              <p>{subsection?.body}</p>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
              </div>
            </div>
            {/* BlogContent and conclusion are not present in this structure, so skip or adjust as needed */}
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
