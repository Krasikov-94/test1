import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import img2 from '../../assets/q2.png';
import styles from './Sending.module.css';
import arrowDown from '../../assets/arrow-down.png';
import arrowUp from '../../assets/arrow-up.png';
// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Sending = () => {
  const swiperRef = useRef();

  return (
    <div>
      <div className={styles.wrSwiper}>
        <div className={styles.topSwiper}>
          <div className={styles.top}>
            <div className={styles.title}>
              <p>Sfeerfoto's</p>
              <p>
                De beste manier om de sfeer te ervaren is eens langskomen.
                <br /> In tussentijd hebben we hier alvast wat foto’s voor je klaar.
              </p>
            </div>
            <div>
              <button onClick={() => swiperRef.current?.slidePrev()} className={styles.btn1}>
                <img src={arrowUp} alt='' />
              </button>
              <button onClick={() => swiperRef.current?.slideNext()} className={styles.btn1}>
                <img src={arrowDown} alt='' />
              </button>
            </div>
          </div>

          <div className={styles.sw}>
            <Swiper
              loop={true}
              //   spaceBetween={300}
              slidesPerGroup={1}
              slidesPerGroupAuto='auto'
              slidesPerView='auto'
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              className='mySwiper'>
              <SwiperSlide>
                <img className={styles.lp} src={img2} alt='' />
              </SwiperSlide>
              <SwiperSlide>
                <img className={styles.lp} src={img2} alt='' />
              </SwiperSlide>
              <SwiperSlide>
                <img className={styles.lp} src={img2} alt='' />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};
