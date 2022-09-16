import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { STATUSES } from "../../../store/Reducer/Restaurant";
import { fetchProducts } from "../../../store/Reducer/Restaurant";
import { fetchrestaurantCategory } from "../../../store/Reducer/RestaurantCategory";
import "./Restaurant.css";
import RestaurantItem from "./RestaurantItem";

const Restaurants = ({ searchItem }) => {
  const { data, status } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (status === STATUSES.LOADING) {
    return <h2>Loading....</h2>;
  }

  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong!</h2>;
  }

  return (
    <div className="Restaurant">
      <h1>All Restaurants</h1>
      <section className="main-card--cointainer">
        {data.Restaurant &&
          data.Restaurant.filter((curElem) => {
            if (searchItem == "") {
              return curElem;
            } else if (
              curElem.name
                .toLowerCase()
                .includes(searchItem.toString().toLowerCase()) ||
              curElem.description
                .toLowerCase()
                .includes(searchItem.toString().toLowerCase())
            ) {
              return curElem;
            }
          }).map((curElem) => {
            const {
              id,
              name,
              Rating,
              image,
              description,
              Deliveryfee,
              Restaurant_category_id,
            } = curElem;
            return (
              <div className="card-container" key={id}>
                <div className="card ">
                  <div className="card-body">
                    <img src={image} alt="images" className="card-media" />
                    <span className="card-author subtle">
                      {" "}
                      {Rating} <i className="fa fa-star" aria-hidden="true"></i>
                    </span>
                    <h2 className="card-title"> {name} </h2>
                    <span className="card-description subtle">
                      {description}
                    </span>
                    <div className="card-author subtle">
                      {Deliveryfee}. Delivery Fee
                    </div>
                    <div className="card-author1 subtle">
                      <RestaurantItem
                        Restaurant_category_id={Restaurant_category_id}
                      />
                    </div>
                  </div>
                  <span className="card-tag  subtle">Check Now</span>
                </div>
              </div>
            );
          })}
      </section>
    </div>
  );
};

export default Restaurants;
