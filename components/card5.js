import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./card5.module.css";

const Card5 = ({ className = "", placeholderImage, heading, text }) => {
  return (
    <div className={[styles.card, className].join(" ")}>
      <Image
        className={styles.placeholderImageIcon}
        loading="lazy"
        width={405}
        height={260}
        alt=""
        src={placeholderImage}
      />
      <div className={styles.content}>
        <div className={styles.textParent}>
          <div className={styles.text}>30 Oct 2024</div>
          <h2 className={styles.heading}>{heading}</h2>
        </div>
        <div className={styles.text1}>{text}</div>
      </div>
    </div>
  );
};

Card5.propTypes = {
  className: PropTypes.string,
  placeholderImage: PropTypes.string.isRequired,
  heading: PropTypes.string,
  text: PropTypes.string,
};

export default Card5;
