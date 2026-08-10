import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import img1 from '../../assets/images/hero/1.jpg'
import img2 from '../../assets/images/hero/2.jpg'
import img3 from '../../assets/images/hero/3.jpg'

const banners = [
  img1,
  img2,
  img3
];


const HeroSlider = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
    >
      {banners.map((banner, index) => (
        <SwiperSlide key={index}>
          <div className="w-full aspect-square overflow-hidden mb-10">
            <img
              src={banner}
              alt={`Banner ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;