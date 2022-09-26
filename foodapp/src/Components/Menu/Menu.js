import React, { useEffect, useState } from "react";
import "./Menu.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchMenu } from "../../store/Reducer/Menu";
import { STATUSES } from "../../store/Reducer/Menu";
import MenuItems from "./MenuItems/MenuItems";

const Menu = () => {
  const [menuData, setMenuData] = useState([]);
  const { id } = useParams();
  const { data, status } = useSelector((state) => state.Menu);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMenu());
  }, []);

  if (status === STATUSES.LOADING) {
    <h2>Loading....</h2>;
  }

  if (status === STATUSES.ERROR) {
    <h2>Something went wrong!</h2>;
  }

  const menuDataFilter = () => {
    const menuDatafiltered = data.Menu?.filter((e) => e.id == id);
    setMenuData(menuDatafiltered);
  };

  useEffect(() => {
    menuDataFilter();
  }, [id]);

  return (
    <div className="containerall">
      <div className="container">
        {menuData?.map(({ id, image, description, menuItemsId }) => (
          <div key={`menu-${id}`}>
            <div className="card-mediamenu" key={`menu-${id}`}>
              <img src={image} alt="" className="card-mediamenu" />
              <span className="card-authormenu">{` description : ${description}`}</span>
            </div>
            <MenuItems menuItemsId={menuItemsId} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
