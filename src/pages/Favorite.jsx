import ProductSlider from "../components/ProductSlider/ProductSlider";
import { exampleItems } from "./Home";

const Favorite = () => {
  return (
    <div className="w-full h-full min-h-[100vh] ">
      <div className="text-white mt-10 text-left px-10 text-lg font-bold pb-2">
        My List
      </div>
      <div className="flex justify-between px-10 text-white">
        <div className="flex justify-start">
          <span className="cursor-pointer p-3 mr-2 rounded-md bg-gradient-to-r from-[#5BDFE4] to-[#024CAD]">
            All
          </span>
          <span className="cursor-pointer p-3 rounded-md bg-[#1D1D25] ml-2">
            Memecoins
          </span>
          <span className="cursor-pointer p-3 rounded-md bg-[#1D1D25] ml-2">
            DeFi
          </span>
          <span className="cursor-pointer p-3 rounded-md bg-[#1D1D25] ml-2">
            Airdrop
          </span>
          <span className="cursor-pointer p-3 rounded-md bg-[#1D1D25] ml-2">
            Play2Earn
          </span>
        </div>
        <div className="flex justify-end">
          <span className="cursor-pointer p-3 rounded-md bg-[#1D1D25]">
            Delete
          </span>
        </div>
      </div>
      <div className="border-[1px] border-[#1d1d1d] px-10 mt-3"></div>
      <ProductSlider title="" items={exampleItems} hideArrow={true} />
      <ProductSlider title="" items={exampleItems} hideArrow={true} />
      <ProductSlider title="" items={exampleItems} hideArrow={true} />
      <ProductSlider title="" items={exampleItems} hideArrow={true} />
    </div>
  );
};

export default Favorite;
