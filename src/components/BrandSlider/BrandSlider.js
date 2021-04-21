import React from "react";
import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import "./BrandSlider.css";
import slide1 from "../../images/CompanyLogo/brand1.png";
import slide2 from "../../images/CompanyLogo/brand2.png";
import slide3 from "../../images/CompanyLogo/brand3.png";
import slide4 from "../../images/CompanyLogo/brand4.png";
import slide5 from "../../images/CompanyLogo/brand5.png";

SwiperCore.use([Navigation, Pagination]);

const BrandSlider = () => {
  const slideContent = [
    {
      id: 1,
      img: slide1,
    },
    {
      id: 2,
      img: slide2,
    },
    {
      id: 3,
      img: slide3,
    },
    {
      id: 4,
      img: slide4,
    },
    {
      id: 5,
      img: slide5,
    },
  ];

  return (
    <React.Fragment>
      <Swiper
        height={600}
        effect="fade"
        id="main"
        tag="section"
        wrapperTag="ul"
        navigation
        spaceBetween={0}
        slidesPerView={5}
        parallax={true}
        speed={500}
        loop={true}
        style={{ justifyContent: "center", alignItems: "center" }}
        autoplay="true"
      >
        {slideContent.map((item) => {
          return (
            <SwiperSlide
              key={item.id}
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <img
                src={item.img}
                alt={item.alt}
                style={{ listStyle: "none" }}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </React.Fragment>
  );
};

export default BrandSlider;
