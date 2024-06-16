import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Router, Link as RouterLink } from "react-router-dom";
import './Navbar.css';




export default function Navbar() {
  return (
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <ScrollLink
      activeClass='active'
      to='about'
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      >About</ScrollLink>
      <RouterLink to="/services">Services</RouterLink>
      <ScrollLink
      activeClass='active'
      to='contact'
      spy={true}  
      smooth={true}
      offset={-70}
      duration={500}
      >Contact</ScrollLink>
    </nav>
  )
}