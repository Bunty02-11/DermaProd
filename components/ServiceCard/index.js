import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./card2.module.css";
import { useRouter } from "next/router";

const Card2 = ({ className = "", placeholderImage, details }) => {
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
  };
  return (
    <div className={[styles.card, className].join(" ")}>
      <Image
        className={styles.placeholderImageIcon}
        loading="lazy"
        width={620}
        height={260}
        alt=""
        src={
          details?.Banner_image?.url
            ? details?.Banner_image?.url
            : "/placeholder-image3@2x.png"
        }
      />
      <div className={styles.content}>
        <div className={styles.cardIntroParent}>
          <div className={styles.cardIntro}>{details?.category?.Name}</div>
          <h3 className={styles.heading}>{details?.Name}</h3>
        </div>
        <div className={styles.cardDescription}>
          {details?.content?.introduction?.length > 250
            ? details?.content?.introduction?.slice(0, 250) + "..."
            : details?.content?.introduction}
        </div>
        <div className={styles.btns}>
          <button
            className={styles.btnLearn}
            onClick={() => {
              handleNavigation(`/services/${details?.documentId}`);
            }}
          >
            Learn More
          </button>
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
