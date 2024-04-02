import React from "react";
import aboutImg from "../../assests/about-img.png";
import aboutIcon1 from "../../assests/about-icon-1.png";
import aboutIcon2 from "../../assests/about-icon-2.png";
import aboutIcon3 from "../../assests/about-icon-3.png";
import homeImg4 from "../../assests/coffee3.jpg";

import "./about.css";
const About = () => {
 return (
  <section className="about" id="about">
   <h1 className="heading">
    about us <span>why choose us</span>
   </h1>

   <div className="row">
    <div className="image">
     <img src={homeImg4} alt="About Us" />
    </div>

    <div className="content">
     <h3 className="title">what's make our coffee special!</h3>
     <p>
      We source only the finest coffee beans from renowned regions known for
      their rich flavor profiles and unique characteristics. Our coffee beans
      are expertly roasted in small batches by our skilled roasters, ensuring
      optimal flavor development and consistency.We prioritize ethical sourcing
      practices, working closely with farmers and cooperatives to support
      sustainable agriculture and fair trade.
     </p>
     <a href="#" className="btn">
      read more
     </a>
     <div className="icons-container">
      <div className="icons">
       <img src={aboutIcon1} alt="Quality Coffee" />
       <h3>quality coffee</h3>
      </div>
      <div className="icons">
       <img src={aboutIcon2} alt="Our Branches" />
       <h3>our branches</h3>
      </div>
      <div className="icons">
       <img src={aboutIcon3} alt="Free Delivery" />
       <h3>free delivery</h3>
      </div>
      <div className="icons">
       <img src={homeImg4} alt="Free Delivery" />
       <a href="#book" className="btn">
        buy one now
       </a>
      </div>
     </div>
    </div>
   </div>
  </section>
 );
};

export default About;
