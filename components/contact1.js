import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./contact1.module.css";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Contact1 = ({ className = "", placeholderImage }) => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const { name, subject, email, phone, message } = formData;

    // Field validation
    if (!name || !subject || !email || !phone || !message) {
      toast.error("Please fill in all fields.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    // Phone validation
    const phoneRegex = /^[0-9\-\+]{9,15}$/;
    if (!phoneRegex.test(phone)) {
      toast.error("Please enter a valid phone number (9-15 digits).", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://exw7ljbf37.execute-api.us-east-1.amazonaws.com/stagging/api/contacts",
        formData, // Changed from { data: formData } to formData directly
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        toast.success("Form submitted successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setFormData({
          name: "",
          subject: "",
          email: "",
          phone: "",
          message: "",
        });
      }
    } catch (err) {
      console.error("ERR", err);
      let errorMessage = "Submission failed. Please try again later.";
      
      if (err.response) {
        errorMessage = err.response.data?.message || 
                      err.response.data?.error || 
                      `Server error: ${err.response.status}`;
      } else if (err.request) {
        errorMessage = "No response from server. Please check your connection.";
      }
      
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={[styles.contact, className].join(" ")}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
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
                  name="name"
                  placeholder="First Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.name}>
                <input
                  className={styles.firstName}
                  type="text"
                  name="subject"
                  placeholder="Last Name"
                  required
                  value={formData.subject}
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
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className={styles.name5}>
              <textarea
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
                <button 
                  style={{
                    backgroundColor: "transparent",
                    color: "#fff",
                    border: "none",
                  }}
                  className={styles.submitNow} 
                  onClick={handleSubmit}
                  disabled={isLoading}
                >
                  {isLoading ? "Submitting..." : "Submit Now"}
                </button>
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