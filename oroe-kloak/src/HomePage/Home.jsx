import React from 'react';
import Contact from '../Contacts/Contact';
import { Element } from 'react-scroll';
import './Home.css';
// import ServicePreview from '../ServicePreview/ServicePreview';
import AboutPreview from '../AboutPreview/AboutPreview';
import Testimonials from '../Testimonials/Testimonials';
import BlogPreview from '../BlogPreview/BlogPreview';
import HomeTitle from './HomeTitle';

export default function Home() {
  return (
    <div className="home-container">
      <div>
        <HomeTitle />
      </div>
      {/* <h1 className="home-title">Aut. Kloakmester Niels Erland Nielsen</h1> */}
      <div>
        <div className="about-preview">
          <AboutPreview />
        </div>

        <Testimonials />
        <BlogPreview />

        <Element name ="contact">
          <Contact />
        </Element>
      </div>
    </div>
  );
}
