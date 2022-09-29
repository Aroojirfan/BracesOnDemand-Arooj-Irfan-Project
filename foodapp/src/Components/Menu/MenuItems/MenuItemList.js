import React from "react";
import { add } from "../../../store/Reducer/ cartSlice";
import { useDispatch } from "react-redux";
const MenuItemList = (props) => {
  const { id, image, name, description, price }=props
  const dispatch = useDispatch();
  const addToRedux = (product) => {
    dispatch(add(product));
  };

  return (
    <div className="card-container1" key={`menuItemscom-${id}`}>
      <div className="card1 ">
        <div className="card-body1">
          <img src={image} alt="" className="card-media1" />
          <span className="card-author subtle1"> {`${price} Rs.`} </span>
          <h2 className="card-title1">{name}</h2>
          <span className="card-description subtle1"></span>
          <div className="card-author subtle">{description}</div>
          <div className="card-author1 subtle"></div>
        </div>
        <button className="buttonmenu" onClick={() => addToRedux(props)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default MenuItemList;
