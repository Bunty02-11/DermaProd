import ConcernCard from "../ConcernCard";
import PropTypes from "prop-types";
import styles from "./services1.module.css";

const Services1 = (props) => {
  const { className = "", content } = props;
  return (
    <section className={[styles.services, className].join(" ")}>
      <div className={styles.heading}>
        <div className={styles.loremIpsumDolor}>CONCERNS</div>
        <h1 className={styles.mediumLengthHero}>
          {" "}
          {content?.[0]?.category?.Name}
        </h1>
      </div>
      <div className={styles.content}>
        <div className={styles.row}>
          <div className="row g-2 gy-4 g-md-5">
            {content?.map((details) => (
              <div className="col col-12 col-md-6">
                <ConcernCard
                  details={details}
                  placeholderImage="/placeholder-image1@2x.png"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

Services1.propTypes = {
  className: PropTypes.string,
};

export default Services1;
