import PropTypes from "prop-types";
import styles from "./component1.module.css";

const Component1 = ({ className = "", perfumes, perfumes1 }) => {
  return (
    <div className={[styles.div, className].join(" ")}>
      <div className={styles.slideItem}>
        <div className={styles.perfumes}>{perfumes}</div>
        <div className={styles.perfumes1}>{perfumes1}</div>
      </div>
    </div>
  );
};

Component1.propTypes = {
  className: PropTypes.string,
  perfumes: PropTypes.string,
  perfumes1: PropTypes.string,
};

export default Component1;
