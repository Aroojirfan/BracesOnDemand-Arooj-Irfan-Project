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
      {images &&
        images.map((card) => {
          return (
            <div className="crousel" key={card.id}>
              <div className="content">
                <h1>{card.name}</h1>
                <Slider {...sliderSettings}>
                  {card.Images &&
                    card.Images.map((curElem) => {
                      return (
                        <div className="containercrousel" key={curElem.id}>
                          <div key={curElem.id}>
                            <img
                              alt={curElem.id}
                              src={curElem.image}
                              width="370"
                              height="150"
                            />
                          </div>
                        </div>
                      );
                    })}
                </Slider>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default CarouselComponent;
