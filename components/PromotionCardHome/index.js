import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./card.module.css";
import { useRouter } from "next/router";
import { serverurl } from "../../base";

const Card = ({ className = "", placeholderImage, details }) => {
  const router = useRouter();
  // serverurl;
  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <div className={[styles.card, className].join(" ")}>
      <Image
        className={styles.placeholderImageIcon}
        width={620}
        height={260}
        alt=""
        src={
          details?.images1
            ? details?.images1.replace(/ /g, "%20")
            : "/placeholder-image3@2x.png"
        }
      />
      <div className={styles.content}>
        <div className={styles.contentHeadingOne}>
          <div className={styles.cardIntro}>{details?.category?.name}</div>
          <h3 className={styles.heading}>{details?.name}</h3>
        </div>
        {/* <div className={styles.contentDescriptionOne}>
          {details?.introduction?.length > 60
            ? details?.introduction.slice(0, 60) + "..."
            : details?.introduction}
        </div> */}
        <div className={styles.btns}>
          <button
            className={styles.btnLearn}
            onClick={() => {
              handleNavigation(`/specials/${details.slug}`);
            }}
          >
            Learn More
          </button>
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
