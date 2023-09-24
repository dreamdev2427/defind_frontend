import { useCallback, useState } from "react";
import "./FaqAccrodianstyles.scss";
import UpperGradientArrorIcon from "../../assets/upperGradientArrow.png";
import DownArrorIcon from "../../assets/downArrow.svg";
import parse from "html-react-parser";

const FAQ_SCRIPT = [
  {
    q: "Get Started on Binance Lite to Buy and Sell Your Crypto",
    a: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, lorem Ipsum is simply dummy text of the printing.",
  },
  {
    q: "Why Hasn’t My Withdrawal Arrived",
    a: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, lorem Ipsum is simply dummy text of the printing.",
  },
  {
    q: "How to Complete Identity Verification",
    a: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, lorem Ipsum is simply dummy text of the printing.",
  },
  {
    q: "How Do I Deposit/Withdraw Cryptocurrency on Binance",
    a: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, lorem Ipsum is simply dummy text of the printing.",
  },
  {
    q: "How to Buy Crypto with Card on Binance Lite App",
    a: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, lorem Ipsum is simply dummy text of the printing.",
  },
];

const PageFAQ = () => {
  const [searchedFAQs, setSearchedFAQs] = useState(FAQ_SCRIPT);
  const [selId, setSelId] = useState(-1);
  const [showAllAnswer, setShowAllAnswer] = useState({});
  const clickItem = useCallback(
    (index) => {
      if (selId === index) {
        setSelId(-1);
      } else {
        setSelId(index);
      }
    },
    [selId]
  );

  const handleClickShowMore = (query) => {
    let flag = showAllAnswer[query];
    let newFlags = { ...showAllAnswer, [query]: !flag };
    setShowAllAnswer(newFlags);
  };

  return (
    <div className="relative w-full h-full">
      <div className="w-full h-full z-2">
        <div className="container section-faq__content pb-20">
          {searchedFAQs &&
            searchedFAQs.length > 0 &&
            searchedFAQs.map((item, index) => (
              <div className="accordion-wrapper" key={index}>
                <div
                  className={
                    selId === index
                      ? "accordion active "
                      : "accordion rounded-2xl"
                  }
                  onClick={() => {
                    clickItem(index);
                  }}
                >
                  <span className="  text-xl flex justify-between px-5 pt-0">
                    <span
                      className={
                        selId === index
                          ? `bg-gradient-to-r from-[#5BDFE4] to-[#024CAD] bg-clip-text text-transparent text-xl font-semibold`
                          : "text-white"
                      }
                    >
                      {item?.q}
                    </span>
                    {selId === index ? (
                      <img
                        src={UpperGradientArrorIcon}
                        className="w-8 h-8"
                        alt="upper icon"
                      />
                    ) : (
                      <img
                        src={DownArrorIcon}
                        className="w-8 h-8"
                        alt="down icon"
                      />
                    )}
                  </span>
                </div>
                <div className="panel  ">
                  {parse(
                    showAllAnswer[item?.q] === false
                      ? item?.a?.toString().substring(0, 200) + "..."
                      : item?.a
                  )}
                  {showAllAnswer[item?.q] === false ? (
                    <span
                      className="ml-1 inline text-[rgb(255,171,64)] cursor-pointer z-5"
                      onClick={() => handleClickShowMore(item?.q)}
                    >
                      Show more
                    </span>
                  ) : showAllAnswer[item?.q] === true ? (
                    <span
                      className="ml-1 inline text-[rgb(255,171,64)] cursor-pointer z-5"
                      onClick={() => handleClickShowMore(item?.q)}
                    >
                      Show less
                    </span>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PageFAQ;
