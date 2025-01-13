import PropTypes from "prop-types";
import styles from "./text-input.module.css";

const TextInput = ({ className = "", type = "Default" }) => {
  return (
    <div className={[styles.textInput, className].join(" ")} data-type={type}>
      <div className={styles.placeholder}>Enter your email</div>
    </div>
  );
};

TextInput.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  type: PropTypes.number,
};

export default TextInput;
