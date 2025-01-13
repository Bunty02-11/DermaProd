import Card2 from "./card2";
import Card1 from "./card1";
import PropTypes from "prop-types";
import styles from "./services1.module.css";
const Services1 = ({ className = "" }) => {
  return (
    <section className={[styles.services, className].join(" ")}>
      <div className={styles.heading}>
        <div className={styles.loremIpsumDolor}>CONCERNS</div>
        <h1 className={styles.mediumLengthHero}>Facial Concerns</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.row}>
          <Card2 placeholderImage="/placeholder-image1@2x.png" />
          <Card2 placeholderImage="/placeholder-image1@2x.png" />
        </div>
        <div className={styles.row1}>
          <Card1
            cardFlex="1"
            cardMinWidth="403px"
            cardPosition="unset"
            cardTop="unset"
            cardLeft="unset"
            cardWidth="unset"
            placeholderImage="/placeholder-image1@2x.png"
            showContentIntroThree
            contentIntroThreeAlignSelf="stretch"
            heading="Eye Puffiness"
            contentDescriptionThree="Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
            btnBookMinWidth="181px"
            btnLearnMinWidth="181px"
          />
          <Card1
            cardFlex="1"
            cardMinWidth="403px"
            cardPosition="unset"
            cardTop="unset"
            cardLeft="unset"
            cardWidth="unset"
            placeholderImage="/placeholder-image1@2x.png"
            showContentIntroThree
            contentIntroThreeAlignSelf="stretch"
            heading="Eye Puffiness"
            contentDescriptionThree="Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
            btnBookMinWidth="181px"
            btnLearnMinWidth="181px"
          />
        </div>
        <div className={styles.row1}>
          <Card1
            cardFlex="1"
            cardMinWidth="403px"
            cardPosition="unset"
            cardTop="unset"
            cardLeft="unset"
            cardWidth="unset"
            placeholderImage="/placeholder-image1@2x.png"
            showContentIntroThree
            contentIntroThreeAlignSelf="stretch"
            heading="Eye Puffiness"
            contentDescriptionThree="Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
            btnBookMinWidth="181px"
            btnLearnMinWidth="181px"
          />
          <Card1
            cardFlex="1"
            cardMinWidth="403px"
            cardPosition="unset"
            cardTop="unset"
            cardLeft="unset"
            cardWidth="unset"
            placeholderImage="/placeholder-image1@2x.png"
            showContentIntroThree
            contentIntroThreeAlignSelf="stretch"
            heading="Eye Puffiness"
            contentDescriptionThree="Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
            btnBookMinWidth="181px"
            btnLearnMinWidth="181px"
          />
        </div>
      </div>
    </section>
  );
};

Services1.propTypes = {
  className: PropTypes.string,
};

export default Services1;
