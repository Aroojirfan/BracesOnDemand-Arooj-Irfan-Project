import React, { useEffect, useState } from "react";
// import "./Menu.css"
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchMenu } from "../../store/Reducer/Menu";
import { STATUSES } from "../../store/Reducer/Menu";
const Menu = () => {
  const [menuData, setMenuData] = useState([]);
  const { id } = useParams();
  // console.log(id);
  const { data, status } = useSelector((state) => state.Menu);
  // console.log(data);

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
    console.log(menuDatafiltered);
    setMenuData(menuDatafiltered);
  };
  console.log(menuData);
  useEffect(() => {
    menuDataFilter();
  }, [id]);
  
  return (
    <div className="container1">
      <div className="container">
        {menuData?.map(({ id, image, description }) => (
          <div className="card-container" key={`IMAGES-${id}`}>
            <div className="card">
              <div className="card-body">
                <span className="card-author subtle">{description}</span>
              </div>
              {console.log("image",image)}
              <img src={image} alt="" className="card-media" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
