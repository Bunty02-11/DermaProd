import Card2 from "./card2";
import Card1 from "./card1";
import PropTypes from "prop-types";
import styles from "./content2.module.css";

const Content2 = ({ className = "" }) => {
  return (
    <div className={[styles.content, className].join(" ")}>
      <div className={styles.row}>
        <Card2 placeholderImage="/placeholder-image1@2x.png" />
        <Card2 placeholderImage="/placeholder-image1@2x.png" />
      </div>
      <Card1
        cardFlex="unset"
        cardMinWidth="unset"
        cardPosition="absolute"
        cardTop="603px"
        cardLeft="0px"
        cardWidth="410.7px"
        placeholderImage="/placeholder-image-1@2x.png"
        showContentIntroThree
        contentIntroThreeAlignSelf="stretch"
        heading="Eye Puffiness"
        contentDescriptionThree="Rediscover your radiance with advanced skincare, including Jalupro, Botox, and Hydrafacial treatments, for a luminous and revitalized complexion. Hydrafacial treatments, for a luminous and revitalized complexion."
        btnBookMinWidth="112px"
        btnLearnMinWidth="112px"
      />
      <Card1
        cardFlex="unset"
        cardMinWidth="unset"
        cardPosition="absolute"
        cardTop="603px"
        cardLeft="434.7px"
        cardWidth="410.7px"
        placeholderImage="/placeholder-image-1@2x.png"
        showContentIntroThree
        contentIntroThreeAlignSelf="stretch"
        heading="Eye Puffiness"
        contentDescriptionThree="Rediscover your radiance with advanced skincare, including Jalupro, Botox, and Hydrafacial treatments, for a luminous and revitalized complexion. Hydrafacial treatments, for a luminous and revitalized complexion."
        btnBookMinWidth="112px"
        btnLearnMinWidth="112px"
      />
      <Card1
        cardFlex="unset"
        cardMinWidth="unset"
        cardPosition="absolute"
        cardTop="603px"
        cardLeft="869.3px"
        cardWidth="410.7px"
        placeholderImage="/placeholder-image-1@2x.png"
        showContentIntroThree
        contentIntroThreeAlignSelf="stretch"
        heading="Eye Puffiness"
        contentDescriptionThree="Rediscover your radiance with advanced skincare, including Jalupro, Botox, and Hydrafacial treatments, for a luminous and revitalized complexion. Hydrafacial treatments, for a luminous and revitalized complexion."
        btnBookMinWidth="112px"
        btnLearnMinWidth="112px"
      />
      <Card1
        cardFlex="unset"
        cardMinWidth="unset"
        cardPosition="absolute"
        cardTop="1254px"
        cardLeft="0px"
        cardWidth="410.7px"
        placeholderImage="/placeholder-image-1@2x.png"
        showContentIntroThree
        contentIntroThreeAlignSelf="stretch"
        heading="Eye Puffiness"
        contentDescriptionThree="Rediscover your radiance with advanced skincare, including Jalupro, Botox, and Hydrafacial treatments, for a luminous and revitalized complexion. Hydrafacial treatments, for a luminous and revitalized complexion."
        btnBookMinWidth="112px"
        btnLearnMinWidth="112px"
      />
      <Card1
        cardFlex="unset"
        cardMinWidth="unset"
        cardPosition="absolute"
        cardTop="1254px"
        cardLeft="434.7px"
        cardWidth="410.7px"
        placeholderImage="/placeholder-image-1@2x.png"
        showContentIntroThree
        contentIntroThreeAlignSelf="stretch"
        heading="Eye Puffiness"
        contentDescriptionThree="Rediscover your radiance with advanced skincare, including Jalupro, Botox, and Hydrafacial treatments, for a luminous and revitalized complexion. Hydrafacial treatments, for a luminous and revitalized complexion."
        btnBookMinWidth="112px"
        btnLearnMinWidth="112px"
      />
      <Card1
        cardFlex="unset"
        cardMinWidth="unset"
        cardPosition="absolute"
        cardTop="1254px"
        cardLeft="869.3px"
        cardWidth="410.7px"
        placeholderImage="/placeholder-image-1@2x.png"
        showContentIntroThree
        contentIntroThreeAlignSelf="stretch"
        heading="Eye Puffiness"
        contentDescriptionThree="Rediscover your radiance with advanced skincare, including Jalupro, Botox, and Hydrafacial treatments, for a luminous and revitalized complexion. Hydrafacial treatments, for a luminous and revitalized complexion."
        btnBookMinWidth="112px"
        btnLearnMinWidth="112px"
      />
    </div>
  );
};

Content2.propTypes = {
  className: PropTypes.string,
};

export default Content2;
