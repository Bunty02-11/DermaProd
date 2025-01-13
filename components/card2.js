import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./card2.module.css";

const Card2 = ({ className = "", placeholderImage }) => {
  return (
    <div className={[styles.card, className].join(" ")}>
      <Image
        className={styles.placeholderImageIcon}
        loading="lazy"
        width={620}
        height={260}
        alt=""
        src={placeholderImage}
      />
      <div className={styles.content}>
        <div className={styles.cardIntroParent}>
          <div className={styles.cardIntro}>FACIAL TREATMENTS</div>
          <h3 className={styles.heading}>Eye Puffiness</h3>
        </div>
        <div className={styles.cardDescription}>
          Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.
        </div>
        <div className={styles.btns}>
          <div className={styles.btnBook}>
            <div className={styles.bookNow}>Book Now</div>
          </div>
          <div className={styles.btnLearn}>
            <div className={styles.learnMore}>Learn More</div>
          </div>
        </div>
      </div>
    </div>
  );
};

Card2.propTypes = {
  className: PropTypes.string,
  placeholderImage: PropTypes.string.isRequired,
};

export default Card2;
