import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import s from "./photos.module.css";
import one from "../../images/ten/1.png";
import two from "../../images/ten/2.png";
import three from "../../images/ten/3.png";
import four from "../../images/ten/4.png";
import five from "../../images/ten/5.png";
import six from "../../images/ten/6.png";
import seven from "../../images/ten/7.png";
import eight from "../../images/ten/8.png";
import nine from "../../images/ten/9.png";
import ten from "../../images/logokvitka-removebg-preview.png";

const Photos = () => {
  return (
    <section className={s.wrapper}>
      <div className={s.container}>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          className={s.swiper}
        >
          <SwiperSlide>
            <img src={one} alt="Random Alt 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={two} alt="Random Alt 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={three} alt="Random Alt 3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={four} alt="Random Alt 4" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={five} alt="Random Alt 5" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={six} alt="Random Alt 6" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={seven} alt="Random Alt 7" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={eight} alt="Random Alt 8" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={nine} alt="Random Alt 9" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ten} alt="Random Alt 10" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Photos;
