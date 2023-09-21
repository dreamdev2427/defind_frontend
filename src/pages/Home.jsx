import DealSlider from "../components/DealSlider/DealSlider";
import ProductSlider from "../components/ProductSlider/ProductSlider";

const Home = () => {
  return (
    <div className="w-full h-full min-h-[100vh] ">
      <div className="text-white mt-8 mb-2 ml-10 text-left">Featured</div>

      <DealSlider />

      <div className="text-white mt-8 mb-2 ml-10 text-left">
        Top 10 Trending
      </div>

      <ProductSlider />
      <div className="text-white mt-8 mb-2 ml-10 text-left">Most Expected</div>

      <ProductSlider />
      <div className="text-white mt-8 mb-2 ml-10 text-left">
        Popular On Defined
      </div>

      <ProductSlider />
    </div>
  );
};

export default Home;
