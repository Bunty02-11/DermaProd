import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./services2.module.css";

const Services2 = ({ className = "", concern }) => {
  console.log(concern, "--services");
  return (
    <div className={[styles.services, className].join(" ")}>
      <div className={styles.heading}>
        <div className={styles.loremIpsumDolor}>FACIAL CONCERNS</div>
        <h1 className={styles.mediumLengthHero}>{concern?.Name}</h1>
      </div>
      <div className={styles.image}>
        <Image
          className={styles.placeholderImageIcon}
          loading="lazy"
          width={1280}
          height={500}
          alt=""
          src="/placeholder-image3@2x.png"
        />
      </div>
      <div className={styles.description}>
        <div className={styles.text}>{concern?.content?.introduction}.</div>
      </div>

      {/* First Service Content Section */}
      <div className={styles.serviceContent}>
        <Image
          className={styles.imgIcon}
          loading="lazy"
          width={500}
          height={300}
          alt=""
          src="/img2@2x.png"
        />
        <div className={styles.loremLipsumParent}>
          <h2 className={styles.loremLipsum}>
            {concern?.content?.sections[0]?.title}
          </h2>
          <div className={styles.text2}>
            {concern?.content?.sections[0].body}
          </div>
        </div>
      </div>

      {/* Additional Service Content Section */}
      <div className={styles.serviceContent}>
        <div className={styles.loremLipsumParent}>
          <h2 className={styles.loremLipsum}>
            {concern.content.sections[1].title}
          </h2>
          <div className={styles.text2}>{concern.content.sections[1].body}</div>
        </div>
        <Image
          className={styles.imgIcon}
          loading="lazy"
          width={500}
          height={300}
          alt=""
          src="/img2@2x.png"
        />
      </div>

      {/* Repeated Service Content */}
      <div className={styles.serviceContent}>
        <Image
          className={styles.imgIcon}
          loading="lazy"
          width={500}
          height={300}
          alt=""
          src="/img2@2x.png"
        />
        <div className={styles.loremLipsumParent}>
          <h2 className={styles.loremLipsum}>
            {concern.content.sections[2].title}
          </h2>
          <div className={styles.text2}>{concern.content.sections[2].body}</div>
        </div>
      </div>
    </div>
  );
};

Services2.propTypes = {
  className: PropTypes.string,
  concern: PropTypes.shape({
    Name: PropTypes.string,
    content: PropTypes.shape({
      introduction: PropTypes.string,
    }),
  }).isRequired,
};

export default Services2;
