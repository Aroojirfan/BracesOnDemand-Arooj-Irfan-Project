import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { STATUSES } from "../../../store/Reducer/RestaurantCategory";
import { fetchrestaurantCategory } from "../../../store/Reducer/RestaurantCategory";
const RestaurantItem = ({ Restaurant_category_id }) => {
  const { data, status } = useSelector((state) => state.category);
 
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchrestaurantCategory());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (status === STATUSES.LOADING) {
    return <h2>Loading....</h2>;
  }

  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong!</h2>;
  }
  


 
  return (
    <div>
      {data.RestaurantCategory &&
        data.RestaurantCategory.filter(
          (e) => e.id === Restaurant_category_id
        ).map((e) => `category: ${e.category_name}`)}
    </div>
  );
};

export default RestaurantItem;
