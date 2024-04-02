import React, { useRef } from "react";
import "./Bookings.css";
import emailjs from "emailjs-com";

const Booking = () => {
 const form = useRef();

 const sendEmail = (e) => {
  e.preventDefault();

  emailjs
   .sendForm(
    "service_qbc580c",
    "template_jc5koyd",
    form.current,
    "XnmBqK-AloVHWX1tN"
   )
   .then(
    () => {
     console.log("SUCCESS!");
    },
    (error) => {
     console.log("FAILED...", error.text);
    }
   );
  e.target.reset();
 };
 return (
  <section className="book" id="book">
   <h1 className="heading">
    booking <span>reserve a table</span>
   </h1>

   <form>
    <input type="text" name="name" placeholder="Name" className="box" />
    <input type="email" name="email" placeholder="Email" className="box" />
    <input type="number" name="number" placeholder="Number" className="box" />
    <textarea
     placeholder="Message"
     className="box"
     id=""
     cols="30"
     rows="10"
     name="message"
    ></textarea>
    <input
     type="submit"
     value="send message"
     className="btn"
     onSubmit={sendEmail}
    />
   </form>
  </section>
 );
};

export default Booking;
