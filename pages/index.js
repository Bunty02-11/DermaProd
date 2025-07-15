import Image from "next/image";
import { useState, useEffect } from "react";
import FooterContainer from "../components/footer-container";
import Banner from "../components/banner";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent4 from "../components/frame-component4";
import Content from "../components/content";
import Component1 from "../components/component1";
import FrameComponent from "../components/frame-component";
import Contact1 from "../components/contact1";
import ConcernsDetailsHomeComp from "../components/ConcernDetailsHomePage/index";
import ServiceDetailsHomePage from "../components/ServiceDetailsHomePage/index";
import PromotiondetailsHomePage from "../components/PromotionDetailsHomePage/index";
// import BlogListingHomeComp from "../components/BlogListingHomePage";
import Footer from "../components/footer";
import styles from "./index.module.css";
import StaticFaqsLisiting from "../components/staticfaqs/staticfaqlist";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import StatsSlider from "../components/StatsSlider";

const Home = () => {
  const [concerns, setConcerns] = useState([]);
  const [services, setServices] = useState([]);
  const [promotions, setPromotions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define API base URL
    const API_BASE_URL = "https://exw7ljbf37.execute-api.us-east-1.amazonaws.com/stagging/";

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        console.log("Fetching data from:", API_BASE_URL);

        // Fetch concerns
        const concernsRes = await fetch(`${API_BASE_URL}/api/concerns`);
        // console.log("Concerns response status:", concernsRes.status);
        const concernsData = await concernsRes.json();
        // console.log("Concerns data:", concernsData);
        setConcerns(concernsData);

        // Fetch services
        const servicesRes = await fetch(`${API_BASE_URL}/api/services`);
        // console.log("Services response status:", servicesRes.status);
        const servicesData = await servicesRes.json();
        // console.log("Services data:", servicesData);
        setServices(servicesData);

        // Fetch promotions
        const promotionsRes = await fetch(`${API_BASE_URL}/api/specialproducts`);
        // console.log("Promotions response status:", promotionsRes.status);
        const promotionsData = await promotionsRes.json();
        // console.log("Promotions data:", promotionsData);
        setPromotions(promotionsData);

        // Update state with fetched data - API returns array directly, not nested in data property
        // setConcerns(concernsData);
        // setServices(servicesData);
        // setPromotions(promotionsData);

      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data. Please check your API connection.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  console.log(concerns, "concerns");

  return (
    <div className={styles.home}>
      <FooterContainer />
      <Banner />
      <section className="container">
        <FrameComponent2 />
        <FrameComponent3 />
      </section>
      <FrameComponent4 />

      {/* Error message display */}
      {/* {error && (
        <div className="error-message" style={{ color: 'red', padding: '20px', textAlign: 'center' }}>
          {error}
        </div>
      )} */}

      {/* Concerns Section */}
      <section className={styles.hero} style={{ paddingBottom: "60px" }}>
        <div className={styles.frameParent}>
          <div className={styles.loremIpsumDolorSitAmetCoParent}>
            <div className={styles.loremIpsumDolor}>Concerns</div>
            <h2
              className={styles.mediumLengthHero}
            >{`Concerns & Treatments`}</h2>
          </div>
          {loading ? (
            <div>Loading concerns...</div>
          ) : concerns && concerns.length > 0 ? (
            <ConcernsDetailsHomeComp content={concerns} />
          ) : (
            <div>No concerns data available</div>
          )}
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
            src="/whychoose.jpg"
          />
          <div className={styles.content1}>
            <div className={styles.loremIpsumDolorSitAmetCoParent}>
              <div className={styles.loremIpsumDolor}>WHY CHOOSE US</div>
              <h1 className={styles.mediumLengthHeroContainer}>
                <p className={styles.chooseTheBest}>Choose The Best For Your</p>
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
                  mediumLengthSectionHeading="Services"
                  loremipsum="Services Our clinic offers round-the-clock services, catering to your beauty and wellness needs anytime."
                />
              </div>
            </div>
          </div>
          <StatsSlider
            stats={[
              { perfumes: "15", perfumes1: "Expert Doctors" },
              { perfumes: "7k", perfumes1: "Happy Patients" },
              { perfumes: "55+", perfumes1: "Modern Amenities" },
              { perfumes: "15", perfumes1: "Awards Won" }
            ]}
          />
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.hero}
        style={{
          // paddingTop: "60px",
          // paddingBottom: "60px",
          "@media (max-width: 450px)": {
            paddingTop: "40px",
            paddingBottom: "40px"
          }
        }}
      >
        <div className={styles.frameParent}>
          <div className={styles.loremIpsumDolorSitAmetCoParent}>
            <div className={styles.loremIpsumDolor}>services</div>
            <h2
              className={styles.mediumLengthHero}
            >{`Services & Treatments`}</h2>
          </div>
          {loading ? (
            <div>Loading services...</div>
          ) : services && services.length > 0 ? (
            <ServiceDetailsHomePage content={services} />
          ) : (
            <div>No services data available</div>
          )}
        </div>
      </section>

      <Image
        className={styles.shape211Icon}
        width={655}
        height={775}
        alt=""
        src="/shape21-1@2x.png"
      />

      {/* Promotions Section */}
      <section
        className={styles.hero}
        style={{
          paddingTop: "60px",
          // paddingBottom: "60px",
          "@media (max-width: 450px)": {
            paddingTop: "40px",
            paddingBottom: "40px"
          }
        }}
      >
        <div className={styles.frameParent}>
          <div className={styles.loremIpsumDolorSitAmetCoParent}>
            <div className={styles.loremIpsumDolor}>Special Promotions</div>
            <h2 className={styles.mediumLengthHero}>{`Trendy & Men Beauty`}</h2>
          </div>
          {loading ? (
            <div>Loading promotions...</div>
          ) : promotions && promotions.length > 0 ? (
            <PromotiondetailsHomePage content={promotions} />
          ) : (
            <div>No promotions data available</div>
          )}
        </div>
      </section>

      <FrameComponent
        placeholderImage="/placeholder-image@2x.png"
      />

      <section className={styles.testimonialWrapperWrapper}>
        <div className={styles.frameParent}>
          <div className={styles.loremIpsumDolorSitAmetCoParent}>
            <h1 className={styles.mediumLengthHero}>Before After Gallery</h1>
          </div>
          <div className={styles.content5}>
            {/* Desktop View - Regular flex layout */}
            <div className={`${styles.row4} ${styles.desktopGallery}`}>
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

            {/* Mobile View - Swiper */}
            <div className={styles.mobileGallery}>
              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1.2}
                centeredSlides={true}
                loop={true}
                loopedSlides={3}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                speed={800}
                breakpoints={{
                  320: {
                    slidesPerView: 1.1,
                    spaceBetween: 15,
                  },
                  480: {
                    slidesPerView: 1.2,
                    spaceBetween: 20,
                  },
                  640: {
                    slidesPerView: 1.3,
                    spaceBetween: 20,
                  },
                }}
                className={styles.gallerySwiper}
              >
                <SwiperSlide>
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
                </SwiperSlide>
                <SwiperSlide>
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
                </SwiperSlide>
                <SwiperSlide>
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
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      <Contact1 placeholderImage="/contact.jpg" />
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
            <StaticFaqsLisiting />
          </div>
        </div>
      </section>

      <Footer
        maskGroup="/mask-group@2x.png"
        symbolsvg="/symbolsvg-2.svg"
        symbolsvg1="/symbolsvg-3.svg"
      />
    </div>
  );
};

export default Home;
