import { useCallback } from "react";
import FrameComponent1 from "../../components/frame-component1";
import ContentDetailsComp from "../../components/ConcernDetailsSection/index";
import Contact1 from "../../components/contact1";
import AccordionItem from "../../components/accordion-item";
import Footer from "../../components/footer";
import styles from "./concerns-details.module.css";
import { serverurl } from "../../base";
import FaqsListing from "../../components/FaqsListing/index";
import FooterContainer from "../../components/footer-container";

export async function getServerSidePaths() {
  const response = await fetch(
    `https://romantic-acoustics-22fbc9f32c.strapiapp.com/api/Concerns?populate=*`
  );
  const concern = await response.json();

  const paths = concern?.data.map((concern) => ({
    params: {
      slug: concern?.attributes?.slug || "",
    },
  }));

  return {
    paths,
    fallback: "blocking", // Dynamically generate pages for new paths
  };
}

export const getServerSideProps = async (context) => {
  if (!context.params || !context.params.slug) {
    return {
      notFound: true,
    };
  }
  const { slug } = context.params;

  try {
    const res = await fetch(
      `https://romantic-acoustics-22fbc9f32c.strapiapp.com/api/Concerns?filters[slug][$eq]=${slug}&populate=*`
    );
    const data = await res.json();
    return {
      props: {
        concernDetails: data?.data[0] || null, // Assume the first matching item
      },
    };
  } catch (error) {
    console.error("Error fetching special data:", error);
    return {
      props: {
        concernDetails: null,
      },
    };
  }
};

const ConcernsDetails = ({ concernDetails }) => {
  // console.log(concernDetails, "--concernDetails");
  const onAccordionHeaderClick = useCallback((event) => {
    event.preventDefault();
  }, []);

  return (
    <div className={styles.concernsDetails}>
      <FooterContainer />
      <section
        className={styles.banner}
        style={{
          backgroundImage: `url(${
            concernDetails?.Main_banner?.url || "/placeholder-image3@2x.png"
          })`,
        }}
      >
        <div className={styles.loremIpsumDolor}>
          HOME - {concernDetails?.category?.Name || "Category"}
        </div>
        <h3 className={styles.mediumLengthHero}>
          {concernDetails?.Name || "Special Title"}
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
