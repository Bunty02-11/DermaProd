import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./card5.module.css";
import moment from "moment";
import { useRouter } from "next/router";

const Card5 = ({
  className = "",
  Banner,
  heading,
  text,
  date,
  documentId,
}) => {
  const router = useRouter();

  const handleNavigation = (path) => {
    // Store documentId in localStorage
    const storedIds = JSON.parse(localStorage.getItem("documentIds")) || [];
    if (!storedIds.includes(documentId)) {
      localStorage.setItem(
        "documentIds",
        JSON.stringify([...storedIds, documentId])
      );
    }

    // Navigate to the individual blog detail page
    router.push(path);
  };

  return (
    <div
      className={[styles.card, className].join(" ")}
      style={{ cursor: "pointer" }}
    >
      <Image
        className={styles.placeholderImageIcon}
        loading="lazy"
        width={500}
        height={260}
        alt="Banner image"
        src={Banner}
      />
      <div className={styles.content}
        onClick={() => handleNavigation(`/blogdetails/${documentId}`)}
      >
        <div className={styles.textParent}>
          <div className={styles.text}>
            {moment(date).format("DD MMMM YYYY")}
          </div>
          <h2 className={styles.heading}>{heading}</h2>
        </div>
        <div className={styles.text1}>{text}</div>
      </div>
    </div>
  );
};

Card5.propTypes = {
  className: PropTypes.string,
  Banner: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
  documentId: PropTypes.string.isRequired,
};

export default Card5;