import React, { useState } from "react";
import "../Navbar.css";
import { useSelector } from "react-redux";
import Menu from "@mui/material/Menu";
import Badge from "@mui/material/Badge";
import ShoppingCartItem from "./ShoppingCartItem";
const ShoppingCart = () => {
  const data = useSelector((state) => state.CartSlice);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
    <div>
      <Badge
        badgeContent={data.cart?.length}
        color="primary"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <i
          className="fa-solid fa-cart-shopping text-light"
          style={{ fontSize: 25, cursor: "pointer" }}
        ></i>
      </Badge>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {data.cart?.length ? (
          <div className="card_details" style={{ width: "30rem", padding: 10 }}>
           <ShoppingCartItem data={data}/>
          </div>
        ) : (
          <div
            className="card_details d-flex justify-content-center align-items-center"
            style={{ width: "24rem", padding: 10, position: "relative" }}
          >
            <i
              className="fas fa-close smallclose"
              onClick={handleClose}
              style={{
                position: "absolute",
                top: 2,
                right: 20,
                fontSize: 23,
                cursor: "pointer",
              }}
            ></i>
            <p style={{ fontSize: 22 }}>Your carts is empty</p>
            <img
              src="./cart.gif"
              alt=""
              className="emptycart_img"
              style={{ width: "5rem", padding: 10 }}
            />
          </div>
        )}
      </Menu>
    </div>
  );
};

export default ShoppingCart;
