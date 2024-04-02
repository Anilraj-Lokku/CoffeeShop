import React from "react";
import homeImg1 from "../../assests/home-img-1.png";
import homeImg2 from "../../assests/home-img-2.png";
import homeImg3 from "../../assests/home-img-3.png";
import homeImg4 from "../../assests/coffee3.jpg";

import "./Home.css";

const Home = () => {
 return (
  <section className="home" id="home">
   <div className="row">
    <div className="content">
     <h3>The best way to start your day!</h3>
     <a href="#book" className="btn">
      buy one now
     </a>
    </div>
    <div className="image">
     <img src={homeImg4} className="main-home-image" alt="" />
    </div>
   </div>
   <div className="image-slider">
    <img src={homeImg1} alt="" />
    <img src={homeImg2} alt="" />
    <img src={homeImg3} alt="" />
    <img src={homeImg4} alt="" />
   </div>
  </section>
 );
};

export default Home;
