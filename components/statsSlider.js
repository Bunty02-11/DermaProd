import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import Component1 from './component1';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './StatsSlider.module.css';

const StatsSlider = ({ stats }) => {
  return (
    <div className={styles.statsSliderWrapper}>
      {/* Desktop View - Regular flex layout */}
      <div className={styles.desktopStats}>
        {stats.map((stat, index) => (
          <Component1 
            key={index}
            perfumes={stat.perfumes} 
            perfumes1={stat.perfumes1} 
          />
        ))}
      </div>

      {/* Mobile View - Swiper */}
      <div className={styles.mobileStats}>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={15}
          slidesPerView={1.5}
          centeredSlides={false}
          loop={true}
          loopFillGroupWithBlank={false}
          // pagination={{
          //   clickable: true,
          //   dynamicBullets: true,
          // }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={800}
          className={styles.statsSwiper}
        >
          {stats.map((stat, index) => (
            <SwiperSlide key={index}>
              <Component1 
                perfumes={stat.perfumes} 
                perfumes1={stat.perfumes1} 
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default StatsSlider; 