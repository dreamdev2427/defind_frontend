import ProductSlider from "../components/ProductSlider/ProductSlider";
import { exampleItems } from "./Home";

const Favorite = () => {
  return (
    <div className="w-full h-full min-h-[100vh] flex flex-col items-center">
      <div className="container">
        <div className="text-white text-left text-2xl font-medium pb-4">
          My List
        </div>
        <div className="flex justify-between  text-white">
          <div className="flex justify-start">
            <div className="cursor-pointer h-[40px] p-3 flex cursor-pointer h-[40px] p-3 flex items-center justify-center   rounded-md bg-gradient-to-r from-[#5BDFE4] to-[#024CAD]">
              All
            </div>
            <div className="cursor-pointer h-[40px] p-3 flex cursor-pointer h-[40px] p-3 flex items-center justify-center   rounded-md bg-[#1D1D25] ml-2">
              Memecoins
            </div>
            <div className="cursor-pointer h-[40px] p-3 flex cursor-pointer h-[40px] p-3 flex items-center justify-center   rounded-md bg-[#1D1D25] ml-2">
              DeFi
            </div>
            <div className="cursor-pointer h-[40px] p-3 flex cursor-pointer h-[40px] p-3 flex items-center justify-center   rounded-md bg-[#1D1D25] ml-2">
              Airdrop
            </div>
            <div className="cursor-pointer h-[40px] p-3 flex cursor-pointer h-[40px] p-3 flex items-center justify-center   rounded-md bg-[#1D1D25] ml-2">
              Play2Earn
            </div>
          </div>
          <div className="flex justify-end">
            <span className="cursor-pointer h-[40px] p-3 flex cursor-pointer h-[40px] p-3 flex items-center justify-center   rounded-md bg-[#1D1D25]">
              Delete
            </span>
          </div>
        </div>
        <div className="border-[1px] border-[#1d1d1d]  mt-4"></div>
        <div className="mt-6 flex flex-wrap justify-between ">
          {exampleItems.map((item, index) => (
            <div key={index} className="pb-9 ">
              <div className="w-[204px] h-[142px] transform hover:scale-110 transition-transform duration-150 ease-out relative rounded-xl">
                <img
                  draggable="false"
                  className="object-cover w-full h-full rounded-xl"
                  src={item.image}
                  alt={item.text}
                />
                <div className="bg-gradient-to-t from-[#000000af] w-full h-1/2 absolute bottom-0 z-5 rounded-b-[10px] "></div>
                <h2 className="text-md font-bold  ml-2 absolute bottom-2 text-white z-10">
                  {item.text}
                </h2>
              </div>
              <div className="flex gap-1 mt-3">
                {item.property.map((x, index) => (
                  <div
                    key={index}
                    className=" text-sm text-[#aaabb6] bg-[#aaabb63f] p-2 rounded-[6px] ml-1"
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
