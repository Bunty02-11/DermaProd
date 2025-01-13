import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./card.module.css";

const Card = ({ className = "", placeholderImage }) => {
  return (
    <div className={[styles.card, className].join(" ")}>
      <Image
        className={styles.placeholderImageIcon}
        width={411}
        height={260}
        alt=""
        src={placeholderImage}
      />
      <div className={styles.content}>
        <div className={styles.contentHeadingOne}>
          <div className={styles.contentIntroOne}>FACIAL TREATMENTS</div>
          <h3 className={styles.heading}>Eye Puffiness</h3>
        </div>
        <div className={styles.contentDescriptionOne}>
          Rediscover your radiance with advanced skincare, including Jalupro,
          Botox, and Hydrafacial treatments, for a luminous and revitalized
          complexion. Hydrafacial treatments, for a luminous and revitalized
          complexion.
        </div>
        <div className={styles.btns}>
          <div className={styles.btnLearn}>
            <div className={styles.learnMore}>Learn More</div>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  placeholderImage: PropTypes.string.isRequired,
};

export default Card;
