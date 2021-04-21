import React from "react";
import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import "./HeroSlider.css";
import slide1 from "../../images/HeroSlider/banner3.jpg";
import slide2 from "../../images/HeroSlider/banner2.jpg";
import slide3 from "../../images/HeroSlider/banner1.jpg";
import slide4 from "../../images/HeroSlider/banner4.jpg";

SwiperCore.use([Navigation, Pagination]);

const HeroSlider = () => {
  const slideContent = [
    {
      id: 1,
      img: slide1,
      alt: "Slide1",
      heading: "Nike",
      description: "SEE HOW GOOD THEY FEEL.",
    },
    {
      id: 2,
      img: slide2,
      alt: "Slide2",
      heading: "Adidas",
      description: "FOR ALL WALKS OF LIFE.",
    },
    {
      id: 3,
      img: slide3,
      alt: "Slide3",
      heading: "Sneakers",
      description: "SEE HOW GOOD THEY FEEL.",
    },
    {
      id: 4,
      img: slide4,
      alt: "Slide4",
      heading: "Heels",
      description: "FOR ALL WALKS OF LIFE.",
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
        slidesPerView={1}
        parallax={true}
        speed={500}
        loop={true}
        style={{ justifyContent: "center", alignItems: "center" }}
        // onInit={(swiper) => console.log("Swiper Initialized", swiper)}
        // onSlideChange={(swiper) =>
        //   console.log("SLide Index change to: ", swiper.activeIndex)
        // }
        // onReachEnd={() => console.log("Swiper end reached")}
        autoplay={true}
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
              <div className="banner-info">
                <h3 className="banner-heading">{item.heading}</h3>
                <p className="banner-description">{item.description}</p>
                <ul className="top_icons">
                  <li>
                    <a href="/">
                      <FaFacebookF color="white" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <FaInstagram color="white" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <FaTwitter color="white" />
                    </a>
                  </li>
                </ul>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </React.Fragment>
  );
};

export default HeroSlider;
