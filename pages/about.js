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
        <div className={styles.slider}>
          <ExploreItems
            explore="/explore1.svg"
            perfumes="Qualified Doctors"
            Doctor="Our team of qualified doctors offers expert aesthetic services, ensuring safe and effective treatments tailored to your needs."
          />
          <ExploreItems
            explore="/explore-11.svg"
            perfumes="Certified Products"
            Doctor="We use only certified, high-quality products to guarantee exceptional results in all our treatments, from skincare to weight loss services."
          />
          <ExploreItems
            explore="/explore-21.svg"
            perfumes="Modern Equipment"
            Doctor="Our cosmetic clinic in Dubai has the latest state-of-the-art technology to provide the most advanced beauty and wellness treatments."
          />
          <ExploreItems
            explore="/explore-31.svg"
            perfumes="Peoples Place"
            Doctor="We create a welcoming atmosphere, making it the perfect beauty clinic near me for all your skincare and wellness needs."
          />
        </div>
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
                  loremipsum="Our team of experienced professionals is dedicated to providing you with top-tier care and effective results."
                />
                <Content
                  doctor1="/firstaidkit-1.svg"
                  mediumLengthSectionHeading="Emergency Care"
                  loremipsum="We can handle urgent aesthetic or skin care needs, ensuring quick and efficient care."
                />
              </div>
              <div className={styles.row}>
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
          <div className={styles.slider1}>
            <Component1 perfumes="75+" perfumes1="Expert Doctors" />
            <Component1 perfumes="7k" perfumes1="Happy Patients" />
            <Component1 perfumes="850" perfumes1="Modern Amenities" />
            <Component1 perfumes="15" perfumes1="Awards Won" />
          </div>
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
      <Footer
        maskGroup="/mask-group@2x.png"
        symbolsvg="/symbolsvg-22.svg"
        symbolsvg1="/symbolsvg-32.svg"
      />
    </div>
  );
};

export default About;
