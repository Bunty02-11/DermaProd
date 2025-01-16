import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./card2.module.css";
import { useRouter } from "next/router";

const Card2 = ({ className = "", placeholderImage, details }) => {
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
  };

  console.log(details?.Name, "--details");

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
            : placeholderImage
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
              const formattedName = details?.Name.replace(/\s+/g, "-").toLowerCase();
              {console.log(formattedName, "--formattedName");}
              handleNavigation(
                `/concern-details/${formattedName}/${details?.documentId}`
              );
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
