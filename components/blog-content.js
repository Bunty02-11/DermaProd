import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./blog-content.module.css";
import { serverurl } from "../base";

const BlogContent = ({ className = "", image1, image2, blogDetails }) => {
  let img = "/img3@2x.png";
  console.log("image1", image1)
  console.log("image2", image2)

  return (
    <section className={[styles.blogContent, className].join(" ")}>
      <div className={styles.images}>
        <Image
          className={styles.imgIcon}
          loading="lazy"
          width={620}
          height={380}
          alt=""
          src={image1 ? image1 : "/img3@2x.png"}
        />
        <Image
          className={styles.imgIcon}
          loading="lazy"
          width={620}
          height={380}
          alt=""
          src={image2 ? image2 : "/img3@2x.png"}
        />
      </div>
    </section>
  );
};

BlogContent.propTypes = {
  className: PropTypes.string,
  img: PropTypes.string.isRequired,
  img1: PropTypes.string.isRequired,
};

export default BlogContent;
