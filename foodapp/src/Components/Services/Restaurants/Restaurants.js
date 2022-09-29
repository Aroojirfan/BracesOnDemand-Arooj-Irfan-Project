import React, { useEffect, useContext } from "react";
import { UserContext } from "../../../App";
import { useDispatch, useSelector } from "react-redux";
import { STATUSES } from "../../../store/Reducer/Restaurant";
import { fetchProducts } from "../../../store/Reducer/Restaurant";
import { NavLink } from "react-router-dom";
import "./Restaurant.css";
import RestaurantItem from "./RestaurantItem";
import { getData } from "../Utility";

const Restaurants = ({ searchItem }) => {
  const city = useContext(UserContext);
  const { data, status } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts(city));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (status === STATUSES.LOADING) {
    return <h2>Loading....</h2>;
  }

  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong</h2>;
  }
  const filteredData = getData(searchItem, data);

  return (
    <div className="Restaurant">
      <h1>All Restaurants</h1>
      <section className="main-card--cointainer1">
        {filteredData?.map(
          ({
            id,
            name,
            Rating,
            image,
            description,
            Deliveryfee,
            Restaurant_category_id,
          }) => (
            <div className="card-container" key={`restaurant-${id}`}>
              <div className="card ">
                <div className="card-body">
                  <img src={image} alt="images" className="card-media" />
                  <span className="card-author subtle">
                    {" "}
                    {Rating} <i className="fa fa-star add-btn" ></i>
                  </span>
                  <h2 className="card-title"> {name} </h2>
                  <span className="card-description subtle">{description}</span>
                  <div className="card-author subtle">
                    {Deliveryfee}. Delivery Fee
                  </div>
                  <div className="card-author1 subtle">
                    <RestaurantItem
                      Restaurant_category_id={Restaurant_category_id}
                    />
                  </div>
                </div>
                <NavLink to={`/Menu/${id}`}>
                  <span className="card-tag  subtle">Check Now</span>
                </NavLink>
              </div>
            </div>
          )
        )}
      </section>
    </div>
  );
};

export default Restaurants;
