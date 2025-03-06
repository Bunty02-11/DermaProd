import Image from "next/image";
import TextInput from "./text-input";
import Button from "./button";
import PropTypes from "prop-types";
import styles from "./footer.module.css";
import { useRouter } from "next/router"; // Import useRouter
import FooterMobile from "./footerMobile";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = ({ className = "", maskGroup, symbolsvg, symbolsvg1 }) => {
  const router = useRouter(); // Initialize router
  const [formData, setFormData] = useState({
    email: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  // Navigation handler
  const handleInstagram = () => {
    window.open(
      "https://www.instagram.com/dermatech_polyclinic/",
      "_blank",
      "noopener,noreferrer"
    );
  };
  const handleTiktok = () => {
    window.open(
      "https://www.tiktok.com/@dermatech_polyclinic?lang=en",
      "_blank",
      "noopener,noreferrer"
    );
  };
  const handleFacebook = () => {
    window.open(
      "https://www.facebook.com/DermatechPolyclinic",
      "_blank",
      "noopener,noreferrer"
    );
  };
  const handleYoutube = () => {
    window.open(
      "https://www.youtube.com/@DermaTech_Polyclinic",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleNavigation = (path) => {
    router.push(path);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    const { email } = formData;

    if (!email) {
      toast.error("Please fill in all fields.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(
        "https://romantic-acoustics-22fbc9f32c.strapiapp.com/api/contacts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ data: formData }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to subscribe.");
      }

      toast.success("Thank you for subscribing!");
      setFormData({
        email: "",
      });
    } catch (err) {
      console.error("ERR", err);
      toast.error("Submission failed. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <footer className={[styles.footer, className].join(" ")}>
        <div className="container">
          <div className={styles.container}>
            <div className={styles.content}>
              <div
                className={styles.links}
                style={{
                  cursor: "pointer",
                }}
              >
                <Image
                  className={styles.maskGroupIcon}
                  loading="lazy"
                  width={270}
                  height={48}
                  alt=""
                  src={maskGroup}
                />
                <div className={styles.column}>
                  <div className={styles.quickLinks}>Quick Links</div>
                  <div className={styles.footerLinks}>
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
                <div className={styles.column}>
                  <div className={styles.quickLinks}>Company</div>
                  <div className={styles.footerLinks}>
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
                <div className={styles.column2}>
                  <div className={styles.quickLinks}>Support</div>
                  <div className={styles.footerLinks}>
                    <div className={styles.link}>
                      <div className={styles.concerns}>
                        <a
                          href="tel:+971509870036"
                          className={styles.emailLink}
                        >
                          +971 50 9870 036
                        </a>
                      </div>
                    </div>
                    <div className={styles.link}>
                      <div className={styles.concerns}>
                        <a
                          href="mailto:info@dermatechpolyclinic.com"
                          className={styles.emailLink}
                        >
                          info@dermatechpolyclinic.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.newslatter}>
                <div className={styles.subscribeParent}>
                  <div className={styles.quickLinks}>Subscribe</div>
                  <div className={styles.joinOurNewsletter}>
                    Join our newsletter to stay up to date on features and
                    releases.
                  </div>
                </div>
                <div className={styles.actions}>
                  <form onSubmit={handleSubmit} className={styles.form}>
                    <input
                      style={{
                        width: "60%",
                        height: "45px",
                        backgroundColor: "#001830",
                        borderRadius: "5px",
                        border: "1px solid #E5E5E5",
                        padding: "10px 10px",
                        color: "#fff",
                      }}
                      className={styles.firstName}
                      type="email"
                      name="email"
                      placeholder="Enter your Email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <button type="submit" className={styles.buttonStyle}>
                      {isLoading ? "Subscribing..." : "Subscribe"}
                    </button>
                  </form>
                  <div className={styles.bySubscribingYouContainer}>
                    <span className={styles.bySubscribingYou}>
                      By subscribing you agree to with our
                    </span>
                    <span className={styles.span}>{` `}</span>
                    <span className={styles.privacyPolicy}
                    >Privacy Policy</span>
                    <span className={styles.span}>{` `}</span>
                    <span className={styles.bySubscribingYou}>
                      and provide consent to receive updates from our company.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.footerLinks}>
              <div className={styles.credits}>
                <div className={styles.divider} />
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
                    </div>
                  </div>
                  <div className={styles.social} onClick={handleTiktok}>
                    <Image
                      className={styles.symbolsvgIcon}
                      loading="lazy"
                      width={21}
                      height={24}
                      alt=""
                      src={symbolsvg}
                    />
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
        </div>
      </footer>
      <FooterMobile
        maskGroup={maskGroup}
        symbolsvg={symbolsvg}
        symbolsvg1={symbolsvg1}
      />
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
