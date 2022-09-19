import React from "react";

import "./Crousel.css";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";

const CarouselComponent = ({ images }) => {
  const sliderSettings = {
    centerPadding: "10px",
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    centerMode: true,
  };

  return (
    <>
      {
        images?.map(({ id, name, Images }) => (
          <div className="crousel" key={`images-${id}`}>
            <div className="content">
              <h1>{name}</h1>
              <Slider {...sliderSettings}>
                { Images?.map(({ id, image }) => 
                    <div className="containercrousel" key={`crousel-${id}`}>
                      <div key={id}>
                        <img alt={id} src={image} width="370" height="150" />
                      </div>
                    </div>
                  )}
              </Slider>
            </div>
          </div>
        ))}
    </>
  );
};

export default CarouselComponent;
