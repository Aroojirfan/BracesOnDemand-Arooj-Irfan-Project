import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchMenu } from "../../store/Reducer/Menu";
import { STATUSES } from "../../store/Reducer/Menu";
const Menu = () => {
  const { id } = useParams();
  console.log(id);
  const { data, status } = useSelector((state) => state.menu);
  console.log(data);

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
  const compare = () => {
    console.log(data.Menu)
    let compareData = data.Menu && data.Menu.filter((e) => 
       e.id == id
    );
    console.log(compareData);
  };

compare();

  return (
    <div>
      
    </div>
  );
};

export default Menu;
