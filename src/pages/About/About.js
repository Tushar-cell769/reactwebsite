import React from "react";
import HeadingBanner from "../../components/HeadingBanner/HeadingBanner";
import bg from "../../images/HeroSlider/slide_2.jpg";

import "./About.css";
import AboutUsInfo from "./AboutUsInfo/AboutUsInfo";
import ServiceSection from "./ServiceSection/ServiceSection";
import TeamSection from "./TeamSection/TeamSection";

const About = () => {
  return (
    <div>
      <HeadingBanner title="About" image={bg} />
      <AboutUsInfo />
      <ServiceSection />
      <TeamSection />
    </div>
  );
};

export default About;
