import PrimaryButton from "../../components/PrimaryButton";
import DocumentIcon from "../../assets/document_icon.png";
import CheckOndeIcon from "../../assets/checkone_icon.png";
import OutlineIcon from "../../assets/outline_icon.png";
import GiftIcon from "../../assets/gift_icon.png";
import TrainingPNG from "../../assets/training_banner.png";
import WatchIcon from "../../assets/watchicon.png";
import FreeMarkIcon from "../../assets/freeMarkicon.png";
import ReceiveMarkIcon from "../../assets/ReceiveMarkIcon.png";
import VideoMarkIcon from "../../assets/videoMarkIcon.png";

const TrainingHome = () => {
  return (
    <div className="w-full overflow-x-hidden flex flex-col items-center">
      <div
        className="bg-[url('assets/training_banner.png')]
            flex flex-col  items-center  w-[100vw] h-[30vh] 
            justify-start 
            md:flex-row
            relative
            bg-no-repeat
            bg-cover            
      "
      >
        <div className="flex flex-col justify-center text-white absolute z-5 right-0 w-10/12 ">
          <span className="text-4xl  font-bold text-left">Learn</span>
          <span className="mt-4 text-left">
            Find what fascinates you as you explore crypto
          </span>
          <button className="mt-4 rounded-xl border-[1px] border-white py-3 max-w-[128px]">
            Join with us
          </button>
        </div>
      </div>
      <div className="container overflow-x-hidden">
        <div className="mt-10 mx-10 flex pb-5 border-b-[#35383D] border-b-[1px] ">
          <PrimaryButton
            className={"w-36 h-10 rounded-lg text-white"}
            label={"All courses"}
          />
          <button className="w-36 h-10  rounded-lg ml-2 text-white bg-[#1D1D25]">
            In progress
          </button>
          <button className="w-36 h-10  rounded-lg ml-2 text-white bg-[#1D1D25]">
            Completed
          </button>
        </div>
        <div className="mt-8 text-3xl text-white font-bold text-left px-10">
          Intermediate Track 5 Courses
        </div>
        <div className=" w-[1290px] h-[297px] mt-8 mx-10 rounded-2xl bg-[#1D1D25] flex justify-between relative">
          <div className="px-10 py-5">
            <div className="text-white text-xl font-bold text-left py-4">
              Blockchain Beyond Basics
            </div>
            <div className="flex py-2">
              <img src={DocumentIcon} className="w-6 h-6" alt="document icon" />
              <span className="text-[#aaabb6]  ml-4">
                Level up your knowledge of blockchain & crypto
              </span>
            </div>
            <div className="flex py-2">
              <img
                src={CheckOndeIcon}
                className="w-6 h-6"
                alt="document icon"
              />
              <span className="text-[#aaabb6] ml-4">
                Watch videos & pass quizzes
              </span>
            </div>
            <div className="flex py-2">
              <img src={OutlineIcon} className="w-6 h-6" alt="document icon" />
              <span className="text-[#aaabb6] ml-4">
                6 courses and 70+ modules
              </span>
            </div>
            <div className="flex py-2">
              <img src={GiftIcon} className="w-6 h-6" alt="document icon" />
              <span className="text-[#aaabb6] ml-4">
                Receive a PDF or NFT certificate upon completing each
                intermediate-level course
              </span>
            </div>
          </div>
          <img
            className="w-[514px] h-[317px] object-cover absolute top-4 right-4 rounded-2xl"
            src={TrainingPNG}
            alt="training"
          />
        </div>
        <div className="mt-[80px]  w-[1290px]  mx-10  pl-5 pr-[8px]  min-h-[72px] bg-[#1d1d25] rounded-xl flex justify-between items-center">
          <div className="text-white">Blockchain Deep Dive</div>
          <div className="text-white flex ">
            <img src={WatchIcon} alt="watch icon" className="w-6 h-6 mr-2" /> 77
            Min
          </div>
          <PrimaryButton
            className={"text-white rounded-lg min-w-[120px] min-h-[56px]"}
            label={"Apply"}
          />
        </div>
        <div className="mt-3  w-[1290px]  mx-10 pl-5 pr-[8px] min-h-[72px] bg-[#1d1d25] rounded-xl flex justify-between items-center">
          <div className="text-white">Blockchain Deep Dive</div>
          <div className="text-white flex ">
            <img src={WatchIcon} alt="watch icon" className="w-6 h-6 mr-2" /> 77
            Min
          </div>
          <PrimaryButton
            className={"text-white rounded-lg min-w-[120px]  min-h-[56px]"}
            label={"Apply"}
          />
        </div>
        <div className="mt-3 w-[1290px]  mx-10 pl-5 pr-[8px] min-h-[72px] bg-[#1d1d25] rounded-xl flex justify-between items-center">
          <div className="text-white">Blockchain Deep Dive</div>
          <div className="text-white flex ">
            <img src={WatchIcon} alt="watch icon" className="w-6 h-6 mr-2" /> 77
            Min
          </div>
          <PrimaryButton
            className={"text-white rounded-lg min-w-[120px] min-h-[56px]"}
            label={"Apply"}
          />
        </div>
        <div className="mt-3 w-[1290px]  mx-10 pl-5 pr-[8px]  min-h-[72px] bg-[#1d1d25] rounded-xl flex justify-between items-center">
          <div className="text-white">Blockchain Deep Dive</div>
          <div className="text-white flex ">
            <img src={WatchIcon} alt="watch icon" className="w-6 h-6 mr-2" /> 77
            Min
          </div>
          <PrimaryButton
            className={"text-white rounded-lg min-w-[120px] min-h-[56px]"}
            label={"Apply"}
          />
        </div>
        <div className="mt-3 w-[1290px]  mx-10 pl-5 pr-[8px] min-h-[72px] bg-[#1d1d25] rounded-xl flex justify-between items-center">
          <div className="text-white">Blockchain Deep Dive</div>
          <div className="text-white flex ">
            <img src={WatchIcon} alt="watch icon" className="w-6 h-6 mr-2" /> 77
            Min
          </div>
          <PrimaryButton
            className={"text-white rounded-lg min-w-[120px] min-h-[56px]"}
            label={"Apply"}
          />
        </div>

        <div className="mt-[80px] text-3xl text-white font-bold text-left px-10">
          Beginner Track 5 Courses
        </div>
        <div className=" w-[1290px] h-[297px] mt-8 mx-10 rounded-2xl bg-[#1D1D25] flex justify-between relative">
          <div className="px-10 py-5">
            <div className="text-white text-xl font-bold text-left py-4">
              Blockchain Beyond Basics
            </div>
            <div className="flex py-2">
              <img src={DocumentIcon} className="w-6 h-6" alt="document icon" />
              <span className="text-[#aaabb6]  ml-4">
                Level up your knowledge of blockchain & crypto
              </span>
            </div>
            <div className="flex py-2">
              <img
                src={CheckOndeIcon}
                className="w-6 h-6"
                alt="document icon"
              />
              <span className="text-[#aaabb6] ml-4">
                Watch videos & pass quizzes
              </span>
            </div>
            <div className="flex py-2">
              <img src={OutlineIcon} className="w-6 h-6" alt="document icon" />
              <span className="text-[#aaabb6] ml-4">
                6 courses and 70+ modules
              </span>
            </div>
            <div className="flex py-2">
              <img src={GiftIcon} className="w-6 h-6" alt="document icon" />
              <span className="text-[#aaabb6] ml-4">
                Receive a PDF or NFT certificate upon completing each
                intermediate-level course
              </span>
            </div>
          </div>
          <img
            className="w-[514px] h-[317px] object-cover absolute top-4 right-4 rounded-2xl"
            src={TrainingPNG}
            alt="training"
          />
        </div>
        <div className="mt-[80px]  w-[1290px]  mx-10  pl-5 pr-[8px]  min-h-[72px] bg-[#1d1d25] rounded-xl flex justify-between items-center">
          <div className="text-white">Blockchain Deep Dive</div>
          <div className="text-white flex ">
            <img src={WatchIcon} alt="watch icon" className="w-6 h-6 mr-2" /> 77
            Min
          </div>
          <PrimaryButton
            className={"text-white rounded-lg min-w-[120px] min-h-[56px]"}
            label={"Apply"}
          />
        </div>
        <div className="mt-3  w-[1290px]  mx-10 pl-5 pr-[8px] min-h-[72px] bg-[#1d1d25] rounded-xl flex justify-between items-center">
          <div className="text-white">Blockchain Deep Dive</div>
          <div className="text-white flex ">
            <img src={WatchIcon} alt="watch icon" className="w-6 h-6 mr-2" /> 77
            Min
          </div>
          <PrimaryButton
            className={"text-white rounded-lg min-w-[120px]  min-h-[56px]"}
            label={"Apply"}
          />
        </div>
        <div className="mt-3 w-[1290px]  mx-10 pl-5 pr-[8px] min-h-[72px] bg-[#1d1d25] rounded-xl flex justify-between items-center">
          <div className="text-white">Blockchain Deep Dive</div>
          <div className="text-white flex ">
            <img src={WatchIcon} alt="watch icon" className="w-6 h-6 mr-2" /> 77
            Min
          </div>
          <PrimaryButton
            className={"text-white rounded-lg min-w-[120px] min-h-[56px]"}
            label={"Apply"}
          />
        </div>
        <div className="mt-3 w-[1290px]  mx-10 pl-5 pr-[8px]  min-h-[72px] bg-[#1d1d25] rounded-xl flex justify-between items-center">
          <div className="text-white">Blockchain Deep Dive</div>
          <div className="text-white flex ">
            <img src={WatchIcon} alt="watch icon" className="w-6 h-6 mr-2" /> 77
            Min
          </div>
          <PrimaryButton
            className={"text-white rounded-lg min-w-[120px] min-h-[56px]"}
            label={"Apply"}
          />
        </div>
        <div className="mt-3 w-[1290px]  mx-10 pl-5 pr-[8px] min-h-[72px] bg-[#1d1d25] rounded-xl flex justify-between items-center">
          <div className="text-white">Blockchain Deep Dive</div>
          <div className="text-white flex ">
            <img src={WatchIcon} alt="watch icon" className="w-6 h-6 mr-2" /> 77
            Min
          </div>
          <PrimaryButton
            className={"text-white rounded-lg min-w-[120px] min-h-[56px]"}
            label={"Apply"}
          />
        </div>
      </div>
      <div className="  overflow-y-hidden mt-[100px] w-full flex justify-center items-center bg-[#1D1D25] h-[570px]">
        <div className="container flex justify-center items-center">
          <div className="flex flex-col items-start">
            <div className="text-white text-4xl text-left font-bold w-[348px]">
              Learn crypto and earn rewards
            </div>
            <div className="text-[#aaabb6] text-left mt-5 text-lg w-[561px] ">
              Advance your knowledge for free through our fun, interactive
              <br></br>
              courses. Binance Academy presents the most comprehensive<br></br>
              educational courses lineup for beginners,
            </div>
            <PrimaryButton
              label={"Start Course"}
              className={
                "w-[170px] h-[56px] rounded-2xl mt-10 text-semibold text-white"
              }
            />
          </div>
          <div className="flex flex-col items-start ml-10">
            <div className="flex">
              <img
                src={FreeMarkIcon}
                className="w-[60px] h-[60px]"
                alt="free mark"
              />
              <div className="ml-8 flex flex-col items-start">
                <div className="text-2xl text-semibold text-white">
                  Learn For Free
                </div>
                <div className="text-lg text-[#aaabb6] ">
                  Complete quizzes and earn rewards.
                </div>
              </div>
            </div>
            <div className="flex mt-10">
              <img
                src={ReceiveMarkIcon}
                className="w-[60px] h-[60px]"
                alt="free mark"
              />
              <div className="ml-8 flex flex-col items-start">
                <div className="text-2xl text-semibold text-white">
                  Receive Certificate
                </div>
                <div className="text-lg text-[#aaabb6] text-left ">
                  Claim your Certificate of Achievement<br></br> as proof of
                  learning
                </div>
              </div>
            </div>
            <div className="flex mt-10">
              <img
                src={VideoMarkIcon}
                className="w-[60px] h-[60px]"
                alt="free mark"
              />
              <div className="ml-8 flex flex-col items-start">
                <div className="text-2xl text-semibold text-white">
                  One-Stop Learning Hub
                </div>
                <div className="text-lg text-[#aaabb6] text-left">
                  Join millions and start learning from<br></br> Binance
                  Academy’s standard-setting<br></br> educational programs Start
                  Course
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[100px] container">
        <div className="text-white text-4xl text-semibold text-center">
          Frequently<br></br> Asked questions
        </div>
      </div>
    </div>
  );
};

export default TrainingHome;
