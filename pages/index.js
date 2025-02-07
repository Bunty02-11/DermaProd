import { useCallback } from "react";
import Image from "next/image";
import FooterContainer from "../components/footer-container";
import Banner from "../components/banner";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent4 from "../components/frame-component4";
import Card from "../components/card";
import Card1 from "../components/card1";
import Content from "../components/content";
import Component1 from "../components/component1";
import FrameComponent from "../components/frame-component";
import FrameComponent5 from "../components/frame-component5";
import Content1 from "../components/content1";
import Contact1 from "../components/contact1";
import AccordionItem from "../components/accordion-item";
import ConcernsDetailsHomeComp from "../components/ConcernDetailsHomePage/index";
import ServiceDetailsHomePage from "../components/ServiceDetailsHomePage/index";
import PromotiondetailsHomePage from "../components/PromotionDetailsHomePage/index";
import BlogListingHomeComp from "../components/BlogListingHomePage";
import Footer from "../components/footer";
import styles from "./index.module.css";
import FaqsList from "../components/FaqsListing";
import StaticFaqsLisiting from "../components/staticfaqs/staticfaqlist";

export async function getServerSideProps(context) {
  const API_BASE_URL =
    process.env.API_BASE_URL ||
    "https://romantic-acoustics-22fbc9f32c.strapiapp.com";

  try {
    const [
      concernsRes,
      servicesRes,
      promotionsRes,
      discountRes,
      testimonialRes,
    ] = await Promise.all([
      fetch(`${API_BASE_URL}/api/concerns?populate=*`),
      fetch(`${API_BASE_URL}/api/services?populate=*`),
      fetch(`${API_BASE_URL}/api/Promotions?populate=*`),
      fetch(`${API_BASE_URL}/api/Discounts?populate=*`),
      fetch(`${API_BASE_URL}/api/testimonials?populate=*`),
    ]);

    const [
      concernsData,
      servicesData,
      promotionsData,
      discountData,
      testimonialData,
    ] = await Promise.all([
      concernsRes.json(),
      servicesRes.json(),
      promotionsRes.json(),
      discountRes.json(),
      testimonialRes.json(),
    ]);

    if (
      !concernsData.data ||
      !servicesData.data ||
      !promotionsData.data ||
      !discountData.data ||
      !testimonialData.data
    ) {
      return { notFound: true };
    }

    return {
      props: {
        concerns: concernsData.data,
        services: servicesData.data,
        promotions: promotionsData.data,
        discounts: discountData.data,
        testimonial: testimonialData.data,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { notFound: true };
  }
}

const Home = ({ concerns, services, promotions, discounts, testimonial }) => {
  // console.log("🚀 ~ Home ~ promotions:", promotions);
  // console.log("🚀 ~ Home ~ concern:", concern);
  // console.log("🚀 ~ Home ~ discount:", discounts);
  const onAccordionHeaderClick = useCallback((event) => {
    event.preventDefault();
  }, []);

  return (
    <div className={styles.home}>
      <FooterContainer />
      <Banner />
      <div className={styles.container}>
        <FrameComponent2 />
        <FrameComponent3 content={discounts} />
        <FrameComponent4 />
        <section className={styles.hero}>
          <div className={styles.frameParent}>
            <div className={styles.loremIpsumDolorSitAmetCoParent}>
              <div className={styles.loremIpsumDolor}>Concerns</div>
              <h1
                className={styles.mediumLengthHero}
              >{`Concerns & Treatments`}</h1>
            </div>

            <ConcernsDetailsHomeComp content={concerns} />
            {/* <div className={styles.row}>
            <Card placeholderImage="/placeholder-image-1@2x.png" />
            <Card placeholderImage="/placeholder-image-1@2x.png" />
            <Card1
              placeholderImage="/placeholder-image-1@2x.png"
              showContentIntroThree
              heading="Eye Puffiness"
              contentDescriptionThree="Rediscover your radiance with advanced skincare, including Jalupro, Botox, and Hydrafacial treatments, for a luminous and revitalized complexion. Hydrafacial treatments, for a luminous and revitalized complexion."
            />
          </div> */}
            {/* <div className={styles.content}>
            <div className={styles.dotsContainer}>
              <div className={styles.sliderDots}>
                <div className={styles.dot} />
                <div className={styles.dot1} />
                <div className={styles.dot1} />
                <div className={styles.dot1} />
                <div className={styles.dot1} />
              </div>
            </div>
            <div className={styles.arrowsParent}>
              <Image
                className={styles.arrowsIcon}
                width={48}
                height={48}
                alt=""
                src="/arrows@2x.png"
              />
              <div className={styles.arrows}>
                <Image
                  className={styles.fearrowUpIcon}
                  width={24}
                  height={24}
                  alt=""
                  src="/fearrowup@2x.png"
                />
              </div>
            </div>
          </div> */}
          </div>
        </section>
        <section className={styles.chooseWrapper}>
          <div className={styles.choose}>
            <Image
              className={styles.chooseBackgroundIcon}
              loading="lazy"
              width={550}
              height={650}
              alt=""
              src="/rectangle-1@2x.png"
            />
            <div className={styles.content1}>
              <div className={styles.loremIpsumDolorSitAmetCoParent}>
                <div className={styles.loremIpsumDolor}>WHY CHOOSE US</div>
                <h1 className={styles.mediumLengthHeroContainer}>
                  <p className={styles.chooseTheBest}>
                    Choose The Best For Your
                  </p>
                  <p className={styles.chooseTheBest}>Health</p>
                </h1>
              </div>
              <div className={styles.content2}>
                <div className={styles.row1}>
                  <Content
                    doctor1="/doctor-1.svg"
                    mediumLengthSectionHeading="Professional Staff"
                    loremipsum="Our team of experienced professionals is dedicated to providing you with top-tier care and effective results."
                  />
                  <Content
                    doctor1="/firstaidkit-1.svg"
                    mediumLengthSectionHeading="Emergency Care"
                    loremipsum="We can handle urgent aesthetic or skin care needs, ensuring quick and efficient care."
                  />
                </div>
                <div className={styles.row1}>
                  <Content
                    doctor1="/onlineappointment-1.svg"
                    mediumLengthSectionHeading="Online Appointment"
                    loremipsum="Convenience is key. Book your subsequent treatment at DermaTech easily with our simple online booking system."
                  />
                  <Content
                    doctor1="/support-1.svg"
                    mediumLengthSectionHeading="24/7 Services"
                    loremipsum="24/7 Services Our clinic offers round-the-clock services, catering to your beauty and wellness needs anytime."
                  />
                </div>
              </div>
            </div>
            <div className={styles.slider}>
              <Component1 perfumes="75+" perfumes1="Expert Doctors" />
              <Component1 perfumes="7k" perfumes1="Happy Patients" />
              <Component1 perfumes="850" perfumes1=" Modern Amenities" />
              <Component1 perfumes="15" perfumes1="Awards Won" />
            </div>
          </div>
        </section>
        <section className={styles.hero}>
          <div className={styles.frameParent}>
            <div className={styles.loremIpsumDolorSitAmetCoParent}>
              <div className={styles.loremIpsumDolor}>services</div>
              <h1
                className={styles.mediumLengthHero}
              >{`Services & Treatments`}</h1>
            </div>
            <ServiceDetailsHomePage content={services} />
          </div>
        </section>
        <Image
          className={styles.shape211Icon}
          width={655}
          height={775}
          alt=""
          src="/shape21-1@2x.png"
        />
        <FrameComponent
          placeholderImage="/placeholder-image-7@2x.png"
          content={testimonial}
        />
        <section className={styles.hero}>
          <div className={styles.frameParent}>
            <div className={styles.loremIpsumDolorSitAmetCoParent}>
              <div className={styles.loremIpsumDolor}>Special Promotions</div>
              <h1
                className={styles.mediumLengthHero}
              >{`Trendy & Men Beauty`}</h1>
            </div>
            <PromotiondetailsHomePage content={promotions} />
          </div>
        </section>

        <section className={styles.testimonialWrapperWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.loremIpsumDolorSitAmetCoParent}>
              <div className={styles.loremIpsumDolor}>
                Desired Procedure to Begin
              </div>
              <h1 className={styles.mediumLengthHero}>Before After Gallery</h1>
            </div>
            <div className={styles.content5}>
              <div className={styles.row4}>
                <div className={styles.card}>
                  <div className={styles.testimonialItem}>
                    <div className={styles.content6}>
                      <div className={styles.text1}>Before</div>
                    </div>
                    <div className={styles.content7}>
                      <div className={styles.text2}>After</div>
                    </div>
                  </div>
                  <div className={styles.testimonialSeparator} />
                </div>
                <div className={styles.card1}>
                  <div className={styles.testimonialItem}>
                    <div className={styles.content6}>
                      <div className={styles.text1}>Before</div>
                    </div>
                    <div className={styles.content7}>
                      <div className={styles.text2}>After</div>
                    </div>
                  </div>
                  <div className={styles.testimonialSeparator} />
                </div>
                <div className={styles.card2}>
                  <div className={styles.contentGroup}>
                    <div className={styles.content6}>
                      <div className={styles.text1}>Before</div>
                    </div>
                    <div className={styles.content11}>
                      <div className={styles.text2}>After</div>
                    </div>
                  </div>
                  <div className={styles.cardItem} />
                </div>
              </div>
            </div>
            {/* <div className={styles.content12}>
            <div className={styles.sliderDots}>
              <div className={styles.dot} />
              <div className={styles.dot1} />
              <div className={styles.dot1} />
              <div className={styles.dot1} />
              <div className={styles.dot1} />
            </div>
          </div> */}
          </div>
        </section>
        <section className={styles.blogs}>
          <BlogListingHomeComp />
        </section>
        <Contact1 placeholderImage="/1.jpg" />
        <section className={styles.faq}>
          <div className={styles.sectionTitle}>
            <div className={styles.subheading}>SUPPORT</div>
            <div className={styles.content13}>
              <h1 className={styles.heading1}>Frequently Asked Questions</h1>
              <div
                className={styles.text7}
              >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}</div>
            </div>
            <div className="container-fluid mt-5">
              <StaticFaqsLisiting staticFaqs={[]} />
            </div>
          </div>
        </section>
      </div>
      <Footer
        maskGroup="/mask-group@2x.png"
        symbolsvg="/symbolsvg-2.svg"
        symbolsvg1="/symbolsvg-3.svg"
      />
    </div>
  );
};

export default Home;
