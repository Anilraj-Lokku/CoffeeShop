import React from "react";
import "./Menu.css"; // Make sure to import Menu.css for styling
import menu1 from "../../assests/menu-1.png";
import menu2 from "../../assests/menu-2.png";
import menu3 from "../../assests/menu-3.png";
import menu4 from "../../assests/menu-4.png";

const Menu = () => {
 return (
  <section className="menu" id="menu">
   <h1 className="heading">
    our menu <span>popular menu</span>
   </h1>

   <div className="box-container">
    <a href="#" className="box">
     <img src={menu1} alt="" />
     <div className="content">
      <h3>Espresso</h3>
      <p>
       A strong and rich coffee brewed by forcing hot water through finely
       ground coffee beans. Perfect for those who enjoy a bold flavor.
      </p>
      <span>₹80</span>
     </div>
    </a>

    <a href="#" className="box">
     <img src={menu2} alt="" />
     <div className="content">
      <h3>Latte</h3>
      <p>
       A creamy and smooth coffee made with espresso and steamed milk. Ideal for
       those who prefer a milder taste with a hint of sweetness.
      </p>
      <span>₹100</span>
     </div>
    </a>

    <a href="#" className="box">
     <img src={menu3} alt="" />
     <div className="content">
      <h3>Cappuccino</h3>
      <p>
       A classic Italian coffee made with equal parts espresso, steamed milk,
       and milk foam. Enjoyed by those who appreciate a balance of bold espresso
       and velvety milk.
      </p>
      <span>₹300</span>
     </div>
    </a>
    <a href="#" className="box">
     <img src={menu4} alt="" />
     <div className="content">
      <h3>Mocha</h3>
      <p>
       A delightful combination of espresso, steamed milk, chocolate syrup, and
       whipped cream. Perfect for chocolate lovers looking for a decadent treat.
      </p>
      <span>₹500</span>
     </div>
    </a>
    {/* Repeat the above structure for each type of coffee */}
   </div>
  </section>
 );
};

export default Menu;
