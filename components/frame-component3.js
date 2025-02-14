import { useState, useContext } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./frame-component3.module.css";
import { useRouter } from "next/router";
import { LanguageContext } from "../pages/_app";

const FrameComponent3 = ({ className = "", content }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();
  const { language } = useContext(LanguageContext);

  if (!content || content.length === 0) {
    return (
      <div className={[styles.promotionContainerWrapper, className].join(" ")}>
        No Promotion Available
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

  const currentContent = content[currentIndex] || {};

  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <div>
      <div className={[styles.promotionContainerWrapper, className].join(" ")}>
        <div
          className={styles.promotionContainer}
          style={{ transition: "all 0.5s ease-in-out" }}
        >
          <h1 className={styles.specialPromotionTitle}>Special Promotion</h1>
          <div
            className={styles.content}
            style={{ transition: "all 0.5s ease-in-out" }}
          >
            {currentContent.image1?.url ? (
              <Image
                className={styles.placeholderImageIcon}
                loading="lazy"
                width={570}
                height={458}
                alt="Promotion Image"
                src={currentContent.image1.url} // Access the current promotion image URL
                style={{ transition: "all 0.8s ease-in-out" }}
              />
            ) : (
              <div className={styles.placeholder}>No Image Available</div>
            )}
            <div
              className={styles.text}
              style={{ transition: "all 0.8s ease-in-out" }}
            >
              <div className={styles.main}>
                <div className={styles.aed}>
                  {currentContent.Amount || "N/A"} Aed
                </div>
                <div
                  className={styles.yoremIpsumDolor}
                  style={{ fontSize: "20px", fontWeight: "bold" }}
                >
                  {currentContent.title || "No title available"}
                </div>
              </div>
              <div className={styles.benefits}>
                <div className={styles.benefits1}>Benefits:</div>
                <div className={styles.yoremIpsumDolor}>
                  {currentContent.benifits &&
                  currentContent.benifits.length > 0 ? (
                    <ul className={styles.yoremIpsumDolorSitAmetCo}>
                      {currentContent.benifits.map((benefit, index) => (
                        <li key={index} className={styles.yoremIpsumDolor1}>
                          {benefit.description}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div>No benefits listed</div>
                  )}
                </div>
              </div>
              <div
                className={styles.btnBook}
                onClick={() => handleNavigation("/contact")}
              >
                <a
                  onClick={() => handleNavigation("/contact")}
                  className={`${styles.payNow} ${styles.noUnderline}`}
                  style={{ color: "white" }}
                >
                  <div className={styles.payNow}>Book Now</div>
                </a>
              </div>
            </div>
          </div>
          <div className={styles.buttons}>
            <div className={styles.promotionDots}>
              <div className={styles.sliderDots}>
                {content.map((_, index) => (
                  <div
                    key={index}
                    className={`${styles.dot} ${
                      index === currentIndex ? styles.activeDot : ""
                    }`}
                    onClick={() => goToSlide(index)}
                    style={{
                      transition: "all 0.5s ease-in-out",
                      transform:
                        index === currentIndex ? "scale(1.5)" : "scale(1)",
                    }}
                  >
                    {/* {index + 1} */}
                  </div>
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
      </div>
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
  content: PropTypes.arrayOf(
    PropTypes.shape({
      image1: PropTypes.shape({
        url: PropTypes.string.isRequired,
      }),
      Amount: PropTypes.string,
      content: PropTypes.string,
      benefits: PropTypes.arrayOf(
        PropTypes.shape({
          description: PropTypes.string.isRequired,
        })
      ),
    })
  ).isRequired,
};

export default FrameComponent3;
