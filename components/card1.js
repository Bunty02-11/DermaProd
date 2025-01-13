import { useMemo } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./card1.module.css";

const Card1 = ({
  className = "",
  cardFlex,
  cardMinWidth,
  cardPosition,
  cardTop,
  cardLeft,
  cardWidth,
  placeholderImage,
  showContentIntroThree,
  contentIntroThreeAlignSelf,
  heading,
  contentDescriptionThree,
  btnBookMinWidth,
  btnLearnMinWidth,
}) => {
  const cardStyle = useMemo(() => {
    return {
      flex: cardFlex,
      minWidth: cardMinWidth,
      position: cardPosition,
      top: cardTop,
      left: cardLeft,
      width: cardWidth,
    };
  }, [cardFlex, cardMinWidth, cardPosition, cardTop, cardLeft, cardWidth]);

  const contentIntroThreeStyle = useMemo(() => {
    return {
      alignSelf: contentIntroThreeAlignSelf,
    };
  }, [contentIntroThreeAlignSelf]);

  const btnBookStyle = useMemo(() => {
    return {
      minWidth: btnBookMinWidth,
    };
  }, [btnBookMinWidth]);

  const btnLearnStyle = useMemo(() => {
    return {
      minWidth: btnLearnMinWidth,
    };
  }, [btnLearnMinWidth]);

  return (
    <div className={[styles.card, className].join(" ")} style={cardStyle}>
      <Image
        className={styles.placeholderImageIcon}
        width={500}
        height={260}
        alt=""
        src={placeholderImage}
      />
      <div className={styles.content}>
        <div className={styles.contentHeadingThree}>
          {showContentIntroThree && (
            <div
              className={styles.contentIntroThree}
              style={contentIntroThreeStyle}
            >
              FACIAL TREATMENTS
            </div>
          )}
          <h3 className={styles.heading}>{heading}</h3>
        </div>
        <div className={styles.contentDescriptionThree}>
          {contentDescriptionThree}
        </div>
        <div className={styles.btns}>
          <div className={styles.btnBook} style={btnBookStyle}>
            <div className={styles.bookNow}>Book Now</div>
          </div>
          <div className={styles.btnBook} style={btnLearnStyle}>
            <div className={styles.bookNow}>Chat Now</div>
          </div>
        </div>
      </div>
    </div>
  );
};

Card1.propTypes = {
  className: PropTypes.string,
  placeholderImage: PropTypes.string.isRequired,
  showContentIntroThree: PropTypes.bool,
  heading: PropTypes.string,
  contentDescriptionThree: PropTypes.string,

  /** Style props */
  cardFlex: PropTypes.string,
  cardMinWidth: PropTypes.string,
  cardPosition: PropTypes.string,
  cardTop: PropTypes.string,
  cardLeft: PropTypes.string,
  cardWidth: PropTypes.string,
  contentIntroThreeAlignSelf: PropTypes.string,
  btnBookMinWidth: PropTypes.string,
  btnLearnMinWidth: PropTypes.string,
};

export default Card1;
