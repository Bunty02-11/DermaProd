import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./contact1.module.css";
import { useState } from "react";

const Contact1 = ({ className = "", placeholderImage }) => {
  const [formData, setFormData] = useState({
    Name: "",
    last_Name: "",
    email: "",
    Number: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async () => {
    if (!formData?.Name) {
      return;
    }
    if (!formData?.last_Name) {
      return;
    }
    if (!formData?.email) {
      return;
    }
    if (!formData?.Number) {
      return;
    }
    if (!formData?.message) {
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(
        "https://grateful-authority-34f01c9d0d.strapiapp.com/api/contacts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // Specify the type of data being sent
          },
          body: JSON.stringify({ data: formData }),
        }
      );
      console.log("🚀 ~ handleSubmit ~ response:", response);
      alert("Form Submitted");
      toas;
    } catch (err) {
      console.log("ERR", err);
      alert("Faild, Try again later!");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className={[styles.contact, className].join(" ")}>
      <div className={styles.content}>
        <div className={styles.form}>
          <div className={styles.heading}>
            <div className={styles.loremIpsumDolor}>CONTACT</div>
            <h3 className={styles.mediumLengthHero}>Request A Consultation</h3>
          </div>
          <div className={styles.formFields}>
            <div className={styles.name}>
              <input
                className={styles.firstName}
                type="text"
                name="Name"
                placeholder="First Name"
                onChange={handleChange}
              />
            </div>
            <div className={styles.name}>
              <input
                className={styles.firstName}
                type="text"
                name="last_Name"
                placeholder="Last Name"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={styles.formFields}>
            <div className={styles.name}>
              <input
                className={styles.firstName}
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
              />
            </div>
            <div className={styles.name}>
              <input
                className={styles.firstName}
                type="number"
                name="Number"
                placeholder="Phone"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={styles.name5}>
            <textarea
              type="text"
              name="message"
              placeholder="Message"
              onChange={handleChange}
              rows={3}
            />
          </div>
          <div className={styles.btns}>
            <div className={styles.btnSubmit}>
              <div className={styles.submitNow} onClick={() => handleSubmit()}>
                Submit Now
              </div>
            </div>
          </div>
        </div>
        <Image
          className={styles.placeholderImageIcon}
          loading="lazy"
          width={642}
          height={640}
          alt=""
          src={"/1.jpg"}
        />
      </div>
    </div>
  );
};

Contact1.propTypes = {
  className: PropTypes.string,
  placeholderImage: PropTypes.string.isRequired,
};

export default Contact1;
