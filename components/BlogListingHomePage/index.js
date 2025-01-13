import BlogCard from "../BlogListingCard";

import PropTypes from "prop-types";
import styles from "./services1.module.css";
import Slider from "react-slick";
import { useEffect, useRef, useState } from "react";
import Heading from "../heading";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const Services1 = (props) => {
  let sliderAboutRef = useRef();
  const { className = "", content } = props;
  const [blogsList, setBlogsList] = useState([]);

  const nextSlide = () => {
    sliderAboutRef?.current?.slickNext();
  };
  const previousSlide = () => {
    sliderAboutRef?.current?.slickPrev();
  };

  async function getBlogDetails() {
    try {
      const response = await fetch(
        `https://grateful-authority-34f01c9d0d.strapiapp.com/api/blogs?populate=*`
      );
      const BlodDetails = await response.json();
      if (!BlodDetails || !BlodDetails.data) {
        return;
      }
      setBlogsList(BlodDetails?.data);
    } catch (error) {
      console.error("Error fetching concern data:", error);
    }
  }
  useEffect(() => {
    setBlogsList([]);
    getBlogDetails();
  }, []);

  if (!blogsList?.lengt) {
    return "";
  }
  return (
    <>
      <Heading nextSlide={nextSlide} previousSlide={previousSlide} />
      <section className={[styles.services, className].join(" ")}>
        <div className={styles.content}>
          <div className={styles.row}>
            <div style={{ flex: "100%" }}>
              <Slider {...settings} ref={sliderAboutRef}>
                {blogsList?.slice(0, 5)?.map((blog) => (
                  <div
                    style={{
                      position: "relative",
                      padding: "0 20px",
                    }}
                  >
                    <BlogCard
                      id={blog?.id}
                      mainImg={blog?.mainBanner?.url}
                      heading={blog?.blog_name}
                      text={blog?.short_details}
                      date={blog?.publishedAt}
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

Services1.propTypes = {
  className: PropTypes.string,
};

export default Services1;
