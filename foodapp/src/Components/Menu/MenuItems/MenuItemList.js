import React from 'react'
import { NavLink } from "react-router-dom";
const MenuItemList = ({ id, image, name, description, price }) => {
  return (
    <div className="card-container1" key={`menuItemscom-${id}`}>
    <div className="card1 ">
      <div className="card-body1">
        <img src={image} alt="" className="card-media1" />
        <span className="card-author subtle1">
          {" "}
          {price}{" "}
         
        </span>
        <h2 className="card-title1">{name}</h2>
        <span className="card-description subtle1"></span>
        <div className="card-author subtle">{description}</div>
        <div className="card-author1 subtle"></div>
      </div>
      <NavLink to="">
        <div className="buttonmenu">Add to Cart</div>
      </NavLink>
    </div>
  </div>
  )
}

export default MenuItemList
