import Image from "next/image";
import About1 from "../components/about1";
import ExploreItems from "../components/explore-items";
import Content from "../components/content";
import Component1 from "../components/component1";
import FrameComponent6 from "../components/frame-component6";
import OwnerContainer from "../components/owner-container";
import styles from "./about.module.css";
import Footer from "../components/footer";
import FooterContainer from "../components/footer-container";
import StaticFaqsLisiting from "../components/staticfaqs2/staticfaqlist1";
import FrameComponent from "../components/frame-component";
import FrameComponent2 from "../components/frame-component2";
import StatsSlider from "../components/StatsSlider";

const About = () => {
  return (
    <div className={styles.about}>
      <FooterContainer />
      <section className={styles.banner}>
        <div className={styles.loremIpsumDolor}>HOME - ABOUT</div>
        <h1 className={styles.mediumLengthHero}>About</h1>
      </section>
      <section className={styles.about1C}>
        <About1
          aboutFlex="unset"
          aboutAlignSelf="stretch"
          img="/Reception-Image.jpg"
          btnsWidth="196px"
          discoverMore="Book Appointment"
        />
      </section>
      <section className={styles.others}>
        <FrameComponent2 />

      </section>
      <section className={styles.chooseWrapper}>
        <div className={styles.choose}>
          <Image
            className={styles.chooseShapeIcon}
            loading="lazy"
            width={550}
            height={650}
            alt=""
            src="/rectangle-1@2x.png"
          />
          <div className={styles.content}>
            <div className={styles.heading}>
              <div className={styles.loremIpsumDolor1}>WHY CHOOSE US</div>
              <h1 className={styles.mediumLengthHeroContainer}>
                <p className={styles.chooseTheBest}>Choose The Best For Your</p>
                <p className={styles.chooseTheBest}>Health</p>
              </h1>
            </div>
            <div className={styles.content1}>
              <div className={styles.row}>
                <Content
                  doctor1="/doctor-1.svg"
                  mediumLengthSectionHeading="Professional Staff"
                  loremipsum="Skilled doctors and specialists offering patient-focused care."
                />
                <Content
                  doctor1="/firstaidkit-1.svg"
                  mediumLengthSectionHeading="Emergency Care"
                  loremipsum="Prompt medical support for urgent care needs, 7 days a week."
                />
              </div>
              <div className={styles.row}>
                <Content
                  doctor1="/onlineappointment-1.svg"
                  mediumLengthSectionHeading="Online Appointment"
                  loremipsum="Easy, fast, and convenient online booking from anywhere."
                />
                <Content
                  doctor1="/support-1.svg"
                  mediumLengthSectionHeading="Services"
                  loremipsum="Round-the-clock assistance for your health and wellness."
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
      <FrameComponent6 />
      <Image
        className={styles.shape211Icon}
        width={655}
        height={775}
        alt=""
        src="/shape21-1@2x.png"
      />
      <section className={styles.ownerContainerParent}>
        <OwnerContainer />
      </section>
      <FrameComponent
        placeholderImage="/placeholder-image@2x.png"
      />
      <section className={styles.faq}>
        <div className={styles.sectionTitle}>
          <div className={styles.subheading}>SUPPORT</div>
          <div className={styles.content13}>
            <h1 className={styles.heading1}>Frequently Asked Questions</h1>
          </div>
          <div className="container-fluid mt-5">
            <StaticFaqsLisiting staticFaqs={[]} />
          </div>
        </div>
      </section>
      <Footer
        maskGroup="/mask-group@2x.png"
        symbolsvg="/symbolsvg-22.svg"
        symbolsvg1="/symbolsvg-32.svg"
      />
    </div>
  );
};

export default About;
