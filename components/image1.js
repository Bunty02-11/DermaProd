import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./image1.module.css";
import { serverurl } from "../base";

const Image1 = ({ className = "", Mainimg, category, blogdetails }) => {

  // console.log("Mainimg", Mainimg);
  // console.log("blogdetails", blogdetails);

  return (
    <section className={[styles.image, className].join(" ")}>
      <div className={styles.image1}>
        <Image
          className={styles.placeholderImageIcon}
          loading="lazy"
          width={1600}
          height={480}
          alt=""
          src={Mainimg ? Mainimg : "/placeholder-image4@2x.png"}
        />
      </div>
      {/* <div className={styles.cat}>
        <div className={styles.categoryName}>
          <h3 className={styles.perfumes}>Categories</h3>
          <div className={styles.categoryList}>
            <div className={styles.perfumes1}>{category}</div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

Image1.propTypes = {
  className: PropTypes.string,
};

export default Image1;
