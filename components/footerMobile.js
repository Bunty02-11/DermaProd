import Image from "next/image";
import TextInput from "./text-input";
import Button from "./button";
import PropTypes from "prop-types";
import styles from "./footerMobile.module.css";
import { useRouter } from "next/router"; // Import useRouter

const Footer = ({ className = "", maskGroup, symbolsvg, symbolsvg1 }) => {
  const router = useRouter(); // Initialize router

  // Navigation handler
  const handleNavigation = (path) => {
    router.push(path); // Navigate to the given path
  };
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
      <footer className={[styles.footer, className].join(" ")}>
        <div className={styles.content}>
          {/* Logo Section */}
          <div className={styles.logoSection}>
            <Image
              className={styles.maskGroupIcon}
              loading="lazy"
              width={250}
              height={50}
              alt=""
              src="/logo-1@2x.png"
              onClick={() => handleNavigation("/")}
              style={{ cursor: "pointer" }}
            />
          </div>

          {/* Company Section */}
          <div className={styles.columnSection}>
            <div className={styles.quickLinks}>Company</div>
            <div className={styles.linksContainer}>
              <div className={styles.link} onClick={() => handleNavigation("/about")}>
                <div className={styles.concerns}>About</div>
              </div>
              <div className={styles.link} onClick={() => handleNavigation("/blog")}>
                <div className={styles.concerns}>Blog</div>
              </div>
              <div className={styles.link} onClick={() => handleNavigation("/concern-details/Hollow-Cheeks")}>
                <div className={styles.concerns}>Concern</div>
              </div>
              <div className={styles.link} onClick={() => handleNavigation("/services/hydrafacial")}>
                <div className={styles.concerns}>Services</div>
              </div>
              <div className={styles.link} onClick={() => handleNavigation("/contact")}>
                <div className={styles.concerns}>Contact Us</div>
              </div>
            </div>
          </div>

          {/* Support Section */}
          <div className={styles.columnSection}>
            <div className={styles.quickLinks}>Support</div>
            <div className={styles.linksContainer}>
              <div className={styles.link}>
                <div className={styles.concerns}>
                  <a href="tel:+971509870036" className={styles.emailLink}>
                    +971 509 870 036
                  </a>
                </div>
              </div>
              <div className={styles.link}>
                <div className={styles.concerns}>
                  <a href="mailto:info@dermatechpolyclinic.com" className={styles.emailLink}>
                    info@dermatechpolyclinic.com
                  </a>
                </div>
              </div>
              <div className={styles.link}>
                <div className={styles.concerns}>
                  <a href="https://www.google.com/maps/dir//DermaTech+Polyclinic+Emirates+Concord+Office+Tower+Floor+No:16+Deira+-+DeiraRiggat+Al+Buteen+-+Dubai+United+Arab+Emirates/@25.259807,55.3209268,14z/data=!4m5!4m4!1m0!1m2!1m1!1s0x3e5f5dfc9507fd9f:0xa675f90b00cbeeff"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.emailLink}>
                  Location
                </a>
                </div>
              </div>
            </div>
          </div>

          {/* Subscribe Section */}
          <div className={styles.columnSection}>
            <div className={styles.subscribeParent}>
              <div className={styles.quickLinks}>Subscribe</div>
              <div className={styles.joinOurNewsletter}>
                Join our newsletter to stay up to date on features and releases.
              </div>
            </div>
            <div className={styles.actions}>
              <div className={styles.form}>
                <TextInput type="Default" />
                <Button
                  darkMode={false}
                  iconPosition="No icon"
                  small={false}
                  style="Primary"
                />
              </div>
              <div className={styles.bySubscribingYouContainer}>
                <span className={styles.bySubscribingYou}>
                  By subscribing you agree to with our
                </span>
                <span className={styles.span}>{` `}</span>
                <span className={styles.privacyPolicy}>Privacy Policy</span>
                <span className={styles.span}>{` `}</span>
                <span className={styles.bySubscribingYou}>
                  and provide consent to receive updates from our company.
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Footer Bottom */}
      <div className={styles.footerdkdk}>
        <div className={styles.footerLinks}>
          <div className={styles.credits}>
            <div className={styles.row}>
              <div className={styles.credits1}>
                <div className={styles.designedManaged}>
                  {`© 2024 Designed & Managed by Prism.`}
                </div>
                <div className={styles.footerLinks3}>
                  <div className={styles.designedManaged}>Privacy Policy</div>
                  <div className={styles.designedManaged}>Terms of Service</div>
                </div>
              </div>
              <div className={styles.social}>
                <div onClick={handleTiktok}>
                  <Image
                    className={styles.symbolsvgIcon}
                    loading="lazy"
                    width={21}
                    height={24}
                    alt=""
                    src={symbolsvg}
                  />
                </div>
                <div className={styles.fb} onClick={handleYoutube}>
                  <Image
                    className={styles.symbolsvgIcon1}
                    loading="lazy"
                    width={24}
                    height={17}
                    alt=""
                    src={symbolsvg1}
                  />
                </div>
                <div className={styles.fb} onClick={handleFacebook}>
                  <Image
                    className={styles.path14Icon}
                    loading="lazy"
                    width={18}
                    height={18}
                    alt=""
                    src="/path14-1.svg"
                  />
                </div>
                <div className={styles.fb} onClick={handleInstagram}>
                  <Image
                    className={styles.path14Icon}
                    loading="lazy"
                    width={18}
                    height={18}
                    alt=""
                    src="/vector-8.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  maskGroup: PropTypes.string.isRequired,
  symbolsvg: PropTypes.string.isRequired,
  symbolsvg1: PropTypes.string.isRequired,
};

export default Footer;
