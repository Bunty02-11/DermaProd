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

  return (
    <>
      <footer className={[styles.footer, className].join(" ")}>
        <div className={styles.content}>
          <div className="row">
            <div className="col col-12 col-md-8">
              <div
                className={styles.links}
                onClick={() => handleNavigation("/")}
                style={{
                  cursor: "pointer",
                }}
              >
                <div className="row">
                  <div className="col-12 mb-4">
                    <Image
                      className={styles.maskGroupIcon}
                      loading="lazy"
                      width={270}
                      height={48}
                      alt=""
                      src={maskGroup}
                    />
                  </div>
                  <div className="col-6">
                    <div className={""}>
                      <div className={styles.quickLinks}>Quick Links</div>
                      <div className={""}>
                        <div className={styles.link}>
                          <div
                            className={styles.concerns}
                            onClick={() => handleNavigation("/concerns")}
                          >
                            Concerns
                          </div>
                        </div>
                        <div className={styles.link}>
                          <div
                            className={styles.concerns}
                            onClick={() => handleNavigation("/services")}
                          >
                            Services
                          </div>
                        </div>
                        <div className={styles.link}>
                          <div
                            className={styles.concerns}
                            onClick={() => handleNavigation("/about")}
                          >
                            About
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className={""}>
                      <div className={styles.quickLinks}>Company</div>
                      <div className={""}>
                        <div className={styles.link4}>
                          <div
                            className={styles.faqs}
                            onClick={() => handleNavigation("/services")}
                          >
                            Services
                          </div>
                        </div>
                        <div className={styles.link}>
                          <div
                            className={styles.concerns}
                            onClick={() => handleNavigation("/blog")}
                          >
                            Blogs
                          </div>
                        </div>
                        <div
                          className={styles.link}
                          onClick={() => handleNavigation("/contact")}
                        >
                          <div className={styles.concerns}>Contact Us</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 mt-3 md-md-1">
                    <div className={""}>
                      <div className={styles.quickLinks}>Support</div>
                      <div className={""}>
                        <div className={styles.link}>
                          <div className={styles.concerns}>
                            +971 54 2790 987
                          </div>
                        </div>
                        <div className={styles.link}>
                          <div className={styles.concerns}>
                            support@gmail.com
                          </div>
                        </div>
                        <div className={styles.link}>
                          <div className={styles.concerns}>Location</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col-11 col-md-4 mt-4 md-md-1">
              <div className={styles.newslatter}>
                <div className={styles.subscribeParent}>
                  <div className={styles.quickLinks}>Subscribe</div>
                  <div className={styles.joinOurNewsletter}>
                    Join our newsletter to stay up to date on features and
                    releases.
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
          </div>
        </div>
      </footer>
      <div className={styles.footerdkdk}>
        <div className="row">
          <div className="col-11">
            <div className={styles.footerLinks}>
              <div className={styles.credits}>
                {/* <div className={styles.divider} /> */}
                <div className={styles.row}>
                  <div className={styles.credits1}>
                    <div
                      className={styles.designedManaged}
                    >{`© 2024 Designed & Managed by Prism.`}</div>
                    <div className={styles.footerLinks3}>
                      <div className={styles.designedManaged}>
                        Privacy Policy
                      </div>
                      <div className={styles.designedManaged}>
                        Terms of Service
                      </div>
                      <div className={styles.designedManaged}>
                        Cookies Settings
                      </div>
                    </div>
                  </div>
                  <div className={styles.social}>
                    <Image
                      className={styles.symbolsvgIcon}
                      loading="lazy"
                      width={21}
                      height={24}
                      alt=""
                      src={symbolsvg}
                    />
                    <Image
                      className={styles.symbolsvgIcon1}
                      loading="lazy"
                      width={24}
                      height={17}
                      alt=""
                      src={symbolsvg1}
                    />
                    <div className={styles.fb}>
                      <Image
                        className={styles.path14Icon}
                        loading="lazy"
                        width={18}
                        height={18}
                        alt=""
                        src="/path14-1.svg"
                      />
                    </div>
                    <div className={styles.fb}>
                      <Image
                        className={styles.path14Icon}
                        loading="lazy"
                        width={18}
                        height={18}
                        alt=""
                        src="/path-2520-1.svg"
                      />
                    </div>
                    <div className={styles.x}>
                      <Image
                        className={styles.vectorIcon}
                        loading="lazy"
                        width={19}
                        height={16}
                        alt=""
                        src="/vector-7.svg"
                      />
                    </div>
                    <div className={styles.fb}>
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
