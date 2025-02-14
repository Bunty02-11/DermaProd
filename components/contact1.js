import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./contact1.module.css";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    const { Name, last_Name, email, Number, message } = formData;

    if (!Name || !last_Name || !email || !Number || !message) {
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
        throw new Error("Failed to submit form.");
      }

      toast.success("Form submitted successfully!");
      setFormData({
        Name: "",
        last_Name: "",
        email: "",
        Number: "",
        message: "",
      });
    } catch (err) {
      console.error("ERR", err);
      toast.error("Submission failed. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={[styles.contact, className].join(" ")}>
      <ToastContainer />
      <div className="container">
        <div className={styles.content}>
          <div className={styles.form}>
            <div className={styles.heading}>
              <div className={styles.loremIpsumDolor}>CONTACT</div>
              <h3 className={styles.mediumLengthHero}>
                Request A Consultation
              </h3>
            </div>
            <div className={styles.formFields}>
              <div className={styles.name}>
                <input
                  className={styles.firstName}
                  type="text"
                  name="Name"
                  placeholder="First Name"
                  required
                  value={formData.Name}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.name}>
                <input
                  className={styles.firstName}
                  type="text"
                  name="last_Name"
                  placeholder="Last Name"
                  required
                  value={formData.last_Name}
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
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.name}>
                <input
                  className={styles.firstName}
                  type="number"
                  name="Number"
                  placeholder="Phone"
                  required
                  value={formData.Number}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className={styles.name5}>
              <textarea
                type="text"
                name="message"
                placeholder="Message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={3}
              />
            </div>
            <div className={styles.btns}>
              <div className={styles.btnSubmit}>
                <div className={styles.submitNow} onClick={handleSubmit}>
                  {isLoading ? "Submitting..." : "Submit Now"}
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
            src={placeholderImage}
          />
        </div>
      </div>
    </div>
  );
};

Contact1.propTypes = {
  className: PropTypes.string,
  placeholderImage: PropTypes.string.isRequired,
};

export default Contact1;
