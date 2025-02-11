import ExploreItems from "./explore-items";
import PropTypes from "prop-types";
import styles from "./frame-component2.module.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section className={[styles.othersWrapper, className].join(" ")}>
      <div className={styles.others}>
        <div className={styles.slider}>
          <ExploreItems explore="/explore.svg"
            perfumes="Qualified Doctor"
            Doctor="Our team of qualified doctors offers expert aesthetic services, ensuring safe and effective treatments tailored to your needs." />
          <ExploreItems
            explore="/explore-1.svg"
            perfumes="Certified Products"
            Doctor="We use only certified, high-quality products to guarantee exceptional results in all our treatments, from skincare to weight loss services."
          />
          <ExploreItems explore="/explore-2.svg"
            perfumes="Modern Equipment"
            Doctor="Our cosmetic clinic in Dubai has the latest state-of-the-art technology to provide the most advanced beauty and wellness treatments." />
          <ExploreItems explore="/explore-3.svg"
            perfumes="Peoples Place"
            Doctor="We create a welcoming atmosphere, making it the perfect beauty clinic near me for all your skincare and wellness needs." />
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
