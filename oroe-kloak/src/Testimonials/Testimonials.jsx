import React from 'react';
import Slider from 'react-slick';
import './Testimonials.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    id: 1,
    author: 'Nana & Emma',
    content: 'Excellent service! Highly recommend.',
    rating: 5,
    image: 'path/to/image1.jpg', // Add image paths here
  },
  {
    id: 2,
    author: 'John Smith',
    content: 'Very professional and thorough.',
    rating: 4,
    image: 'path/to/image2.jpg',
  },
  {
    id: 3,
    author: 'Jane Doe',
    content: 'Quick and efficient service.',
    rating: 4,
    image: 'path/to/image3.jpg',
  },
  {
    id: 4,
    author: 'David Brown',
    content: 'Great job!',
    rating: 4.5,
    image: 'path/to/image4.jpg',
  },
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
    autoplaySpeed: 1500,
  };

  return (
    <div className="testimonials-container">
      <h2 className="testimonial-title">What Our Customers Say</h2>
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
