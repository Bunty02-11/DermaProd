"use client";
import { useMemo } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./about1.module.css";
import { useRouter } from "next/router";

const About1 = ({
  className = "",
  aboutFlex,
  aboutAlignSelf,
  img,
  btnsWidth,
  discoverMore,
}) => {
  const aboutStyle = useMemo(() => {
    return {
      flex: aboutFlex,
      alignSelf: aboutAlignSelf,
    };
  }, [aboutFlex, aboutAlignSelf]);

  const btnsStyle = useMemo(() => {
    return {
      width: btnsWidth,
    };
  }, [btnsWidth]);

  const router = useRouter();
  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <div className={[styles.about, className].join(" ")} style={aboutStyle}>
      <div className={styles.container}>
        <Image
          className={styles.imgIcon}
          loading="lazy"
          width={610}
          height={640}
          alt=""
          src={img}
        />
        <div className={styles.column}>
          <div className={styles.content}>
            <div className={styles.heading}>
              <div className={styles.loremIpsumDolor}>
                Welcome to Our Clinic!
              </div>
              <h1 className={styles.mediumLengthHero}>
                Derma Tech Poly Clinic L.L.C
              </h1>
            </div>
            <div className={styles.loremIpsumDolor1}>
              Welcome to DermaTech Polyclinic L.L.C, your ultimate destination
              for state-of-the-art services in the heart of Dubai. We are
              committed to helping you achieve your beauty and wellness
              aspirations through a variety of advanced and tailored treatments.
              With a dedication to excellence and a focus on delivering
              remarkable results, we symbolize innovation and care in aesthetic
              medicine.
            </div>
          </div>
          <div
            className={styles.btns}
            style={btnsStyle}
            onClick={() => handleNavigation("/contact")}
          >
            <div className={styles.btnDiscover} href="/contact">
              <a
                href="/contact"
                className={styles.noUnderline}
                style={{ color: "white" }}
              >
                <div className={styles.discoverMore}>{discoverMore}</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

About1.propTypes = {
  className: PropTypes.string,
  img: PropTypes.string.isRequired,
  discoverMore: PropTypes.string,

  /** Style props */
  aboutFlex: PropTypes.string,
  aboutAlignSelf: PropTypes.string,
  btnsWidth: PropTypes.string,
};

export default About1;
