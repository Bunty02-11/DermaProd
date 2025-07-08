import { useCallback } from "react";
import Image from "next/image";
import FrameComponent1 from "../../components/frame-component1";
import SpecialDescriptuonItems from "../../components/SpecialDetails/index";
import Contact1 from "../../components/contact1";
import AccordionItem from "../../components/accordion-item";
import Footer from "../../components/footer";
import styles from "./special-detail.module.css";
import SpecialDescriptuonItems1 from "../../components/SpecialDetails1/index";
import FaqsListing from "../../components/FaqsListing/index";
import Special from "../../components/specialDetailsSection/Special";
import FooterContainer from "../../components/footer-container";
import { useRouter } from "next/router";

export async function getServerSidePaths() {
  try {
    const response = await fetch(`https://exw7ljbf37.execute-api.us-east-1.amazonaws.com/stagging/api/specialproducts`);
    const specials = await response.json();

    const paths = specials?.map((special) => ({
      params: {
        slug: special?.slug || "",
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
    const res = await fetch(`https://exw7ljbf37.execute-api.us-east-1.amazonaws.com/stagging/api/specialproducts/slug/${slug}`);
    const data = await res.json();
    
    return {
      props: {
        specialData: data || null,
      },
    };
  } catch (error) {
    console.error("Error fetching special data:", error);
    return {
      props: {
        specialData: null,
      },
    };
  }
};

const ServicesDetails = ({ specialData }) => {
  const onAccordionHeaderClick = useCallback((event) => {
    event.preventDefault();
  }, []);

  return (
    <div className={styles.servicesDetails}>
      <FooterContainer />
      <section
        className={styles.banner}
        style={{
          backgroundImage: `url(${
            specialData?.Main_banner?.url || "/placeholder-image3@2x.png"
          })`,
        }}
      >
        <div className={styles.loremIpsumDolor}>
          HOME - {specialData?.category?.name || "Category"}
        </div>
        <h1 className={styles.mediumLengthHero}>
          {specialData?.name || "Special Title"}
        </h1>
      </section>
      <div className="container">
        <Special specialDetails={specialData} />
        <Contact1 placeholderImage="/contact.jpg" />
        <section className={styles.faq}>
          <div className={styles.sectionTitle}>
            <div className={styles.subheading}>SUPPORT</div>
            <div className={styles.content}>
              <h3 className={styles.heading}>Frequently Asked Questions</h3>
            </div>
          </div>
          <FaqsListing faqsList={specialData?.faqs} />
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

export default ServicesDetails;
