import Product from "./Product";
import Slider from "react-slick";
import { offerProducts } from "../../utils/constants";
import { getRandomProducts } from "../../utils/functions";

import LeftBluePNG from "../../assets/leftBlue.png";
import RightBluePNG from "../../assets/rightBlue.png";

import img1 from "../../assets/Rectangle 4453.png";
import img2 from "../../assets/Rectangle 4454.png";
import img3 from "../../assets/Rectangle 4456.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./DealSlider.css";

const PreviousBtn = ({ className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <img src={LeftBluePNG} alt="left arrorw" className="w-8 h-8" />
    </div>
  );
};

const NextBtn = ({ className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <img src={RightBluePNG} alt="right arrorw" className="w-8 h-8" />
    </div>
  );
};

export const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  initialSlide: 1,
  swipe: false,
  prevArrow: <PreviousBtn />,
  nextArrow: <NextBtn />,
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

const DealSlider = ({ title }) => {
  return (
    <section className="bg-transparent w-full px-10 shadow overflow-hidden">
      <div className="flex px-6 py-3 justify-between items-center">
        <h1 className="text-xl font-medium">{title}</h1>
      </div>
      <hr />

      <Slider {...settings} className="border-none">
        <img
          src={img1}
          className="rounded-[16px] border-none px-2"
          alt="featured image"
        />

        <img
          src={img2}
          className="rounded-[16px] border-none px-2 "
          alt="featured image"
        />

        <img
          src={img3}
          className="rounded-[16px] border-none px-2 "
          alt="featured image"
        />

        <img
          src={img1}
          className="rounded-[16px] border-none px-2 "
          alt="featured image"
        />

        <img
          src={img2}
          className="rounded-[16px] border-none px-2 "
          alt="featured image"
        />

        <img
          src={img3}
          className="rounded-[16px] border-none px-2 "
          alt="featured image"
        />
      </Slider>
    </section>
  );
};

export default DealSlider;
