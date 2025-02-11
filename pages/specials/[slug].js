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

export async function getServerSidePaths() {
  const response = await fetch(
    `https://romantic-acoustics-22fbc9f32c.strapiapp.com/api/promotions?populate=*`
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
      `https://romantic-acoustics-22fbc9f32c.strapiapp.com/api/promotions?filters[slug][$eq]=${slug}&populate=*`
    );
    const data = await res.json();
    return {
      props: {
        specialData: data?.data[0] || null, // Assume the first matching item
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
  console.log("🚀 ~ ServicesDetails ~ specialData:", specialData);
  const onAccordionHeaderClick = useCallback((event) => {
    // Accordion toggle logic
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
          HOME - {specialData?.category?.Name || "Category"}
        </div>
        <h1 className={styles.mediumLengthHero}>
          {specialData?.Name || "Special Title"}
        </h1>
      </section>
      <div className={styles.container}>
        <div className={styles.services}>
          {/* <div className={styles.Name}>
          <div className={styles.loremIpsumDolor1}>
            {specialData?.category?.Name || "Category"}
          </div>
          <h1 className={styles.mediumLengthHero1}>
            {specialData?.Name || "Special Title"}
          </h1>
        </div>
        <div className={styles.image}>
          <Image
            className={styles.placeholderImageIcon}
            loading="lazy"
            width={1280}
            height={500}
            alt={specialData?.Name || "Special Image"}
            src={specialData?.Banner_image?.url || "/placeholder-image3@2x.png"}
          />
        </div>
        <div className={styles.description}>
          <div className={styles.text}>
            {specialData?.meta_description || "Special description goes here."}
          </div>
        </div> */}
          <Special specialDetails={specialData} />
        </div>
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
