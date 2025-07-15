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
          specialDetails?.banner_image?.url
            ? specialDetails.banner_image.url.startsWith("http")
              ? specialDetails.banner_image.url
              : serverurl + specialDetails.banner_image.url
            : "/placeholder-image3@2x.png"
        }
      />
    </div>

    {/* Introduction Section */}
    <div className={styles.description}>
      <div className={styles.text}>
        {specialDetails?.introduction}
      </div>
    </div>

    {/* First Service Content Section */}
    {specialDetails?.content?.map((section, i) => (
      <div key={i} className={styles.serviceContent}>
        <div className="row">
          {/* Image Section */}
          <div
            className={`col col-12 col-md-6 order-1 ${i % 2 === 0 ? "order-md-1" : "order-md-2"
              }`}
          >
            <div className={styles.imageContainer}>
              <Image
                className={styles.placeholderImageIcon}
                loading="lazy"
                width={1000}
                height={300}
                alt={`Section Image ${i + 1}`}
                src={
                  images[i]
                    ? images[i].startsWith("http")
                      ? images[i]
                      : serverurl + images[i]
                    : "/placeholder-image3@2x.png"
                }
              />
            </div>
          </div>

          {/* Text Section */}
          <div
            className={`col col-12 col-md-6 order-2 ${i % 2 === 0 ? "order-md-2" : "order-md-1"
              }`}
          >
            <div className={styles.textContainer}>
              <div className={styles.loremLipsumParent}>
                <h2 className={styles.loremLipsum}>{section?.body}</h2>
                <div className={styles.text2}>{section?.title}</div>
              </div>
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
