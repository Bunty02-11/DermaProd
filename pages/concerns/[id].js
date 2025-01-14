import { useCallback } from "react";
import FrameComponent1 from "../../components/frame-component1";
import ConcernsDetailsComp from "../../components/ConcernDetails";
import FaqsList from "../../components/FaqsListing";

import Footer from "../../components/footer";
import styles from "./concerns.module.css";
import FooterContainer from "../../components/footer-container";

export async function getStaticPaths() {
  const response = await fetch(
    `https://grateful-authority-34f01c9d0d.strapiapp.com/api/categories?populate=*`
  );
  const concern = await response.json();

  const paths = concern?.data.map((concern) => ({
    params: { id: concern.id.toString() }, // Ensure the id is a string
  }));
  return {
    paths, // The list of dynamic paths to pre-render
    fallback: false, // Set to 'false' if you want to show 404 for non-existent paths
  };
}

export async function getStaticProps(context) {
  const { id } = context.params;

  try {
    const response = await fetch(
      `https://grateful-authority-34f01c9d0d.strapiapp.com/api/concerns?filters[category][id][$eq]=${id}&populate=*`
    );
    const concern = await response.json();
    if (!concern || !concern.data) {
      return {
        notFound: true, // If no concern is found, show a 404 page
      };
    }

    return {
      props: { concern: concern.data }, // Pass only the relevant concern data
    };
  } catch (error) {
    console.error("Error fetching concern data:", error);
    return {
      notFound: true, // Fallback to 404 if an error occurs
    };
  }
}

const ConcernsDetails = ({ concern }) => {
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
    <div className={styles.concerns}>
      <FooterContainer />

      {concern?.length ? (
        <>
          <section className={styles.banner}>
            <div className={styles.loremIpsumDolor}>HOME - CONCERNS</div>
            <h1 className={styles.mediumLengthHero}>
              {concern?.[0]?.category?.Name}
            </h1>
          </section>
          <ConcernsDetailsComp content={concern} />
        </>
      ) : (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "50vh", width: "100%" }}
        >
          Nothing Found
        </div>
      )}
      <section className={styles.faq}>
        <div className={styles.sectionTitle}>
          <div className={styles.subheading}>SUPPORT</div>
          <div className={styles.content}>
            <h3 className={styles.heading}>Frequently Asked Questions</h3>
            <div
              className={styles.text}
            >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}</div>
          </div>
        </div>
        {/* <FaqsList faqsList={[1, 2, 3, 4, 5, 6, 7, 8]} /> */}

        {/* <div style={{ flex: "100%", width: "100%" }}>
          <AccordionList faqsList={[]}/>
        </div> */}
      </section>

      <Footer
        maskGroup="/mask-group@2x.png"
        symbolsvg="/symbolsvg-21.svg"
        symbolsvg1="/symbolsvg-31.svg"
      />
    </div>
  );
};

export default ConcernsDetails;
