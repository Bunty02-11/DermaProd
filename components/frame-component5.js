import Image from "next/image";
import Card1 from "./card1";
import PropTypes from "prop-types";
import styles from "./frame-component5.module.css";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <section className={[styles.bookingContainerWrapper, className].join(" ")}>
      <div className={styles.bookingContainer}>
        <div className={styles.bookingHeader}>
          <div className={styles.loremIpsumDolor}>SERVICES</div>
          <h1 className={styles.mediumLengthHero}>Trendy Products</h1>
        </div>
        <div className={styles.row}>
          <Card1
            cardFlex="unset"
            cardMinWidth="unset"
            cardPosition="unset"
            cardTop="unset"
            cardLeft="unset"
            cardWidth="unset"
            placeholderImage="/placeholder-image-1@2x.png"
            showContentIntroThree={false}
            contentIntroThreeAlignSelf="unset"
            heading="Sculptra"
            contentDescriptionThree="Rediscover your radiance with advanced skincare, including Jalupro, Botox, and Hydrafacial treatments, for a luminous and revitalized complexion. Hydrafacial treatments, for a luminous and revitalized complexion."
            btnBookMinWidth="112px"
            btnLearnMinWidth="112px"
          />
          <Card1
            cardFlex="unset"
            cardMinWidth="unset"
            cardPosition="unset"
            cardTop="unset"
            cardLeft="unset"
            cardWidth="unset"
            placeholderImage="/placeholder-image-1@2x.png"
            showContentIntroThree={false}
            contentIntroThreeAlignSelf="unset"
            heading="Salmon DNA"
            contentDescriptionThree="Rediscover your radiance with advanced skincare, including Jalupro, Botox, and Hydrafacial treatments, for a luminous and revitalized complexion. Hydrafacial treatments, for a luminous and revitalized complexion."
            btnBookMinWidth="112px"
            btnLearnMinWidth="112px"
          />
          <Card1
            cardFlex="unset"
            cardMinWidth="unset"
            cardPosition="unset"
            cardTop="unset"
            cardLeft="unset"
            cardWidth="unset"
            placeholderImage="/placeholder-image-1@2x.png"
            showContentIntroThree={false}
            contentIntroThreeAlignSelf="unset"
            heading="Prophilo"
            contentDescriptionThree="Rediscover your radiance with advanced skincare, including Jalupro, Botox, and Hydrafacial treatments, for a luminous and revitalized complexion. Hydrafacial treatments, for a luminous and revitalized complexion."
            btnBookMinWidth="112px"
            btnLearnMinWidth="112px"
          />
        </div>
        <div className={styles.content}>
          <div className={styles.serviceDots}>
            <div className={styles.sliderDots}>
              <div className={styles.dot} />
              <div className={styles.dot1} />
              <div className={styles.dot1} />
              <div className={styles.dot1} />
              <div className={styles.dot1} />
            </div>
          </div>
          <div className={styles.arrowsParent}>
            <Image
              className={styles.arrowsIcon}
              width={48}
              height={48}
              alt=""
              src="/arrows@2x.png"
            />
            <div className={styles.arrows}>
              <Image
                className={styles.fearrowUpIcon}
                width={24}
                height={24}
                alt=""
                src="/fearrowup@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
