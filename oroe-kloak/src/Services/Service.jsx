import React from 'react';
import Slider from 'react-slick';
import Group91 from '../images/Group-91.png';
import './Service.css';

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
        <h1 className="service-info">Our Services</h1>
        <Slider {...settings}>
          <div>
            <img src={Group91} alt="Group-91" />
          </div>
          <div>
            {/* <img
            src={require('../public/images/img2.png').default}
            alt="Service 2"
          /> */}
          </div>
          <div>
            {/* <img
            src={require('../public/images/img3.png').default}
            alt="Service 3"
          /> */}
          </div>
        </Slider>
      </div>
    </div>
  );
}
