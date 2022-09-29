import React, { useEffect, useState } from "react";
import "./Menu.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchMenu } from "../../store/Reducer/Menu";
import { STATUSES } from "../../store/Reducer/Menu";
import MenuItems from "./MenuItems/MenuItems";
import MenuPoPupPageContent from "./MenuPoPupPage/MenuPoPupPageContent";

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
  const menuDatafiltered = data.Menu?.filter((e) => String(e.id) === id);

  return (
    <div className="containerall">
      <div className="containermenu">
        {menuDatafiltered?.map(({ id, image, description, menuItemsId }) => (
          <div key={`menu-${id}`}>
            <div className="card-mediamenu" key={`menu-${id}`}>
              <img src={image} alt="" className="card-mediamenu" />
              <span className="card-authormenu">{` Description : ${description}`}</span>
            </div>
            <MenuPoPupPageContent image={image} description={description}/>
            <MenuItems menuItemsId={menuItemsId} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
