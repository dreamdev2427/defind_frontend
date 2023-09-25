import ProductSlider from "../components/ProductSlider/ProductSlider";
import { exampleItems } from "./Home";

const Favorite = () => {
  return (
    <div className="w-full h-full min-h-[100vh] flex flex-col items-center overflow-x-hidden">
      <div className="container overflow-x-hidden">
        <div className="text-white text-left text-2xl font-medium pb-4">
          My List
        </div>
        <div className="flex justify-between  text-white">
          <div className="flex justify-start">
            <div className="p-3 h-[34px]  flex items-center justify-center   rounded-md bg-gradient-to-r from-[#5BDFE4] to-[#024CAD]">
              All
            </div>
            <div className="p-3 h-[34px]  flex items-center justify-center   rounded-md bg-[#1D1D25] ml-2">
              Memecoins
            </div>
            <div className="p-3 h-[34px]  flex items-center justify-center   rounded-md bg-[#1D1D25] ml-2">
              DeFi
            </div>
            <div className=" p-3 h-[34px]  flex items-center justify-center   rounded-md bg-[#1D1D25] ml-2">
              Airdrop
            </div>
            <div className="p-3 h-[34px]  flex items-center justify-center   rounded-md bg-[#1D1D25] ml-2">
              Play2Earn
            </div>
          </div>
          <div className="flex justify-end">
            <span className=" h-[34px]  p-3 flex items-center justify-center   rounded-md bg-[#1D1D25]">
              Delete
            </span>
          </div>
        </div>
        <div className="border-[1px] border-[#1d1d1d]  mt-4"></div>
        <div className="mt-6 flex flex-wrap justify-between overflow-x-hidden">
          {exampleItems.map((item, index) => (
            <div key={index} className="pb-9 ">
              <div className="w-[200px] h-[140px] transform hover:scale-105 transition-transform duration-150 ease-out relative">
                <img
                  draggable="false"
                  className="object-cover w-full h-full rounded-xl "
                  src={item.image}
                  alt={item.text}
                />
                <div className="bg-gradient-to-t from-[#000000af] w-full h-1/2 absolute bottom-0 z-5 rounded-b-[10px] "></div>
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
            </div>
          ))}
          {exampleItems.map((item, index) => (
            <div key={index} className="pb-9 ">
              <div className="w-[200px] h-[140px] transform hover:scale-105 transition-transform duration-150 ease-out relative">
                <img
                  draggable="false"
                  className="object-cover w-full h-full rounded-xl "
                  src={item.image}
                  alt={item.text}
                />
                <div className="bg-gradient-to-t from-[#000000af] w-full h-1/2 absolute bottom-0 z-5 rounded-b-[10px] "></div>
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorite;
