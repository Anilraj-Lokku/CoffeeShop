import React from "react";
import { FaArrowRight, FaPhone, FaEnvelope } from "react-icons/fa";
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
import "./Footer.css";

function Footer() {
 return (
  <section className="footer">
   <div className="box-container">
    <div className="box">
     <h3>our branches</h3>
     <a href="#">
      <FaArrowRight /> india
     </a>
     <a href="#">
      <FaArrowRight /> Hyderabad
     </a>
     <a href="#">
      <FaArrowRight /> Benguluru
     </a>
     <a href="#">
      <FaArrowRight /> Mumbai
     </a>
     <a href="#">
      <FaArrowRight /> Pune
     </a>
    </div>

    <div className="box">
     <h3>quick links</h3>
     <a href="#home">
      <FaArrowRight /> home
     </a>
     <a href="#about">
      <FaArrowRight /> about
     </a>
     <a href="#menu">
      <FaArrowRight /> menu
     </a>
     <a href="#review">
      <FaArrowRight /> review
     </a>
     <a href="#book">
      <FaArrowRight /> book
     </a>
    </div>

    <div className="box">
     <h3>contact info</h3>
     <a href="#">
      <FaPhone /> +995-986-0597
     </a>
     <a href="#">
      <FaPhone /> +9959-475665-4475
     </a>
     <a href="#">
      <FaEnvelope /> anilrajlokku1810@gmail.com
     </a>
     <a href="#">
      <FaEnvelope /> Anil
     </a>
    </div>

    <div className="box">
     <h3>contact info</h3>
     <a href="#">
      <FiFacebook /> facebook
     </a>
     <a href="#">
      <FiTwitter /> twitter
     </a>
     <a href="#">
      <FiInstagram /> instagram
     </a>
     <a href="#">
      <FiLinkedin /> linkedin
     </a>
     <a href="#">
      <FiTwitter /> twitter
     </a>
    </div>
   </div>
   <div className="credit">
    created by <span>Anil</span>
   </div>
  </section>
 );
}

export default Footer;
