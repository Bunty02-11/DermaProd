import PropTypes from "prop-types";
import styles from "./button.module.css";

const Button = ({
  className = "",
  darkMode = false,
  iconPosition = "No icon",
  small = false,
  style = "Primary",
}) => {
  return (
    <div
      className={[styles.button1, className].join(" ")}
      data-darkMode={darkMode}
      data-iconPosition={iconPosition}
      data-small={small}
      data-style={style}
    >
      <div className={styles.button}>Subscribe</div>
    </div>
  );
};

Button.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  darkMode: PropTypes.bool,
  iconPosition: PropTypes.number,
  small: PropTypes.bool,
  style: PropTypes.number,
};

export default Button;
