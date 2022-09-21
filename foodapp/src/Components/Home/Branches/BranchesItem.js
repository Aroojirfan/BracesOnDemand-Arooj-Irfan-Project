import React, {useContext } from "react";
import "./Branches.css";
import { useNavigate } from "react-router-dom";
import { UserDispatchContext } from "../../../App";
const BranchesItem = ({ id, city, image }) => {
  const setUserDetails = useContext(UserDispatchContext);
  const navigate = useNavigate();

  const navigateHome = () => {
    setUserDetails(id)
    navigate("/Services");
  };
    return(
    <div className="card-container" key={id}>
      <div className="card">
        <div className="card-body">
          <span className="card-author subtle">{city}</span>
        </div>
        <img  onClick={navigateHome} src={image} alt="images" className="card-media" />
      </div>
    </div>
    )
}
export default BranchesItem;
