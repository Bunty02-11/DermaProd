import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./card4.module.css";

const Card4 = ({ className = "", placeholderImage, name1, jobTitle }) => {
  return (
    <div className={[styles.card, className].join(" ")}>
      <Image
        className={styles.placeholderImageIcon}
        loading="lazy"
        width={258}
        height={260}
        alt=""
        src={placeholderImage}
      />
      <div className={styles.content}>
        <div className={styles.title}>
          <div className={styles.name}>{name1}</div>
          <div className={styles.jobTitle}>{jobTitle}</div>
        </div>
        <div className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </div>
      </div>
    </div>
  );
};

Card4.propTypes = {
  className: PropTypes.string,
  placeholderImage: PropTypes.string.isRequired,
  name1: PropTypes.string,
  jobTitle: PropTypes.string,
};

export default Card4;
