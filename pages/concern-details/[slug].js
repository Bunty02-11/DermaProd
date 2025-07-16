import { useCallback, useState, useEffect } from "react";
import FrameComponent1 from "../../components/frame-component1";
import ContentDetailsComp from "../../components/ConcernDetailsSection/index";
import Contact1 from "../../components/contact1";
import AccordionItem from "../../components/accordion-item";
import Footer from "../../components/footer";
import styles from "./concerns-details.module.css";
import { serverurl } from "../../base";
import FaqsListing from "../../components/FaqsListing/index";
import FooterContainer from "../../components/footer-container";
import { useRouter } from "next/router";

export async function getServerSidePaths() {
  try {
    const response = await fetch(`https://exw7ljbf37.execute-api.us-east-1.amazonaws.com/stagging/api/concerns`);
    const concerns = await response.json();

    const paths = concerns?.map((concern) => ({
      params: {
        slug: concern?.slug || "",
      },
    }));

    return {
      paths,
      fallback: "blocking", // Dynamically generate pages for new paths
    };
  } catch (error) {
    console.error("Error fetching paths:", error);
    return {
      paths: [],
      fallback: "blocking",
    };
  }
}

export const getServerSideProps = async (context) => {
  if (!context.params || !context.params.slug) {
    return {
      notFound: true,
    };
  }
  const { slug } = context.params;

  try {
    const res = await fetch(`https://exw7ljbf37.execute-api.us-east-1.amazonaws.com/stagging/api/concerns/slug/${slug}`);
    const data = await res.json();
    
    return {
      props: {
        concernDetails: data || null,
      },
    };
  } catch (error) {
    console.error("Error fetching concern data:", error);
    return {
      props: {
        concernDetails: null,
      },
    };
  }
};

const ConcernsDetails = ({ concernDetails }) => {
  const onAccordionHeaderClick = useCallback((event) => {
    event.preventDefault();
  }, []);

  return (
    <div className={styles.concernsDetails}>
      <FooterContainer />
      <section
        className={styles.banner}
        style={{
          backgroundImage: concernDetails?.mainImages
            ? `url("${concernDetails.mainImages.replace(/ /g, "%20")}")`
            : 'url("/placeholder-image3@2x.png")'
        }}
      >
        <div className={styles.loremIpsumDolor}>
          HOME - {concernDetails?.category?.name || "Category"}
        </div>
        <h3 className={styles.mediumLengthHero}>
          {concernDetails?.name || "Special Title"}
        </h3>
      </section>
      <div className="container">
        <ContentDetailsComp concernDetails={concernDetails} />
        <Contact1 placeholderImage={"/contact.jpg"} />
        <section className={styles.faq}>
          <div className={styles.sectionTitle}>
            <div className={styles.subheading}>SUPPORT</div>
            <div className={styles.content}>
              <h3 className={styles.heading}>Frequently Asked Questions</h3>
            </div>
          </div>
          <FaqsListing faqsList={concernDetails?.faqs} />
        </section>
      </div>
      <Footer
        maskGroup="/mask-group@2x.png"
        symbolsvg="/symbolsvg-21.svg"
        symbolsvg1="/symbolsvg-31.svg"
      />
    </div>
  );
};

export default ConcernsDetails;
