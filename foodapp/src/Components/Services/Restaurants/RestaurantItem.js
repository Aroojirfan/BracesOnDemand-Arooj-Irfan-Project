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

  const result = Restaurant_category_id?.map((e) =>
    data.RestaurantCategory?.filter((cur) => e === cur.id)
  );
  return (
    <div>
      <h4>Categories:</h4>
      {result?.map((e) => e?.map((cur) => `${cur.category_name} `))}
    </div>
  );
};

export default RestaurantItem;
