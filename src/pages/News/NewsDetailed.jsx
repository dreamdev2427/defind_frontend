import Secnewbanner from "../../assets/secnewsbanner.png";

const NewsDetails = () => {
  return (
    <div className="w-full min-h-[100vh] flex flex-col items-center">
      <div className="mt-5 container">
        <div className="flex flex-col items-center">
          <img
            src={Secnewbanner}
            className="w-[850px] h-[380px] rounded-xl "
            alt="news banner"
          />
          <div className="flex flex-col items-start">
            <div className="text-[#5BDFE4] text-sm text-left text-medium">
              Crypto News
            </div>
            <div className="text-2xl font-semibold text-left text-white">
              Grayscale Wins Lawsuit Against SEC
            </div>
            <div className="w-full flex justify-between">
              <div className="flex justify-start items-center">
                <div className="text-white text-lg text-left">
                  By Decentralized dog
                </div>
                <div className="ml-4 text-[#aaabb6] text-sm text-left">
                  August 16, 2021 . 7h ago . 2m
                </div>
              </div>
              <div className="flex justify-end">
                <div className="">Share:</div>
                <div className="ml-4 flex gap-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full"></div>
    </div>
  );
};

export default NewsDetails;
