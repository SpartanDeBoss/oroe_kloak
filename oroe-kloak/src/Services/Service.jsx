import React from 'react';
import Slider from 'react-slick';
import IMG7 from '../images/IMG-7.jpg';
import IMG8 from '../images/IMG-8.jpg';
import './Service.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Service() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="service-container" id="ourService">
      <div className="service-info-container">
        <h1 className="service-title">Our Services</h1>
        <Slider {...settings}>
          <div className="service-image">
            <img src={IMG7} alt="IMG-7" />
            <div></div>
          </div>
          {/* <div>
            <img src={Niels} alt="Niels-1" />
          </div> */}
          <div>
            <img src={IMG8} alt="IMG-8." />
          </div>
        </Slider>
      </div>
    </div>
  );
}
