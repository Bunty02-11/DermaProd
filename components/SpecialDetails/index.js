import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./specials-description-items.module.css";
import { serverurl } from "../../base";

const SpecialDescriptuonItems = ({ className = "", img, title, description,image2, image }) => {
  return (
    <div className={[styles.servicesDescriptionItems, className].join(" ")}>
      <Image
        className={styles.imgIcon}
        loading="lazy"
        width={500}
        height={300}
        alt={title || "Image"}
        src={image2 ? serverurl + image : img}
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

SpecialDescriptuonItems.propTypes = {
  className: PropTypes.string,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default SpecialDescriptuonItems;
