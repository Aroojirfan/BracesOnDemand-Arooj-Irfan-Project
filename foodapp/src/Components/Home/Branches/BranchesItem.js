import React from "react";
import "./Branches.css";
const BranchesItem = ({ id, city, image }) => 
  
    <div className="card-container" key={id}>
      <div className="card">
        <div className="card-body">
          <span className="card-author subtle"> {city}</span>
        </div>
        <img src={image} alt="images" className="card-media" />
      </div>
    </div>
export default BranchesItem;
