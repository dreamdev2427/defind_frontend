import TrainderPNG from "../../assets/trainer.png";

const TrainingHome = () => {
  return (
    <div className="w-full min-h-[100vh]">
      <div className="bg-[#80B1FF] min-w-[1440px] min-h-[320px] flex justify-around flex-wrap">
        <div className="flex flex-col">
          <span className="text-4xl text-black font-bold text-left">Learn</span>
          <span className="text-left">
            Find what fascinates you as you explore crypto
          </span>
          <button className="">Join with us</button>
        </div>
        <img src={TrainderPNG} className="h-full" alt="training banner" />
      </div>
    </div>
  );
};

export default TrainingHome;
