"use client";
import { useCallback } from "react";
import Image from "next/image";
import FrameComponent from "./frame-component";
import AccordionItem from "./accordion-item";
import Footer from "./footer";
import PropTypes from "prop-types";
import styles from "./owner-container.module.css";
import StaticFaqsLisiting1 from "../components/staticfaqs2/staticfaqlist1";

export async function getServerSideProps(context) {
  const API_BASE_URL =
    process.env.API_BASE_URL ||
    "https://romantic-acoustics-22fbc9f32c.strapiapp.com";

  try {
    const [testimonial] = await Promise.all([
      fetch(`${API_BASE_URL}/api/testimonials?populate=*`),
    ]);

    const [testimonialData] = await Promise.all([testimonial.json()]);

    if (!testimonialData.data) {
      return { notFound: true };
    }

    return {
      props: {
        testimonial: testimonialData.data,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { notFound: true };
  }
}

const OwnerContainer = ({ className = "", testimonial }) => {
  const onAccordionHeaderClick = useCallback((event) => {
    const element = event.target;

    const accItem = element.closest("[data-acc-item]") || element;
    const accContent = accItem.querySelector("[data-acc-content]");
    const isOpen = accItem.hasAttribute("data-acc-open");
    const nextOuterSibling =
      accItem?.nextElementSibling || accItem?.parentElement?.nextElementSibling;
    const prevOuterSibling =
      accItem?.previousElementSibling ||
      accItem?.parentElement?.previousElementSibling;
    const siblingContainerAccItem = accItem?.hasAttribute("data-acc-original")
      ? accItem?.nextElementSibling ||
        nextOuterSibling?.querySelector("[data-acc-item]") ||
        nextOuterSibling
      : accItem?.previousElementSibling ||
        prevOuterSibling?.querySelector("[data-acc-item]") ||
        prevOuterSibling;
    const siblingAccItem =
      siblingContainerAccItem?.querySelector("[data-acc-item]") ||
      siblingContainerAccItem;

    if (!siblingAccItem) return;
    const originalDisplay = "flex";
    const siblingDisplay = "flex";

    const openStyleObject = {
      "grid-template-rows": "1fr",
    };
    const closeStyleObject = {
      "padding-top": "0px",
      "padding-bottom": "0px",
      "margin-bottom": "0px",
      "margin-top": "0px",
      "grid-template-rows": "0fr",
    };

    function applyStyles(element, styleObject) {
      Object.assign(element.style, styleObject);
    }

    function removeStyles(element, styleObject) {
      Object.keys(styleObject).forEach((key) => {
        element?.style.removeProperty(key);
      });
    }

    if (isOpen) {
      removeStyles(accContent, openStyleObject);
      applyStyles(accContent, closeStyleObject);

      setTimeout(() => {
        if (accItem) {
          accItem.style.display = "none";
          siblingAccItem.style.display = siblingDisplay;
        }
      }, 100);
    } else {
      if (accItem) {
        accItem.style.display = "none";
        siblingAccItem.style.display = originalDisplay;
      }
      const siblingAccContent =
        siblingAccItem?.querySelector("[data-acc-content]");
      setTimeout(() => {
        removeStyles(siblingAccContent, closeStyleObject);
        applyStyles(siblingAccContent, openStyleObject);
      }, 1);
    }
  }, []);

  return (
    <div className={[styles.ownerContainer, className].join(" ")}>
      <div className={styles.ownerContent}>
        <div className={styles.ownerTitleWrapper}>
          <div className={styles.ownerTitle}>
            <h1 className={styles.meetTheOwner}>Meet The Owner</h1>
            <div className={styles.perfumes}>
              At the helm of DermaTech Poly Clinic stands a visionary leader who
              combines passion and expertise to redefine aesthetic care in
              Dubai. With years of experience in the medical and wellness
              industry, the owner is dedicated to creating a space where
              innovation meets compassion. By integrating advanced technology
              with a commitment to personalized care, our leadership drives the
              clinic's mission to set new standards in aesthetic excellence.
            </div>
          </div>
          <Image
            className={styles.imgIcon}
            loading="lazy"
            width={630}
            height={445}
            alt=""
            src="/img-2@2x.png"
          />
        </div>
        <div className={styles.logoParent}>
          <div className={styles.logo}>
            <div className={styles.container}>
              <h3 className={styles.heading}>Our Certifications</h3>
              <div className={styles.content}>
                <Image
                  className={styles.logosvgIcon}
                  loading="lazy"
                  width={130}
                  height={100}
                  alt=""
                  src="/logosvg@2x.png"
                />
                <Image
                  className={styles.logosvgIcon}
                  loading="lazy"
                  width={130}
                  height={100}
                  alt=""
                  src="/logosvg@2x.png"
                />
                <Image
                  className={styles.logosvgIcon}
                  loading="lazy"
                  width={130}
                  height={100}
                  alt=""
                  src="/logosvg@2x.png"
                />
                <Image
                  className={styles.logosvgIcon}
                  loading="lazy"
                  width={130}
                  height={100}
                  alt=""
                  src="/logosvg@2x.png"
                />
                <Image
                  className={styles.logosvgIcon}
                  width={130}
                  height={100}
                  alt=""
                  src="/logosvg@2x.png"
                />
              </div>
            </div>
          </div>
          {/* <FrameComponent placeholderImage="/placeholder-image-7@2x.png" content={testimonial} /> */}
        </div>

        <div className={styles.faqParent}>
          <div
            className={styles.subheading}
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              marginLeft: "5%",
              marginBottom: "10px",
              fontSize: "18px",
            }}
          >
            SUPPORT
          </div>
          <div
            className={styles.content13}
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              marginLeft: "5%",
              marginBottom: "20px",
              fontSize: "36px",
            }}
          >
            <h3
              className={styles.heading1}
              style={{
                fontSize: "1.5rem",
                lineHeight: "1.2",
                margin: 0,
                fontSize: "36px",
              }}
            >
              Frequently Asked Questions
            </h3>
          </div>
          <div
            className="container-fluid mt-4"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: "5%",
              paddingRight: "5%",
              marginBottom: "40px",
            }}
          >
            <StaticFaqsLisiting1 staticFaqs={[]} />
          </div>
        </div>
      </div>
    </div>
  );
};

OwnerContainer.propTypes = {
  className: PropTypes.string,
};

export default OwnerContainer;
