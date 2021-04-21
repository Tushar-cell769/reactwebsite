import React from "react";

import HeroSlider from "../../components/HeroSlider/HeroSlider";
import BrandSlider from "../../components/BrandSlider/BrandSlider";
import SaleTimer from "../../components/SaleTimer/SaleTimer";
import HomeContainer from "./HomeContainer/HomeContainer";
import NewArrivals from "../Home/NewArrivals/NewArrivals";
import SpecialOffer from "./SpecialOffer/SpecialOffer";
import Newsletter from "./Newsletter/Newsletter";

import NikeBanner from "../../images/Banners/home-nike-banner.jpg";

import "./Home.css";
import HomeBanner from "./HomeBanner/HomeBanner";

const Home = () => {
  return (
    <div>
      {/* ********** Slider ********** */}
      {/* <HeroSlider /> */}
      <HomeBanner />
      <HomeContainer />
      {/* <SaleTimer /> */}
      {/* <NewArrivals />
      <div className="brandCarousel">
        <BrandSlider />
      </div> */}
      <div className="nike-banner">
        <div className="banner">
          <img src={NikeBanner} alt="Nike Banner" className="nike" />
          <div className="nike-info">
            <h2>
              Nike Announce The
              <br />
              Free FlyKnit
            </h2>
            <h5>Running Sneaker</h5>
          </div>
        </div>
      </div>
      <SpecialOffer />
      <Newsletter />
    </div>
  );
};

export default Home;
