import About1 from "./about1";
import PropTypes from "prop-types";
import styles from "./frame-component4.module.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <section className={[styles.aboutWrapper, className].join(" ")}>
      <About1 img="/img.svg" discoverMore="Book Appoinment" />
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
