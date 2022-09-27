import React, { useState } from "react";
import MenuPoPupPage from "./MenuPoPupPage";
import "./MenuPoPupPage.css";
const MenuPoPupPageContent = ({ image, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <input
        type="button"
        className="button1"
        value="Restaurant Information"
        onClick={togglePopup}
      />

      {isOpen && (
        <MenuPoPupPage
          content={
            <>
              <img src={image} alt="" className="" />
              <h3>{description}</h3>
            </>
          }
          handleClose={togglePopup}
        />
      )}
    </div>
  );
};

export default MenuPoPupPageContent;
