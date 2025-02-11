import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./services2.module.css";
import { serverurl } from "../../base";

const Services2 = ({ className = "", specialDetails }) => {
  // Prepare the images dynamically
  const images = [
    specialDetails?.image1?.url,
    specialDetails?.image2?.url,
    specialDetails?.image3?.url
  ];

  return (
    <div className={[styles.services, className].join(" ")}>
      <div className={styles.heading}>
        <div className={styles.loremIpsumDolor}>
          {specialDetails?.category?.Name}
        </div>
        <h1 className={styles.mediumLengthHero}>{specialDetails?.heading}</h1>
      </div>

      {/* Banner Image */}
      <div className={styles.image}>
        <Image
          className={styles.placeholderImageIcon}
          loading="lazy"
          width={2000}
          height={500}
          alt="Banner Image"
          src={
            specialDetails?.Banner_image?.url
              ? specialDetails?.Banner_image?.url
              : "/placeholder-image3@2x.png"
          }
        />
      </div>

      {/* Introduction Section */}
      <div className={styles.description}>
        <div className={styles.text}>
          {specialDetails?.content?.introduction}
        </div>
      </div>

      {/* First Service Content Section */}
      {specialDetails?.content?.sections?.map((section, i) => (
        <div key={i} className={styles.serviceContent}>
          <div className="row gy-3">
            {/* Image Section */}
            <div
              className={`col col-12 col-md-6 ${i % 2 === 0 ? "order-1" : "order-2"
                }`}
            >
              <Image
                className={styles.placeholderImageIcon}
                loading="lazy"
                width={800}
                height={300}
                alt={`Section Image ${i + 1}`}
                src={
                  images[i]
                    ? images[i]
                    : "/placeholder-image3@2x.png"
                }
              />
            </div>

            {/* Text Section */}
            <div
              className={`col col-12 col-md-6 ${i % 2 === 0 ? "order-2" : "order-1"
                }`}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className={styles.loremLipsumParent}>
                <h2 className={styles.loremLipsum}>{section?.title}</h2>
                <div className={styles.text2}>{section?.body}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

Services2.propTypes = {
  className: PropTypes.string,
  specialDetails: PropTypes.shape({
    Name: PropTypes.string,
    Banner_image: PropTypes.shape({
      url: PropTypes.string,
    }),
    category: PropTypes.shape({
      Name: PropTypes.string,
    }),
    content: PropTypes.shape({
      introduction: PropTypes.string,
      sections: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          body: PropTypes.string,
        })
      ),
    }),
    image1: PropTypes.shape({
      url: PropTypes.string,
    }),
    image2: PropTypes.shape({
      url: PropTypes.string,
    }),
    image3: PropTypes.shape({
      url: PropTypes.string,
    }),
  }).isRequired,
};

export default Services2;
