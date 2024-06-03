import React from "react";
import { Link } from "react-scroll";
import './Navbar.css';




export default function Navbar() {
  return (
    <nav>
      <Link 
      activeClass='active'
      to='/'
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      >Home</Link>
      <Link
      activeClass='active'
      to='about'
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      >About</Link>
      <Link
      activeClass='active'
      to='services'
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      >Service</Link>
      <Link
      activeClass='active'
      to='contact'
      spy={true}  
      smooth={true}
      offset={-70}
      duration={500}
      >Contact</Link>
    </nav>
  )
}