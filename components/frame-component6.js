import Image from "next/image";
import Card4 from "./card4";
import PropTypes from "prop-types";
import styles from "./frame-component6.module.css";

const FrameComponent6 = ({ className = "" }) => {
  return (
    <section className={[styles.visionContainerParent, className].join(" ")}>
      <div className={styles.visionContainer} >
        <div className={styles.visionContent}>
          <Image
            className={styles.imgIcon}
            loading="lazy"
            width={620}
            height={445}
            alt=""
            src="/img-1@2x.png"
          />
          <div className={styles.visionDetails}>
            <div className={styles.ourVisionParent}>
              <h1 className={styles.ourVision}>Our Vision</h1>
              <div className={styles.perfumes}>
                We believe beauty transcends appearance—it's about health, confidence, and self-love.
                Our mission is to empower individuals by providing tailored
                treatments that enhance both physical beauty and inner confidence.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.team}>
        <div className={styles.sectionTitle}>
          <div className={styles.loremIpsumDolor}>TEAM</div>
          <div className={styles.content}>
            <h1 className={styles.heading}>Meet Our People</h1>
            <div className={styles.loremIpsumDolor1}>
              At the helm of Derma Tech Poly Clinic stands a visionary leader who combines passion and expertise
              to redefine aesthetic care in Dubai. With years of experience in the medical and wellness industry,
              the owner is dedicated to creating a space where innovation meets compassion.
              By integrating advanced technology with a commitment to personalized care,
              our leadership drives the clinic's mission to set new standards in aesthetic excellence.
            </div>
          </div>
        </div>
        <div className={styles.content1}>
          <div className={styles.row}>
            <div className={styles.content2}>
              <Card4
                placeholderImage="/placeholder-image2@2x.png"
                name1="Black Marvin"
                jobTitle="Medical Assistant"
              />
              <Card4
                placeholderImage="/placeholder-image-15@2x.png"
                name1="Eleanor Pena"
                jobTitle="Doctor"
              />
              <Card4
                placeholderImage="/placeholder-image-2@2x.png"
                name1="Arlene Maccy"
                jobTitle="Nursing Assistant"
              />
              <Card4
                placeholderImage="/placeholder-image-3@2x.png"
                name1="Jenny Wilson"
                jobTitle="Senior Doctor"
              />
            </div>
            <div className={styles.content3}>
              <div className={styles.sliderDots}>
                <div className={styles.dot} />
                <div className={styles.dot1} />
                <div className={styles.dot1} />
                <div className={styles.dot1} />
                <div className={styles.dot1} />
              </div>
              <div className={styles.sliderButtons}>
                <Image
                  className={styles.arrowsIcon}
                  width={48}
                  height={48}
                  alt=""
                />
                <div className={styles.arrows}>
                  <Image
                    className={styles.fearrowUpIcon}
                    width={24}
                    height={24}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;
