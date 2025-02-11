import Card3 from "./card3";
import PropTypes from "prop-types";
import styles from "./content1.module.css";

const Content1 = ({ className = "" }) => {
  return (
    <div className={[styles.content, className].join(" ")}>
      <div className={styles.row}>
        <Card3
          placeholderImage="/placeholder-image-11@2x.png"
          heading={`Rejuvenate & Glow`}
          text="Rediscover your radiance with advanced skincare, including Jalupro, Botox, and Hydrafacial treatments, for a luminous and revitalized complexion."
        />
        <Card3
          placeholderImage="/placeholder-image-12@2x.png"
          heading={`Revitalize & Restore`}
          text="Experience luxurious rejuvenation with PRP Hair, Meso Hair, Hair Filler, and Laser Hair Removal, bringing life back to your strands and restoring natural beauty."
        />
        <Card3
          placeholderImage="/placeholder-image-13@2x.png"
          heading={`Wellness & Vitality`}
          text="Experience luxurious rejuvenation with PRP Hair, Meso Hair, Hair Filler, and Laser Hair Removal, bringing life back to your strands and restoring natural beauty."
        />
      </div>
    </div>
  );
};

Content1.propTypes = {
  className: PropTypes.string,
};

export default Content1;
