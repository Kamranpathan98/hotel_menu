import React, { useState } from "react";
import { menu } from "../Data";
import "../assets/css/menuItems.css"; // Import CSS file for Menu component
import chickenBiryaniImg from "../img/biry2.jpg"; // Add your image path

const Menu = () => {
  const [activeTab, setActiveTab] = useState("all");

  const handleTabClick = (category) => {
    setActiveTab(category);
  };

  const filteredMenu = activeTab === "all" ? menu : menu.filter(item => item.category === activeTab);

  return (
    <section className="menu" id="menu">
      <h1 className="heading">
        our <span>menu</span>
      </h1>

      <div className="tabs">
        <button className={`${activeTab === "all" ? "active" : ""} menuBtn`} onClick={() => handleTabClick("all")}>All</button>
        <button className={`${activeTab === "breakfast" ? "active" : ""} menuBtn`} onClick={() => handleTabClick("breakfast")}>Breakfast</button>
        <button className={`${activeTab === "lunch" ? "active" : ""} menuBtn`} onClick={() => handleTabClick("lunch")}>Lunch</button>
        <button className={`${activeTab === "dinner" ? "active" : ""} menuBtn`} onClick={() => handleTabClick("dinner")}>Dinner</button>
      </div>

      <div className="menu-container">
        <div className="menu-left">
          {filteredMenu.map((item, index) => (
            <div className="menu-item" key={index}>
              <span className="menu-item-name">{item.name}</span>
              <span className="menu-item-price">${item.price}</span>
            </div>
          ))}
        </div>

        {/* <div className="menu-right">
          <img className="menu-image" src={chickenBiryaniImg} alt="Chicken Biryani" />
        </div> */}
      </div>
    </section>
  );
};

export default Menu;
