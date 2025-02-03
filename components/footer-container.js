import Image from "next/image";
import Nav from "./nav";
import NavBarMobile from "./navBarMobile";
import PropTypes from "prop-types";
import styles from "./footer-container.module.css";

const FooterContainer = ({ className = "" }) => {
  const handleInstagram = () => {
    window.open('https://www.instagram.com/dermatech_polyclinic/', '_blank', 'noopener,noreferrer');
  };
  const handleTiktok = () => {
    window.open('https://www.tiktok.com/@dermatech_polyclinic?lang=en', '_blank', 'noopener,noreferrer');
  };
  const handleFacebook = () => {
    window.open('https://www.facebook.com/DermatechPolyclinic', '_blank', 'noopener,noreferrer');
  };
  const handleYoutube = () => {
    window.open('https://www.youtube.com/@DermaTech_Polyclinic', '_blank', 'noopener,noreferrer');
  };
  return (
    <>
      <section className={[styles.footerContainer, className].join(" ")}>
        <div className={styles.footerContent}>
          <div className={styles.content}>
            <div className={styles.connect}>
              <div className={styles.mail}>
                <Image
                  className={styles.basilclockSolidIcon}
                  width={18}
                  height={18}
                  alt=""
                  src="/basilclocksolid.svg"
                />
                <div className={styles.friWed}>
                  Fri - Wed  12:00 pm to 09:00 pm | Thu – Closed
                </div>
              </div>
              <div className={styles.mail1}>
                <Image
                  className={styles.basilclockSolidIcon}
                  width={18}
                  height={18}
                  alt=""
                  src="/materialsymbolscall.svg"
                />
                <div className={styles.div}>
                  <a
                    href="tel:+971542790987"
                    className={styles.emailLink}
                  >
                    +971 54 2790 987
                  </a>
                </div>
              </div>
              <div className={styles.mail1}>
                <Image
                  className={styles.materialSymbolsmailIcon}
                  width={18}
                  height={18}
                  alt=""
                  src="/materialsymbolsmail@2x.png"
                />
                <div className={styles.supportgmailcom}>
                  <a href="mailto:info@dermatechpolyclinic.com" className={styles.emailLink}>
                    info@dermatechpolyclinic.com
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.social} onClick={handleTiktok}>
              <Image
                className={styles.symbolsvgIcon}
                width={18}
                height={18}
                alt=""
                src="/symbolsvg.svg"
              />
              <div className={styles.social} onClick={handleYoutube}>
                <Image
                  className={styles.symbolsvgIcon1}
                  width={18}
                  height={18}
                  alt=""
                  src="/symbolsvg-1.svg"
                />
              </div>
              <div className={styles.fb} onClick={handleFacebook}>
                <Image
                  className={styles.path14Icon}
                  width={18}
                  height={18}
                  alt=""
                  src="/path14.svg"
                />
              </div>
              <div className={styles.fb} onClick={handleInstagram}>
                <Image
                  className={styles.path14Icon}
                  width={18}
                  height={18}
                  alt=""
                  src="/vector-1.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <Nav navWidth="100%" logo1="/logo-1@2x.png" />
      </section>
      <NavBarMobile logo1="/logo-1@2x.png" />
    </>
  );
};

FooterContainer.propTypes = {
  className: PropTypes.string,
};

export default FooterContainer;
