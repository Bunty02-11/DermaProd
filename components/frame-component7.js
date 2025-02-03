import Image from "next/image";
import FrameComponent1 from "./frame-component1";
import SliderItems from "./slider-items";
import PropTypes from "prop-types";
import styles from "./frame-component7.module.css";
import FooterContainer from "./footer-container";

const FrameComponent7 = ({ className = "" }) => {
  return (
    <section className={[styles.frameParent, className].join(" ")}>
      <FooterContainer />
      <div className={styles.mainContent}>
        <div className={styles.banner}>
          <div className={styles.loremIpsumDolor}>HOME - CONTACT</div>
          <h1 className={styles.mediumLengthHero}>Contact</h1>
        </div>
        <div className={styles.others}>
          <div className={styles.slider}>
            <SliderItems
              materialSymbolsLightmailOutline="/materialsymbolslightmailoutline.svg"
              perfumes="Email Us"
              perfumes1={<a href="mailto:info@dermatechpolyclinic.com" className="emailLink" style={{ color: "black", textDecoration: "none" }} > info@dermatechpolyclinic.com </a>}
            />
            <SliderItems
              materialSymbolsLightmailOutline="/materialsymbolslightcalloutline.svg"
              perfumes="Call Us"
              perfumes1={<a href="tel:+971509870036" className="emailLink" style={{ color: "black", textDecoration: "none" }} >+971 509 870036</a>}
              perfumesAlignSelf="stretch"
            />
            <SliderItems
              materialSymbolsLightmailOutline="/mynauilocation.svg"
              perfumes="Visit Us"
              perfumes1="16th Floor, Royal Concord Office Tower, Riggat Al Buteen, Deira, Dubai, UAE,"
              perfumesAlignSelf="unset"
            />
            <div className={styles.sliderItems}>
              <Image
                className={styles.mynauilocationIcon}
                loading="lazy"
                width={80}
                height={80}
                alt=""
                src="/mynauilocation-1@2x.png"
              />
              <div className={styles.perfumesParent} >
                <h2 className={styles.perfumes}>Open Hours</h2>
                <div className={styles.perfumes1}>
                  <p className={styles.friWed}>
                    Fri - Wed  12:00 pm to 09:00 pm
                    Thu - Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent7.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent7;
