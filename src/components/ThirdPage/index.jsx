import styles from './Three.module.css';
import quote from '../../assets/qw.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';

export const ThirdPage = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.ds}>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            navigation
            pagination={{ clickable: false }}
            scrollbar={{ draggable: false }}>
            <SwiperSlide>
              <div className={styles.box}>
                <img className={styles.quote} src={quote} alt='' />
                <p className={styles.title}>Goede service, lekker eten, toffe ambiance</p>
                <p className={styles.text}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                  tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                  vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.
                </p>
                <p className={styles.author}>ALAIN HEYNDRICKX</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.box}>
                <img className={styles.quote} src={quote} alt='' />
                <p className={styles.title}>Goede service, lekker eten, toffe ambiance</p>
                <p className={styles.text}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                  tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                  vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.
                </p>
                <p className={styles.author}>ALAIN HEYNDRICKX</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.box}>
                <img className={styles.quote} src={quote} alt='' />
                <p className={styles.title}>Goede service, lekker eten, toffe ambiance</p>
                <p className={styles.text}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                  tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                  vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.
                </p>
                <p className={styles.author}>ALAIN HEYNDRICKX</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.box}>
                <img className={styles.quote} src={quote} alt='' />
                <p className={styles.title}>Goede service, lekker eten, toffe ambiance</p>
                <p className={styles.text}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                  tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                  vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.
                </p>
                <p className={styles.author}>ALAIN HEYNDRICKX</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};
