import React from 'react';
import { Carousel } from 'react-bootstrap';
import styles from './banner.module.css'; // Ensure to import your CSS module

const HeroCarousel = () => {
  return (
    <Carousel controls={false} indicators={false} interval={5000} pause={false}>
      {/* First Slide */}
      <Carousel.Item>
        <div
          className={styles.image}
          style={{ backgroundImage: 'url(/banner_1.jpg)' }} // First Slide Background
        >
          <div className={styles.content}>
            <div className={styles.text1}>
              <div className={styles.loremIpsumDolor} style={{ opacity: '0.8', fontSize: '12px' }}>
                DermaTech Polyclinic
              </div>
              <h1 className={styles.mediumLengthHero}>
                {`Get Advanced Skin Care Treatments in Dubai`}
              </h1>
            </div>
            <div className={styles.filter}>
              <div className={styles.loremIpsumDolor1}>
                Discover cutting-edge skincare solutions at Derma Tech personalized treatments to rejuvenate,
                protect, and enhance your skin for a radiant, youthful glow.
              </div>
            </div>
            <div className={styles.btns}>
              <a href="/contact" className={`${styles.btnBook} ${styles.noUnderline}`}>
                <div className={styles.bookAppointment} style={{ color: 'white' }}>
                  Book Appointment
                </div>
              </a>
            </div>
          </div>
        </div>
      </Carousel.Item>

      {/* Second Slide */}
      <Carousel.Item>
        <div
          className={styles.image}
          style={{ backgroundImage: 'url(/banner_2.jpg)' }} // Second Slide Background
        >
          <div className={styles.content}>
            <div className={styles.text1}>
              <div className={styles.loremIpsumDolor} style={{ opacity: '0.8', fontSize: '12px' }}>
                FACIALS
              </div>
              <h1 className={styles.mediumLengthHero}>
                {`Transformative Skin Treatments in Dubai`}
              </h1>
            </div>
            <div className={styles.filter}>
              <div className={styles.loremIpsumDolor1}>
                Enhance your skin with advanced, personalized treatments at Derma Tech. Address acne, pigmentation,
                and aging with expert care in a luxurious setting.
              </div>
            </div>
            <div className={styles.btns}>
              <a href="/contact" className={`${styles.btnBook} ${styles.noUnderline}`}>
                <div className={styles.bookAppointment} style={{ color: 'white' }}>Book Appointment</div>
              </a>
            </div>
          </div>
        </div>
      </Carousel.Item>

      {/* Third Slide */}
      <Carousel.Item>
        <div
          className={styles.image}
          style={{ backgroundImage: 'url(/banner_3.jpg)' }} // Third Slide Background
        >
          <div className={styles.content}>
            <div className={styles.text1}>
              <div className={styles.loremIpsumDolor} style={{ opacity: '0.8', fontSize: '12px' }}>
                WEIGHT LOSS
              </div>
              <h1 className={styles.mediumLengthHero}>
                {`Effective Weight Loss & Fat Freezing Solutions`}
              </h1>
            </div>
            <div className={styles.filter}>
              <div className={styles.loremIpsumDolor1}>
                Achieve a sculpted look with Derma Tech's Fat Freezing in Dubai and experience advanced,
                personalized body contouring treatments for effective fat reduction.
              </div>
            </div>
            <div className={styles.btns}>
              <a href="/contact" className={`${styles.btnBook} ${styles.noUnderline}`}>
                <div className={styles.bookAppointment} style={{ color: 'white' }}>Book Appointment</div>
              </a>
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default HeroCarousel;
