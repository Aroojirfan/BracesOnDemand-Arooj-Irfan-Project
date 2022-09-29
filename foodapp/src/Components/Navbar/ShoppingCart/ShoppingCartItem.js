import React from "react";
import { useDispatch } from "react-redux";
import { remove } from "../../../store/Reducer/ cartSlice";
import "./ShoppingCart.css";
import { getTotal } from "./ShoppingUtility";
import ShoppingCartItemList from "./ShoppingCartItemList";
const ShoppingCartItem = ({ data }) => {
  const dispatch = useDispatch();
  const removeCart = (id) => {
    dispatch(remove(id));
  };
  return (
    <div>
      {data.cart?.map(({ id, image, name, price, quantity }) => (
        <ShoppingCartItemList
          key={`cart-${id}`}
          id={id}
          image={image}
          name={name}
          price={price}
          quantity={quantity}
          removeCart={removeCart}
          getTotal={getTotal}
        />
      ))}
      <h3 className="total__p">
        total ({getTotal(data).totalQuantity} items) :{" "}
        <strong>Total: Rs.{getTotal(data).totalPrice}</strong>
      </h3>
    </div>
  );
};

export default ShoppingCartItem;
