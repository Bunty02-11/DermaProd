import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./card3.module.css";

const Card3 = ({ className = "", placeholderImage, heading, text }) => {
  return (
    <div className={[styles.card, className].join(" ")}>
      <Image
        className={styles.placeholderImageIcon}
        width={405}
        height={260}
        alt=""
        src={placeholderImage}
      />
      <div className={styles.content}>
        <div className={styles.postMeta}>
          <div className={styles.text}>30 Oct 2024</div>
          <h3 className={styles.heading}>{heading}</h3>
        </div>
        <div className={styles.text1}>{text}</div>
      </div>
    </div>
  );
};

Card3.propTypes = {
  className: PropTypes.string,
  placeholderImage: PropTypes.string.isRequired,
  heading: PropTypes.string,
  text: PropTypes.string,
};

export default Card3;
