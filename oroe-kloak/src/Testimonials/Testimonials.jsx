import React from 'react';
import Slider from 'react-slick';
import './Testimonials.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image17 from '../images/IMG-17.jpeg';
import image18 from '../images/zuzanne.jpg';
import image19 from '../images/Grethe.jpg';


const testimonials = [
  {
    id: 1,
    author: 'Nanna & Emma',
    content: 'Excellent service! Highly recommend.',
    rating: 5,
    image: image17, // Add image paths here
  },

  // {
  //   id: 2,
  //   author: 'John Smith',
  //   content: 'Very professional and thorough.',
  //   rating: 4,
  //   image: '../images/IMG-17.jpeg',
  // },
  {
    id: 3,
    author: 'Hardy & Grethe',
    content: 'Quick and efficient service.',
    rating: 4,
    image: image19,
  },
  
  {
    id: 4,
    author: 'Zuzanne',
    content: 'Great job!',
    rating: 4.5,
    image: image18,
  },
  {
    id: 5,
    author: 'John Smith',
    content: 'Very professional and thorough.',
    rating: 4,
    // image: image20,
  }
];

function Testimonials() {
  const renderStars = (rating) => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={i < rating ? 'star filled' : 'star'}>
          &#9733; {/* Star character */}
        </span>
      );
    }
    return stars;
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="testimonials-container">
      <h2 className="testimonial-title">Hvad vores kunder siger</h2>
      <Slider {...settings} className="testimonials-slider">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial card">
            <img src={testimonial.image} alt={testimonial.author} />
            <div className="testimonial-content">
              <p>{testimonial.content}</p>
              <div className="rating">{renderStars(testimonial.rating)}</div>
              <p className="author">- {testimonial.author}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Testimonials;
