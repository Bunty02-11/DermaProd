import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import ExploreItems from "./explore-items";
import PropTypes from "prop-types";
import styles from "./frame-component2.module.css";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const FrameComponent2 = ({ className = "" }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const exploreItemsData = [
    {
      explore: "/explore.svg",
      perfumes: "Qualified Doctor",
      Doctor: "Our team of qualified doctors offers expert aesthetic services, ensuring safe and effective treatments tailored to your needs"
    },
    {
      explore: "/explore-2.svg",
      perfumes: "Certified Products",
      Doctor: "We use only certified, high-quality products to guarantee exceptional results in all our treatments, from skincare to weight loss services."
    },
    {
      explore: "/explore-1.svg",
      perfumes: "Modern Equipment",
      Doctor: "Our cosmetic clinic in Dubai has the latest state-of-the-art technology to provide the most advanced beauty and wellness treatments."
    },
    {
      explore: "/explore-3.svg",
      perfumes: "Peoples Place",
      Doctor: "We create a welcoming atmosphere, making it the perfect beauty clinic near me for all your skincare and wellness needs."
    }
  ];

  return (
    <section className={[styles.othersWrapper, className].join(" ")}>
      <div className={styles.others}>
        {isMobile ? (
          <div className={styles.mobileSlider}>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1.1}
              // pagination={{
              //   clickable: true,
              //   bulletClass: `swiper-pagination-bullet ${styles.customBullet}`,
              //   bulletActiveClass: `swiper-pagination-bullet-active ${styles.customBulletActive}`
              // }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              className={styles.swiperContainer}
            >
              {exploreItemsData.map((item, index) => (
                <SwiperSlide key={index}>
                  <ExploreItems
                    explore={item.explore}
                    perfumes={item.perfumes}
                    Doctor={item.Doctor}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          <div className={styles.slider}>
            {exploreItemsData.map((item, index) => (
              <ExploreItems
                key={index}
                explore={item.explore}
                perfumes={item.perfumes}
                Doctor={item.Doctor}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
