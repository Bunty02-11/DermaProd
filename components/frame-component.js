import { useContext, useState, useEffect } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./frame-component.module.css";
import { LanguageContext } from "../pages/_app";

const FrameComponent = ({ className = "", placeholderImage }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('https://exw7ljbf37.execute-api.us-east-1.amazonaws.com/stagging/api/testimonials/');
        if (!response.ok) {
          throw new Error('Failed to fetch testimonials');
        }
        const data = await response.json();
        setTestimonials(data);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (loading) {
    return (
      <div className={[styles.testimonialContainerWrapper, className].join(" ")}>
        Loading testimonials...
      </div>
    );
  }

  if (!testimonials || testimonials.length === 0) {
    return (
      <div className={[styles.testimonialContainerWrapper, className].join(" ")}>
        No Testimonials available
      </div>
    );
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section
      className={[styles.testimonialContainerWrapper, className].join(" ")}
    >
      <div className={styles.testimonialContainer}>
        <div className={styles.promotionTitle}>
          <h1 className={styles.specialPromotion}>Testimonials</h1>
        </div>
        <div className={styles.content}>
          <Image
            className={styles.placeholderImageIcon}
            loading="lazy"
            width={570}
            height={458}
            alt="Placeholder Image"
            src={placeholderImage}
            style={{ transition: "all 0.8s ease-in-out" }}
          />
          <div className={styles.content1}>
            <div className={styles.stars}>
              {Array.from({ length: currentTestimonial.rating }).map(
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
              {currentTestimonial.content}
            </blockquote>
            <div className={styles.avatar}>
              <div className={styles.avatarContent}>
                <div className={styles.authorName}>{currentTestimonial.name}</div>
                <div className={styles.authorPosition}>
                  {/* {new Date(currentTestimonial.date).toLocaleDateString()} */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.content2}>
          <div className={styles.testimonialDots}>
            <div className={styles.sliderDots}>
              {testimonials.map((_, index) => (
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
  placeholderImage: PropTypes.string.isRequired
};

export default FrameComponent;
