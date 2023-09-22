import React, { useRef } from "react";
import Slider from "react-slick";

import NotificationIcon from "../../assets/notificationicon.png";
import LeftBlackPNG from "../../assets/smallLeftBlue.png";
import RightBlackPNG from "../../assets/smallRightBlue.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./NotificationSlider.css";
import { Link } from "react-router-dom";

export const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
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
    <section className="bg-transparent w-full px-10 shadow overflow-hidden">
      <div className="flex justify-between items-center">
        <div className=" px-6 py-3 ">
          <h1 className="text-xl font-medium text-white">{title}</h1>
        </div>
        {hideArrow === true ? (
          <></>
        ) : (
          <div className="flex gap-2 px-10">
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
            className="flex flex-col items-center gap-1.5 p-6 cursor-pointer"
          >
            <div className="min-w-36 min-h-36 transform hover:scale-110 transition-transform duration-150 ease-out relative">
              <img
                draggable="false"
                className="object-cover w-full h-full"
                src={item.image}
                alt={item.text}
              />
              <img
                src={NotificationIcon}
                className="w-8 h-8 absolute top-3 right-3"
                alt="notification icon"
              />
            </div>
            <div className="text-lg font-bold  mt-3 text-white text-left">
              {item.text}
            </div>
            <div className="flex gap-1 mt-1">
              <div className=" text-sm text-[#aaabb6] rounded-[6px] ml-1">
                {new Date().toLocaleDateString()}
              </div>
            </div>
          </Link>
        ))}
      </Slider>
    </section>
  );
};

export default ProductSlider;
