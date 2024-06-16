import React from "react";
import "./ServicePreview.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import IMG1 from "../images/IMG-1.jpg";
import IMG2 from "../images/IMG-2.jpg";
import IMG3 from "../images/IMG-3.jpg";
import IMG4 from "../images/IMG-4.jpg";
import IMG5 from "../images/IMG-5.jpg";
import IMG6 from "../images/IMG-6.jpg";
import IMG7 from "../images/IMG-7.jpg";
import IMG8 from "../images/IMG-8.jpg";
import IMG9 from "../images/IMG-9.jpg";
import IMG10 from "../images/IMG-10.jpg";
import IMG11 from "../images/IMG-11.jpg";
import IMG12 from "../images/IMG-12.jpg";
import IMG13 from "../images/IMG-13.jpg";
import IMG14 from "../images/IMG-14.jpg";
import IMG15 from "../images/IMG-15.jpg";
import Slider from "react-slick";





function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}


export default function ServicePreview() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

const images = [IMG1, IMG2, IMG3, IMG4, IMG5, IMG6, IMG7, IMG8, IMG9, IMG10, IMG11, IMG12, IMG13, IMG14, IMG15];

  return (
    <div>
      <h1>Our Service</h1>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`IMG-${index + 1}`} className="service-preview-images" />
          </div>))}
      </Slider>
      
    </div>
  );
}