import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./services-description-items.module.css";

const ServicesDescriptionItems = ({ className = "", img, title, description }) => {
  return (
    <div className={[styles.servicesDescriptionItems, className].join(" ")}>
      <Image
        className={styles.imgIcon}
        loading="lazy"
        width={500}
        height={300}
        alt={title || "Image"}
        src={img}
      />
      <div className={styles.loremLipsumParent}>
        <h2 className={styles.loremLipsum}>{title || "Lorem Lipsum"}</h2>
        <div className={styles.text}>
          {description || "Section body content goes here."}
        </div>
      </div>
    </div>
  );
};

ServicesDescriptionItems.propTypes = {
  className: PropTypes.string,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ServicesDescriptionItems;
