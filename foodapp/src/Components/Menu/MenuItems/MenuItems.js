import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./MenuItems.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenuItems } from "../../../store/Reducer/MenuItems";
import { STATUSES } from "../../../store/Reducer/MenuItems";
import MenuItemList from "./MenuItemList";
const MenuItems = ({ menuItemsId }) => {
  const { data, status } = useSelector((state) => state.MenuItems);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMenuItems());
  }, []);

  if (status === STATUSES.LOADING) {
    <h2>Loading....</h2>;
  }

  if (status === STATUSES.ERROR) {
    <h2>Something went wrong!</h2>;
  }

  const menuItemsFiltered = menuItemsId?.map((e) =>
    data.MenuItems?.filter((cur) => e == cur.Mid)
  );

  return (
    <div className="menuItems">
      <h1>All Menu Items</h1>
      <section className="main-card--cointainer2">
        {menuItemsFiltered?.map((e, index) => (
          <div className="categorybox" key={index}>
            {e?.map(({ Mid, category, items }) => (
              <div className="card-container1" key={`menus-${Mid}`}>
                <h2>{category}</h2>
                {items?.map(({ id, image, name, description, price }) => (
                <MenuItemList key={`menuItemscom-${id}`} id= {id} image={image} description={description} price={price} name={name}/>
                ))}
              </div>
            ))}{" "}
          </div>
        ))}
      </section>
    </div>
  );
};

export default MenuItems;
