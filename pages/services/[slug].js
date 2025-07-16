import { useCallback } from "react";
import Image from "next/image";
import ServicesDescriptionItems from "../../components/ServicesDetails/index";
import Contact1 from "../../components/contact1";
import Footer from "../../components/footer";
import FaqsListing from "../../components/FaqsListing/index";
import styles from "./services-details.module.css";
import Services2 from "../../components/serviceDetailSection/services";
import FooterContainer from "../../components/footer-container";
import { useRouter } from "next/router";

export async function getServerSidePaths() {
  try {
    const response = await fetch(`https://kglynh11qd.execute-api.us-east-1.amazonaws.com/prod/api/services`);
    const services = await response.json();

    const paths = services?.map((service) => ({
      params: {
        slug: service?.slug || "",
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
    const res = await fetch(`https://kglynh11qd.execute-api.us-east-1.amazonaws.com/prod/api/services/slug/${slug}`);
    const data = await res.json();
    
    return {
      props: {
        serviceData: data || null,
      },
    };
  } catch (error) {
    console.error("Error fetching service data:", error);
    return {
      props: {
        serviceData: null,
      },
    };
  }
};

const ServicesDetails = ({ serviceData }) => {
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
            serviceData?.Main_banner?.url || "/placeholder-image3@2x.png"
          })`,
        }}
      >
        <div className={styles.loremIpsumDolor}>
          HOME - {serviceData?.category?.name || "Category"}
        </div>
        <h1 className={styles.mediumLengthHero}>
          {serviceData?.name || "Service Title"}
        </h1>
      </section>
      <div className="container">
        <Services2 serviceDetails={serviceData} />
        <Contact1 placeholderImage="/contact.jpg" />
        <section className={styles.faq}>
          <div className={styles.sectionTitle}>
            <div className={styles.subheading}>SUPPORT</div>
            <div className={styles.content}>
              <h3 className={styles.heading}>Frequently Asked Questions</h3>
            </div>
          </div>
          <FaqsListing faqsList={serviceData?.faqs} />
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
