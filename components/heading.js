import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./heading.module.css";

const Heading = ({ className = "", previousSlide, nextSlide }) => {
  return (
    <div className={[styles.heading, className].join(" ")}>
      <div className={styles.blogTitle}>
        <div className={styles.loremIpsumDolor}>BLOGS</div>
        <h1 className={styles.mediumLengthHero}>Recent Articles</h1>
      </div>
      <div className={styles.sliderButtons}>
        <div className={styles.arrows}>
          <Image
            className={styles.fearrowUpIcon}
            width={24}
            height={24}
            alt=""
            src="/fearrowup@2x.png"
            onClick={() => previousSlide()}
            style={{
              transform: `rotate(180deg)`,
            }}
          />
        </div>
        <div className={styles.arrows}>
          <Image
            className={styles.fearrowUpIcon}
            width={24}
            height={24}
            alt=""
            src="/fearrowup@2x.png"
            onClick={() => nextSlide()}
          />
        </div>
      </div>
    </div>
  );
};

Heading.propTypes = {
  className: PropTypes.string,
};

export default Heading;
