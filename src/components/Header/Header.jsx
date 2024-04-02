// import React, { useState } from "react";
// import { FaBars, FaMugHot, FaTimes } from "react-icons/fa";
// import "./Header.css";

// const Header = () => {
//  const [isMenuOpen, setIsMenuOpen] = useState(false);

//  const toggleMenu = () => {
//   setIsMenuOpen(!isMenuOpen); // Toggle the isMenuOpen state
//  };

//  return (
//   <header className="header">
//    <div id="menu-btn" onClick={toggleMenu}>
//     {isMenuOpen ? <FaTimes /> : <FaBars />}
//    </div>

//    <a href="#" className="logo">
//     coffee <FaMugHot />
//    </a>

//    <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
//     <a href="#home" onClick={toggleMenu}>
//      home
//     </a>
//     <a href="#about" onClick={toggleMenu}>
//      about
//     </a>
//     <a href="#menu" onClick={toggleMenu}>
//      menu
//     </a>
//     <a href="#review" onClick={toggleMenu}>
//      review
//     </a>
//     <a href="#book" onClick={toggleMenu}>
//      book
//     </a>
//    </nav>

//    <a href="#book" className="btn">
//     book a table
//    </a>
//   </header>
//  );
// };

// export default Header;

import React, { useState } from "react";
import { FaBars, FaMugHot, FaTimes } from "react-icons/fa";
import "./Header.css";

const Header = () => {
 const [isMenuOpen, setIsMenuOpen] = useState(false);

 const toggleMenu = () => {
  setIsMenuOpen(!isMenuOpen);
 };

 // Function to handle the click event on the menu button
 const handleMenuClick = () => {
  setIsMenuOpen(!isMenuOpen); // Toggle the isMenuOpen state
 };

 // Function to handle the scroll event and close the menu
 const handleScroll = () => {
  setIsMenuOpen(false); // Close the menu when scrolling
 };

 // Attach event listeners for menu button click and window scroll
 // These listeners will be automatically removed when the component is unmounted
 React.useEffect(() => {
  window.addEventListener("scroll", handleScroll); // Listen for scroll events
  return () => {
   window.removeEventListener("scroll", handleScroll); // Remove the scroll event listener when component unmounts
  };
 }, []); // Empty dependency array ensures this effect runs only once on component mount

 return (
  <header className="header">
   <div id="menu-btn" onClick={handleMenuClick}>
    {isMenuOpen ? <FaTimes /> : <FaBars />}
   </div>

   <a href="#" className="logo">
    coffee <FaMugHot />
   </a>

   <nav className={`navbar ${isMenuOpen ? "active" : ""}`}>
    <a href="#home" onClick={toggleMenu}>
     home
    </a>
    <a href="#about" onClick={toggleMenu}>
     about
    </a>
    <a href="#menu" onClick={toggleMenu}>
     menu
    </a>
    <a href="#review" onClick={toggleMenu}>
     review
    </a>
    <a href="#book" onClick={toggleMenu}>
     book
    </a>
   </nav>

   <a href="#book" className="btn">
    book a table
   </a>
  </header>
 );
};

export default Header;
