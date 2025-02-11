import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./explore-items.module.css";

const ExploreItems = ({ className = "", explore, perfumes, Doctor }) => {
  return (
    <div className={[styles.exploreItems, className].join(" ")}>
      <Image
        className={styles.exploreIcon}
        loading="lazy"
        width={80}
        height={80}
        alt=""
        src={explore}
      />
      <div className={styles.perfumeCards}>
        <h3 className={styles.perfumes}>{perfumes}</h3>
        <div className={styles.perfumes1}>{Doctor}</div>
      </div>
    </div>
  );
};

ExploreItems.propTypes = {
  className: PropTypes.string,
  explore: PropTypes.string.isRequired,
  perfumes: PropTypes.string,
};

export default ExploreItems;
