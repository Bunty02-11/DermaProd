import { useCallback } from "react";
import FrameComponent1 from "../../components/frame-component1";
import ConcernsDetailsComp from "../../components/ConcernDetails";
import FaqsList from "../../components/FaqsListing";

import Footer from "../../components/footer";
import styles from "./concerns.module.css";
import FooterContainer from "../../components/footer-container";
import { useParams } from "next/navigation";

export async function getServerSidePaths() {
  const response = await fetch(
    `https://romantic-acoustics-22fbc9f32c.strapiapp.com/api/categories?populate=*`
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

export async function getServerSideProps(context) {
  const { id } = context.params;

  try {
    const response = await fetch(
      `https://romantic-acoustics-22fbc9f32c.strapiapp.com/api/concerns?filters[category][id][$eq]=${id}&populate=*`
    );
    const concern = await response.json();

    if (!concern || !concern.data) {
      return {
        notFound: true, // Show 404 if no concern data is found
      };
    }

    return {
      props: { concern: concern.data }, // Pass the fetched data as props
    };
  } catch (error) {
    console.error("Error fetching concern data:", error);
    return {
      notFound: true, // Fallback to 404 if an error occurs
    };
  }
}

const ConcernsDetails = ({ concern }) => {
  const { id } = useParams();
  const onAccordionHeaderClick = useCallback((event) => {
    event.preventDefault();
  }, []);

  return (
    <div className={styles.concerns}>
      <FooterContainer />

      {concern?.length ? (
        <>
          <section
            className={styles.banner}
            style={{
              backgroundImage: `url(${
                id == "2"
                  ? "/facialConcerns.jpg"
                  : id == "23"
                  ? "/bodyConcerns.jpg"
                  : id == "24"
                  ? "/skinConcerns.jpg"
                  : "/skinConcerns.jpg"
              })`,
            }}
          >
            <div className={styles.loremIpsumDolor}>HOME - CONCERNS</div>
            <h1 className={styles.mediumLengthHero}>
              {concern?.[0]?.category?.Name}
            </h1>
          </section>
          <div className={styles.container}>
            <ConcernsDetailsComp content={concern} />
          </div>
        </>
      ) : (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "50vh", width: "100%" }}
        >
          Nothing Found
        </div>
      )}

      <Footer
        maskGroup="/mask-group@2x.png"
        symbolsvg="/symbolsvg-21.svg"
        symbolsvg1="/symbolsvg-31.svg"
      />
    </div>
  );
};

export default ConcernsDetails;
