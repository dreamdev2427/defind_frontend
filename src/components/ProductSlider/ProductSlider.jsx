import React, { useRef } from "react";
import Product from "./Product";
import Slider from "react-slick";
import { offerProducts } from "../../utils/constants";
import { getRandomProducts } from "../../utils/functions";

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

const ProductSlider = ({ title, items, hideArrow }) => {
  const sliderRef = useRef();

  return (
    <section className="mt-5 bg-transparent w-full shadow overflow-hidden">
      <div className="flex justify-between items-center">
        <div className=" px-6 ">
          <h1 className="text-xl font-medium text-white">{title}</h1>
        </div>
        {hideArrow === true ? (
          <></>
        ) : (
          <div className="flex gap-2 px-6">
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
      <Slider {...settings} className="border-none" ref={sliderRef}>
        {items.map((item, i) => (
          <Link
            key={i}
            to="/detailed_project"
            className="flex flex-col items-center gap-1.5 py-3 cursor-pointer"
          >
            <div className="w-[216px] h-[150px] transform hover:scale-110 transition-transform duration-150 ease-out relative">
              <img
                draggable="false"
                className="object-cover w-full h-full rounded-xl "
                src={item.image}
                alt={item.text}
              />
              <div className="bg-gradient-to-t from-[#000000af] w-full h-1/2 absolute bottom-0 z-5 rounded-b-[10px] "></div>
              <h2 className="text-md font-bold  ml-2 absolute bottom-2 text-white z-10">
                {item.text}
              </h2>
            </div>
            <div className="flex gap-1 mt-4">
              {item.property.map((x, index) => (
                <div
                  key={index}
                  className=" text-sm text-[#aaabb6] bg-[#aaabb63f] p-2 rounded-[6px] ml-1"
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
