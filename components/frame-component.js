import { useContext, useState } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./frame-component.module.css";
import { LanguageContext } from "../pages/_app";

const FrameComponent = ({ className = "", placeholderImage, content }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { language } = useContext(LanguageContext);

  if (!content || content.length === 0) {
    return (
      <div
        className={[styles.testimonialContainerWrapper, className].join(" ")}
      >
        No Testimonials available
      </div>
    );
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + content.length) % content.length
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const currentContent = content[currentIndex];

  return (
    <section
      className={[styles.testimonialContainerWrapper, className].join(" ")}
    >
      <div className={styles.testimonialContainer}>
        <div className={styles.promotionTitle}>
          <h1 className={styles.specialPromotion}>Testimonials</h1>
        </div>
        <div className={styles.content}>
          {currentContent.image?.url ? (
            <Image
              className={styles.placeholderImageIcon}
              loading="lazy"
              width={570}
              height={458}
              alt="Promotion Image"
              src={currentContent.image.url}
              style={{ transition: "all 0.8s ease-in-out" }}
            />
          ) : (
            <Image
              className={styles.placeholderImageIcon}
              loading="lazy"
              width={570}
              height={458}
              alt="Placeholder Image"
              src={placeholderImage}
              style={{ transition: "all 0.8s ease-in-out" }}
            />
          )}
          <div className={styles.content1}>
            <div className={styles.stars}>
              {Array.from({ length: parseInt(currentContent.Rating) }).map(
                (_, index) => (
                  <Image
                    key={index}
                    className={styles.vectorIcon}
                    width={20}
                    height={19}
                    alt="Star"
                    src="/vector-2.svg"
                  />
                )
              )}
            </div>
            <blockquote className={styles.quote}>
              {currentContent.description}
            </blockquote>
            <div className={styles.avatar}>
              <div className={styles.avatarContent}>
                <div className={styles.authorName}>{currentContent.Name}</div>
                {/* <div className={styles.authorPosition}>{currentContent.job_title || "No Job Title"}</div> */}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.content2}>
          <div className={styles.testimonialDots}>
            <div className={styles.sliderDots}>
              {content.map((_, index) => (
                <div
                  key={index}
                  className={
                    index === currentIndex
                      ? `${styles.dot} ${styles.activeDot}`
                      : styles.dot
                  }
                  onClick={() => goToSlide(index)}
                  style={{
                    transition: "all 0.5s ease-in-out",
                    transform:
                      index === currentIndex ? "scale(1.5)" : "scale(1)",
                  }}
                />
              ))}
            </div>
          </div>
          {language === "ar" ? (
            <div className={styles.arrowsParent}>
              <div className={styles.arrows} onClick={goToNext}>
                <Image
                  className={styles.fearrowUpIcon}
                  width={48}
                  height={48}
                  alt="Arrow Right"
                  src="/fearrowup@2x.png"
                />
              </div>
              <div className={styles.arrows} onClick={goToPrevious}>
                <Image
                  className={styles.fearrowUpIcon}
                  width={48}
                  height={48}
                  alt="Arrow Left"
                  src="/fearrowupprev@2x.png"
                />
              </div>
            </div>
          ) : (
            <div className={styles.arrowsParent}>
              <div className={styles.arrows} onClick={goToPrevious}>
                <Image
                  className={styles.fearrowUpIcon}
                  width={48}
                  height={48}
                  alt="Arrow Left"
                  src="/fearrowupprev@2x.png"
                />
              </div>
              <div className={styles.arrows} onClick={goToNext}>
                <Image
                  className={styles.fearrowUpIcon}
                  width={48}
                  height={48}
                  alt="Arrow Right"
                  src="/fearrowup@2x.png"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  placeholderImage: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      documentId: PropTypes.string.isRequired,
      Name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      Rating: PropTypes.string.isRequired,
      createdAt: PropTypes.string,
      updatedAt: PropTypes.string,
      publishedAt: PropTypes.string,
      image1: PropTypes.shape({ url: PropTypes.string }),
      job_title: PropTypes.string,
    })
  ).isRequired,
};

export default FrameComponent;
