import React, { useState } from "react";
import { menu, menuList } from "../Data";
import "../assets/css/menuItems.css"; // Import CSS file for Menu component
import chickenBiryaniImg from "../img/biry2.jpg"; // Add your image path

const Menu = () => {
  const [activeTab, setActiveTab] = useState("Starter");

  const handleTabClick = (category) => {
    setActiveTab(category);
  };

  const filteredMenu = menuList.filter(item => item.category === activeTab);

  return (
    <section className="menu" id="menu">
      <h1 className="heading">
        our <span>menu</span>
      </h1>

      <div className="tabs">
        <button className={`${activeTab === "Starter" ? "active" : ""} menuBtn`} onClick={() => handleTabClick("Starter")}>Starter's</button>
        <button className={`${activeTab === "Gulbarga specials" ? "active" : ""} menuBtn`} onClick={() => handleTabClick("Gulbarga specials")}>Gulbarga spe.</button>
        <button className={`${activeTab === "Chicken Gravy's" ? "active" : ""} menuBtn`} onClick={() => handleTabClick("Chicken Gravy's")}>Chicken Gravy's</button>
        <button className={`${activeTab === "Beef Gravy's" ? "active" : ""} menuBtn`} onClick={() => handleTabClick("Beef Gravy's")}>Beef Gravy's</button>
        <button className={`${activeTab === "Veg Gravy's" ? "active" : ""} menuBtn`} onClick={() => handleTabClick("Veg Gravy's")}>Veg Gravy's</button>
        <button className={`${activeTab === "Egg Gravy's" ? "active" : ""} menuBtn`} onClick={() => handleTabClick("Egg Gravy's")}>Egg Gravy's</button>
        <button className={`${activeTab === "Roti" ? "active" : ""} menuBtn`} onClick={() => handleTabClick("Roti")}>Roti</button>
        <button className={`${activeTab === "Rice" ? "active" : ""} menuBtn`} onClick={() => handleTabClick("Rice")}>Rice</button>
        <button className={`${activeTab === "Special's" ? "active" : ""} menuBtn`} onClick={() => handleTabClick("Special's")}>Special</button>
        <button className={`${activeTab === "Sweet" ? "active" : ""} menuBtn`} onClick={() => handleTabClick("Sweet")}>Sweets</button>
      </div>

      <div className="menu-container">
        <div className="menu-left">
          {filteredMenu.map((item, index) => (
            <div className="menu-item" key={index}>
              <span className="menu-item-name">{item.name}</span>
              <span className="menu-item-price">{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
