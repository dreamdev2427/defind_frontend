import TrainingBannerPNG from "../../assets/training banner.png";

const TrainingHome = () => {
  return (
    <div className="w-full min-h-[100vh]">
      <div
        className="bg-transparent 
            flex flex-col  items-center  w-full py-20
            justify-start 
            md:flex-row
            md:min-w-[1440px] md:min-h-[320px] 
            md:py-0
            relative
      "
      >
        <img
          src={TrainingBannerPNG}
          className="absolute top-0 w-full z-1 pt-20 md:pt-0"
          alt="training banner"
        />
        <div className="flex flex-col justify-center text-white absolute z-5  ">
          <span className="text-4xl  font-bold text-left">Learn</span>
          <span className="mt-4 text-left">
            Find what fascinates you as you explore crypto
          </span>
          <button className="mt-4 rounded-xl border-[1px] border-white py-3 max-w-[128px]">
            Join with us
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrainingHome;
