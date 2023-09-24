import IstanbulBanner from "../../assets/istanbulnewsbanner.png";
import SecBanner from "../../assets/secnewsbanner.png";
import OnlyfansBanner from "../../assets/onlyfansnewsbanner.png";
import PrimaryButton from "../../components/PrimaryButton";
import { useNavigate } from "react-router-dom";

const NewsHome = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-[100vh] overflow-y-hidden overflow-x-hidden flex flex-col items-center">
      <div
        className="
      bg-[url('assets/news_banner.png')]
          flex flex-col  items-center  w-[100vw] h-[30vh] 
          justify-start 
          md:flex-row
          relative
          bg-no-repeat
          bg-cover            
    "
      >
        <div className="flex flex-col justify-center text-white absolute z-5 right-0 w-10/12 ">
          <span className="text-4xl  font-bold text-left">Our Latest News</span>
          <span className="mt-4 text-left">
            Find what fascinates you as you explore crypto
          </span>
          <button className="mt-4 rounded-xl border-[1px] border-white py-3 max-w-[128px]">
            Join with us
          </button>
        </div>
      </div>
      <div className="container">
        <div className="mt-10 flex justify-between pb-5 border-b-[#35383D] border-b-[1px] ">
          <div className="flex justify-start text-4xl text-white">
            Latest Articles
          </div>
          <div className="flex justify-end">
            <PrimaryButton
              className={"px-5 h-10 rounded-lg text-white"}
              label={"All"}
            />
            <button className="px-5 h-10  rounded-lg ml-2 text-white bg-[#1D1D25]">
              Altcoins
            </button>
            <button className="px-5 h-10  rounded-lg ml-2 text-white bg-[#1D1D25]">
              Bitcoin
            </button>
            <button className="px-5 h-10  rounded-lg ml-2 text-white bg-[#1D1D25]">
              Blockchain
            </button>
            <button className="px-5 h-10  rounded-lg ml-2 text-white bg-[#1D1D25]">
              DeFi
            </button>
            <button className="px-5 h-10  rounded-lg ml-2 text-white bg-[#1D1D25]">
              Ethereum
            </button>
            <button className="px-5 h-10  rounded-lg ml-2 text-white bg-[#1D1D25]">
              GameFi
            </button>
            <button className="px-5 h-10  rounded-lg ml-2 text-white bg-[#1D1D25]">
              Metaverse
            </button>
            <button className="px-5 h-10  rounded-lg ml-2 text-white bg-[#1D1D25]">
              Trading
            </button>
          </div>
        </div>
        <div className="flex flex-wrap justify-between">
          <div
            className="flex flex-col items-start w-[420px] mt-10 
                  transform hover:scale-105 transition-transform duration-150 ease-out 
          "
            onClick={() => navigate("/detailed_news")}
          >
            <img
              src={IstanbulBanner}
              className="w-full h-[220px] "
              alt="news banner"
            />
            <div className="mt-3 text-[#5BDFE4] text-md font-medium text-left">
              Crypto News
            </div>

            <div className="mt-3 text-white text-lg font-semibold text-left">
              Blockchain Technology and Islamic Finance Converge at Istanbul
              Blockchain Week
            </div>

            <div className="mt-3 text-[#aaabb6] text-md font-medium text-left">
              The event showcased the latest developments in AI and Web3, and
              explored the intersection of these technologies
            </div>

            <div className="mt-3 text-white text-lg text-left">
              By Decentralized Dog
            </div>

            <div className="mt-3 text-[#aaabb6] text-[12px] text-left">
              August15, 2021 . 7 ago . 2m
            </div>
          </div>

          <div
            className="flex flex-col items-start w-[420px] mt-10 
                  transform hover:scale-105 transition-transform duration-150 ease-out 
          "
            onClick={() => navigate("/detailed_news")}
          >
            <img
              src={SecBanner}
              className="w-full h-[220px]"
              alt="news banner"
            />
            <div className="mt-3 text-[#5BDFE4] text-md font-medium text-left">
              Crypto News
            </div>

            <div className="mt-3 text-white text-lg font-semibold text-left">
              Blockchain Technology and Islamic Finance Converge at Istanbul
              Blockchain Week
            </div>

            <div className="mt-3 text-[#aaabb6] text-md font-medium text-left">
              The event showcased the latest developments in AI and Web3, and
              explored the intersection of these technologies
            </div>

            <div className="mt-3 text-white text-lg text-left">
              By Decentralized Dog
            </div>

            <div className="mt-3 text-[#aaabb6] text-[12px] text-left">
              August15, 2021 . 7 ago . 2m
            </div>
          </div>

          <div
            className="flex flex-col items-start w-[420px] mt-10 
                  transform hover:scale-105 transition-transform duration-150 ease-out 
          "
            onClick={() => navigate("/detailed_news")}
          >
            <img
              src={OnlyfansBanner}
              className="w-full h-[220px]"
              alt="news banner"
            />
            <div className="mt-3 text-[#5BDFE4] text-md font-medium text-left">
              Crypto News
            </div>

            <div className="mt-3 text-white text-lg font-semibold text-left">
              Blockchain Technology and Islamic Finance Converge at Istanbul
              Blockchain Week
            </div>

            <div className="mt-3 text-[#aaabb6] text-md font-medium text-left">
              The event showcased the latest developments in AI and Web3, and
              explored the intersection of these technologies
            </div>

            <div className="mt-3 text-white text-lg text-left">
              By Decentralized Dog
            </div>

            <div className="mt-3 text-[#aaabb6] text-[12px] text-left">
              August15, 2021 . 7 ago . 2m
            </div>
          </div>

          <div
            className="flex flex-col items-start w-[420px] mt-10 
                  transform hover:scale-105 transition-transform duration-150 ease-out 
          "
            onClick={() => navigate("/detailed_news")}
          >
            <img
              src={IstanbulBanner}
              className="w-full h-[220px]"
              alt="news banner"
            />
            <div className="mt-3 text-[#5BDFE4] text-md font-medium text-left">
              Crypto News
            </div>

            <div className="mt-3 text-white text-lg font-semibold text-left">
              Blockchain Technology and Islamic Finance Converge at Istanbul
              Blockchain Week
            </div>

            <div className="mt-3 text-[#aaabb6] text-md font-medium text-left">
              The event showcased the latest developments in AI and Web3, and
              explored the intersection of these technologies
            </div>

            <div className="mt-3 text-white text-lg text-left">
              By Decentralized Dog
            </div>

            <div className="mt-3 text-[#aaabb6] text-[12px] text-left">
              August15, 2021 . 7 ago . 2m
            </div>
          </div>

          <div
            className="flex flex-col items-start w-[420px] mt-10 
                  transform hover:scale-105 transition-transform duration-150 ease-out 
          "
            onClick={() => navigate("/detailed_news")}
          >
            <img
              src={SecBanner}
              className="w-full h-[220px]"
              alt="news banner"
            />
            <div className="mt-3 text-[#5BDFE4] text-md font-medium text-left">
              Crypto News
            </div>

            <div className="mt-3 text-white text-lg font-semibold text-left">
              Blockchain Technology and Islamic Finance Converge at Istanbul
              Blockchain Week
            </div>

            <div className="mt-3 text-[#aaabb6] text-md font-medium text-left">
              The event showcased the latest developments in AI and Web3, and
              explored the intersection of these technologies
            </div>

            <div className="mt-3 text-white text-lg text-left">
              By Decentralized Dog
            </div>

            <div className="mt-3 text-[#aaabb6] text-[12px] text-left">
              August15, 2021 . 7 ago . 2m
            </div>
          </div>

          <div
            className="flex flex-col items-start w-[420px] mt-10 
                  transform hover:scale-105 transition-transform duration-150 ease-out 
          "
            onClick={() => navigate("/detailed_news")}
          >
            <img
              src={OnlyfansBanner}
              className="w-full h-[220px]"
              alt="news banner"
            />
            <div className="mt-3 text-[#5BDFE4] text-md font-medium text-left">
              Crypto News
            </div>

            <div className="mt-3 text-white text-lg font-semibold text-left">
              Blockchain Technology and Islamic Finance Converge at Istanbul
              Blockchain Week
            </div>

            <div className="mt-3 text-[#aaabb6] text-md font-medium text-left">
              The event showcased the latest developments in AI and Web3, and
              explored the intersection of these technologies
            </div>

            <div className="mt-3 text-white text-lg text-left">
              By Decentralized Dog
            </div>

            <div className="mt-3 text-[#aaabb6] text-[12px] text-left">
              August15, 2021 . 7 ago . 2m
            </div>
          </div>
        </div>
        <div className="mt-20 flex justify-center pb-[100px]">
          <button className="w-[180px] h-[56px] rounded-xl border-[#aaabb6] text-white border-[2px]">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsHome;
