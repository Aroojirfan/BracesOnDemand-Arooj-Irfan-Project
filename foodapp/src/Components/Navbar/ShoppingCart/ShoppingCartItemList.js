import React from "react";
import { useDispatch } from "react-redux";
import "./ShoppingCart.css";
import { incrementCartQuantity } from "../../../store/Reducer/ cartSlice";
import { decrementCartQuantity } from "../../../store/Reducer/ cartSlice";
const ShoppingCartItemList = ({
  id,
  image,
  name,
  price,
  quantity,
  removeCart,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="card-body1" key={`cart-${id}`}>
      <img
        src={image}
        style={{ width: "5rem", height: "5rem" }}
        alt=""
        className="card-media1"
      />
      <span className="card-author subtle1"> {`${price} Rs.`} </span>
      <h2 className="card-title1">{name}</h2>
      <span className="card-description subtle1"></span>
      <div
        className="card-author1 subtle2"
        style={{ color: "red", fontSize: 20, cursor: "pointer" }}
      >
        <h2 className="card-title1">{`Quantity : ${quantity}`}</h2>
        <div className="flex-1 text-center">
          <i
            className="fa fa-plus ml-1 cp p-1"
            onClick={() => dispatch(incrementCartQuantity(id))}
          ></i>
          <i
            className="fa fa-minus ml-1 cp p-1"
            onClick={() => dispatch(decrementCartQuantity(id))}
          ></i>
        </div>

        <i
          className="fas fa-trash largetrash"
          onClick={() => removeCart(id)}
        ></i>
        <hr></hr>
      </div>
    </div>
  );
};

export default ShoppingCartItemList;
