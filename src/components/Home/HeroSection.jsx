import React from "react";
import iphone from "../../assets/iphone-14-pro.webp";
import "./HeroSection.css";

const HeroSection = ({ title, subtitle, link, image }) => {
  return (
    <section className="hero_section">
      <div className="align_center">
        <h2 className="hero_title">{title}</h2>
        <p className="hero_subtitle">{subtitle}</p>
        <a href={link} className="hero_link">
          바로구매
        </a>
      </div>

      <div className="align_center">
        <img src={image} alt="" className="hero_image" />
      </div>
    </section>
  );
};

export default HeroSection;
