import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./service-content.module.css";

const ServiceContent = ({ className = "", img }) => {
  return (
    <div className={[styles.serviceContent, className].join(" ")}>
      <Image
        className={styles.imgIcon}
        loading="lazy"
        width={500}
        height={300}
        alt=""
        src={img}
      />
      <div className={styles.loremLipsumParent}>
        <h2 className={styles.loremLipsum}>Lorem Lipsum</h2>
        <div className={styles.text}>
          Rorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
          egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
          Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
          lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
          elementum tellus.
        </div>
      </div>
    </div>
  );
};

ServiceContent.propTypes = {
  className: PropTypes.string,
  img: PropTypes.string.isRequired,
};

export default ServiceContent;
