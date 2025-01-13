import { useState } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./frame-component.module.css";

const FrameComponent = ({ className = "", placeholderImage, content }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!content || content.length === 0) {
    return (
      <div className={[styles.testimonialContainerWrapper, className].join(" ")}>
        No Testimonials available
      </div>
    );
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + content.length) % content.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className={[styles.testimonialContainerWrapper, className].join(" ")}>
      <div className={styles.testimonialContainer}>
        <div className={styles.content}>
          <Image
            className={styles.placeholderImageIcon}
            width={616}
            height={640}
            alt="Placeholder"
            src={placeholderImage}
          />
          <div className={styles.content1}>
            <div className={styles.stars}>
              {[...Array(parseInt(content[currentIndex].Rating))].map((_, index) => (
                <Image
                  key={index}
                  className={styles.vectorIcon}
                  width={20}
                  height={19}
                  alt="Star"
                  src="/vector-2.svg"
                />
              ))}
            </div>
            <blockquote className={styles.quote}>
              {content[currentIndex].description}
            </blockquote>
            <div className={styles.avatar}>
              <div className={styles.avatarContent}>
                <div className={styles.authorName}>{content[currentIndex].Name}</div>
                <div className={styles.authorPosition}>
                  {/* {content[currentIndex].job_title || "No Job Title"} */}
                </div>
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
                />
              ))}
            </div>
          </div>
          <div className={styles.arrowsParent}>
            <div className={styles.arrows} onClick={goToPrevious}>
              <Image
                className={styles.fearrowUpIcon}
                width={48}
                height={48}
                alt="Arrow Left"
                src="/arrows@2x.png"
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
      id: PropTypes.string.isRequired,
      Rating: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      Name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FrameComponent;
