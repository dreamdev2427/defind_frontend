import React, { useRef } from "react";
import Slider from "react-slick";

import LeftBlackPNG from "../../assets/smallLeftBlue.png";
import RightBlackPNG from "../../assets/smallRightBlue.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProductSlider.css";
import { Link } from "react-router-dom";

export const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 6,
  initialSlide: 1,
  swipe: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const ProductSlider = ({
  title,
  items,
  hideArrow,
  itemsInRow = 6,
  showCornerNumber = false,
}) => {
  const sliderRef = useRef();

  return (
    <section className="mt-10 bg-transparent w-full shadow overflow-hidden">
      <div className="flex justify-between items-center pb-3">
        <div className=" ">
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
        </div>
        {hideArrow === true ? (
          <></>
        ) : (
          <div className="flex gap-2 px-2">
            <img
              src={LeftBlackPNG}
              className="w-8 h-8"
              alt="prev button"
              onClick={() => sliderRef.current.slickPrev()}
            />
            <img
              src={RightBlackPNG}
              className="w-8 h-8"
              alt="next button"
              onClick={() => sliderRef.current.slickNext()}
            />
          </div>
        )}
      </div>
      <Slider
        {...settings}
        slidesToShow={itemsInRow}
        slidesToScroll={itemsInRow}
        className="border-none  w-full "
        ref={sliderRef}
      >
        {items.map((item, i) => (
          <Link
            key={i}
            to="/detailed_project"
            className="flex flex-col items-center gap-1.5 py-2 cursor-pointer"
          >
            <div className="w-[200px] h-[140px] transform hover:scale-105 transition-transform duration-150 ease-out relative">
              <img
                draggable="false"
                className="object-cover w-full h-full rounded-xl "
                src={item.image}
                alt={item.text}
              />
              {showCornerNumber === true && (
                <div
                  className="absolute z-5 top-0 right-0 bg-[#FF2828] text-white text-[21px] font-bold rounded-tr-xl
                w-[32px] h-[42px] flex items-center justify-center
              "
                >
                  0{i}
                </div>
              )}
              <div className="bg-gradient-to-t from-[#000000ef]  w-full h-1/2 absolute bottom-0 z-5 rounded-b-[10px] "></div>
              <h2 className="font-medium  ml-4 absolute bottom-1 text-white z-10">
                {item.text}
              </h2>
            </div>
            <div className="flex gap-1 mt-3">
              {item.property.map((x, index) => (
                <div
                  key={index}
                  className=" text-[12px] font-medium text-[#aaabb6] bg-[#aaabb63f] px-2 py-1 rounded-[8px] ml-1"
                >
                  {x}
                </div>
              ))}
            </div>
          </Link>
        ))}
      </Slider>
    </section>
  );
};

export default ProductSlider;
