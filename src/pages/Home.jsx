import DealSlider from "../components/DealSlider/DealSlider";
import ProductSlider from "../components/ProductSlider/ProductSlider";

import img1 from "../assets/top10trending/Group 1000008005.png";
import img2 from "../assets/top10trending/Group 1000008182.png";
import img3 from "../assets/top10trending/Group 1000008183.png";
import img4 from "../assets/top10trending/Group 1000008184.png";
import img5 from "../assets/top10trending/Group 1000008185.png";
import img6 from "../assets/top10trending/Group 1000008186.png";

export const exampleItems = [
  {
    image: img1,
    text: "Starknet",
    property: ["Layer2", "Blockchain"],
  },
  {
    image: img2,
    text: "Arbitrum",
    property: ["Layer2", "Blockchain"],
  },
  {
    image: img3,
    text: "Orbiter Finance",
    property: ["Bridge", "Multichain"],
  },
  {
    image: img4,
    text: "Friend Tech",
    property: ["Base", "Social"],
  },
  {
    image: img5,
    text: "Omni Network",
    property: ["Layer1", "Blockchain"],
  },
  {
    image: img6,
    text: "Sync Swap",
    property: ["Dex", "Zksync"],
  },
  {
    image: img1,
    text: "Starknet",
    property: ["Layer2", "Blockchain"],
  },
  {
    image: img2,
    text: "Arbitrum",
    property: ["Layer2", "Blockchain"],
  },
  {
    image: img3,
    text: "Orbiter Finance",
    property: ["Bridge", "Multichain"],
  },
  {
    image: img4,
    text: "Friend Tech",
    property: ["Base", "Social"],
  },
  {
    image: img5,
    text: "Omni Network",
    property: ["Layer1", "Blockchain"],
  },
  {
    image: img6,
    text: "Sync Swap",
    property: ["Dex", "Zksync"],
  },
];

const Home = () => {
  return (
    <div className="w-full h-full min-h-[100vh] flex flex-col items-center overflow-x-hidden">
      <div className="container overflow-x-hidden">
        <div className="text-white mb-2  text-left text-2xl font-semibold ">
          Featured
        </div>

        <DealSlider />

        <ProductSlider
          title="Top 10 Trending"
          items={exampleItems}
          showCornerNumber={true}
        />

        <ProductSlider title="Most Expected" items={exampleItems} />

        <ProductSlider title="Popular On Defined" items={exampleItems} />
      </div>
    </div>
  );
};

export default Home;
