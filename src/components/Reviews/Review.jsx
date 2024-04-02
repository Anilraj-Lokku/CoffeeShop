import React, { useState, useEffect } from "react";
import { FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";
import pic1 from "../../assests/pic-1.png";
import pic2 from "../../assests/pic-2.png";
import pic3 from "../../assests/pic-3.png";
import pic4 from "../../assests/pic-4.png";
import "./Reviews.css";

const Review = () => {
 const reviews = [
  {
   quote:
    "As a coffee aficionado, I'm always on the lookout for the perfect cup. I think I've found it here! The baristas really know their craft, and you can taste the difference in every sip. Five stars!",
   author: "Anilraj Lokku",
   satisfiedClient: "satisfied client",
   image: pic1,
  },
  {
   quote:
    "Love the vibe of this place. Whether you're meeting friends for a chat or settling in for some solo work, it's the perfect spot. Plus, the latte art is always on point!",
   author: "Ganesh Dasu",
   satisfiedClient: "satisfied client",
   image: pic2,
  },
  {
   quote:
    "Fantastic atmosphere and amazing coffee! The staff is always friendly and welcoming. It's my go-to spot for a morning pick-me-up or a cozy place to work.",
   author: "Dhoni",
   satisfiedClient: "satisfied client",
   image: pic3,
  },
  {
   quote:
    "As a coffee aficionado, I'm always on the lookout for the perfect cup. I think I've found it here! The baristas really know their craft, and you can taste the difference in every sip. Five stars!",
   author: "Praveenkumar Suravarapu",
   satisfiedClient: "satisfied client",
   image: pic4,
  },
 ];

 const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

 useEffect(() => {
  const interval = setInterval(() => {
   setCurrentReviewIndex((prevIndex) =>
    prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
   );
  }, 10000); // 10 seconds

  return () => clearInterval(interval);
 }, []);

 const { quote, author, satisfiedClient, image } = reviews[currentReviewIndex];

 return (
  <section className="review" id="review">
   <h1 className="heading">
    reviews <span>what people say</span>
   </h1>

   <div className="review-slider">
    <div className="box">
     <FaQuoteLeft className="quote-icon" />
     <FaQuoteRight className="quote-icon" />
     <img src={image} alt="" />
     <div className="stars">
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
     </div>
     <p>{quote}</p>
     <h3>{author}</h3>
     <span>{satisfiedClient}</span>
    </div>
   </div>
  </section>
 );
};

export default Review;
