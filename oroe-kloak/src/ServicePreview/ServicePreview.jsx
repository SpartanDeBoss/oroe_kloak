import React from 'react';
import './ServicePreview.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import '../images/IMG-16.jpg';

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '50%',
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '50%',
      }}
      onClick={onClick}
    />
  );
}

function importAllImages(r) {
  return r.keys().map(r);
}

const images = importAllImages(require.context('../images', false, /\.(jpg)$/));

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

  return (
    <div className="service-preview-container">
      <h1 className="service-preview-title">Vores ydelser</h1>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Service Images ${index + 1}`}
              className="service-preview-images"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
