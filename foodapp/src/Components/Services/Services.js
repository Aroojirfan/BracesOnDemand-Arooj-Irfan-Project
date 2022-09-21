import React, { useState } from "react";

import "./Services.css";
import FastFoodImages from "./Carousel/assets/Images/FastFood";
import DesiImages from "./Carousel/assets/Images/Desi";
import CarouselComponent from "./Carousel/CarouselComponent";
import Restaurants from "./Restaurants/Restaurants";
import BreakFastImages from "./Carousel/assets/Images/Breakfast";
import DessertImages from "./Carousel/assets/Images/Dessert";

const Services = () => {

  const images = [
    { id: 1, name: "BreakFast", Images: BreakFastImages },
    { id: 2, name: "Fast Food", Images: FastFoodImages },
    { id: 3, name: "Desi Food", Images: DesiImages },
    { id: 4, name: "Desssert Food", Images: DessertImages },
  ];

  const [searchItem, setSearchItem] = useState("");

  return (
    <div>
      <div className="containerServices">
        <input
          type="text"
          id="name"
          name="name"
          autoComplete="off"
          placeholder="Search Items...."
          onChange={(e) => setSearchItem(e.target.value)}
          value={searchItem}
        />
      </div>
      {searchItem === "" ? <CarouselComponent images={images} /> : null}
      <Restaurants searchItem={searchItem} />
    </div>
  );
};

export default Services;
