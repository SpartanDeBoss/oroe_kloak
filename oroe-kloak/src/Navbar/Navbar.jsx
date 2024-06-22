import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import './Navbar.css';



export default function Navbar() {
const navigate = useNavigate();

const handleContactClick = () => {
  navigate('/');
  setTimeout(() => {
    scroll.scrollTo('contact', {
      duration: 500,
      delay: 100,
      smooth: 'easeInOutQuad',
      offset: -70,
    });
  } , 100);
}


  return (
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/services">Services</RouterLink>
      <button onClick={handleContactClick}>Contact</button>
    </nav>
  )
}
