import CourseBanner from "../../assets/coursebanner.png";
import FilledWatchIcon from "../../assets/filledWatchIcon.svg";
import FilledDocIcon from "../../assets/filledDocIcon.svg";
import SoloPlayIcon from "../../assets/solar_play-bold.svg";
import SoloPauseIcon from "../../assets/solar_pause-bold.svg";

const CourseDetailed = () => {
  return (
    <div className="mt-5 w-full min-h-[100vh] flex justify-center">
      <div className="container">
        <div className="text-white text-3xl text-left font-semibold">
          Formation 1: Blockchain Deep Dive
        </div>
        <div className="mt-5 flex flex-col md:flex-row justify-between ">
          <div className="">
            <img
              src={CourseBanner}
              className="max-w-[700px] h-[564px] object-cover"
              alt="course banner"
            />
          </div>
          <div className="flex flex-col min-w-[520px] max-h-[564px] overflow-y-scroll">
            <div className=" bg-[#27272f] rounded-2xl w-[520px] min-h-[100px] flex justify-between items-center px-5 mb-5  mr-5">
              <div className="flex flex-col">
                <div className="text-left text-[#aaabb6] text-xl font-medium">
                  Module : Introduction to blockchain technology
                </div>
                <div className="flex justify-start text-white text-lg items-center">
                  <img
                    src={FilledWatchIcon}
                    className="w-[16px] h-[16px]"
                    alt="watch icon"
                  />
                  <div className="ml-2">min</div>
                  <img
                    src={FilledDocIcon}
                    className="w-[11px] h-[16px] ml-4"
                    alt="watch icon"
                  />
                  <div className="ml-2">Quiz</div>
                </div>
              </div>
              <img
                src={SoloPauseIcon}
                className="w-[14px] h-[14px]"
                alt="solo icon"
              />
            </div>
            <div className=" bg-[#27272f] rounded-2xl w-[520px] min-h-[100px] flex justify-between items-center px-5 mb-5  mr-5">
              <div className="flex flex-col">
                <div className="text-left text-[#aaabb6] text-xl font-medium">
                  Module : Introduction to blockchain technology
                </div>
                <div className="flex justify-start text-white text-lg items-center">
                  <img
                    src={FilledWatchIcon}
                    className="w-[16px] h-[16px]"
                    alt="watch icon"
                  />
                  <div className="ml-2">min</div>
                  <img
                    src={FilledDocIcon}
                    className="w-[11px] h-[16px] ml-4"
                    alt="watch icon"
                  />
                  <div className="ml-2">Quiz</div>
                </div>
              </div>
              <img
                src={SoloPlayIcon}
                className="w-[14px] h-[14px]"
                alt="solo icon"
              />
            </div>
            <div className=" bg-[#27272f] rounded-2xl w-[520px] min-h-[100px] flex justify-between items-center px-5 mb-5  mr-5">
              <div className="flex flex-col">
                <div className="text-left text-[#aaabb6] text-xl font-medium">
                  Module : Introduction to blockchain technology
                </div>
                <div className="flex justify-start text-white text-lg items-center">
                  <img
                    src={FilledWatchIcon}
                    className="w-[16px] h-[16px]"
                    alt="watch icon"
                  />
                  <div className="ml-2">min</div>
                  <img
                    src={FilledDocIcon}
                    className="w-[11px] h-[16px] ml-4"
                    alt="watch icon"
                  />
                  <div className="ml-2">Quiz</div>
                </div>
              </div>
              <img
                src={SoloPauseIcon}
                className="w-[14px] h-[14px]"
                alt="solo icon"
              />
            </div>
            <div className=" bg-[#27272f] rounded-2xl w-[520px] min-h-[100px] flex justify-between items-center px-5 mb-5  mr-5">
              <div className="flex flex-col">
                <div className="text-left text-[#aaabb6] text-xl font-medium">
                  Module : Introduction to blockchain technology
                </div>
                <div className="flex justify-start text-white text-lg items-center">
                  <img
                    src={FilledWatchIcon}
                    className="w-[16px] h-[16px]"
                    alt="watch icon"
                  />
                  <div className="ml-2">min</div>
                  <img
                    src={FilledDocIcon}
                    className="w-[11px] h-[16px] ml-4"
                    alt="watch icon"
                  />
                  <div className="ml-2">Quiz</div>
                </div>
              </div>
              <img
                src={SoloPauseIcon}
                className="w-[14px] h-[14px]"
                alt="solo icon"
              />
            </div>
            <div className=" bg-[#27272f] rounded-2xl w-[520px] min-h-[100px] flex justify-between items-center px-5 mb-5  mr-5">
              <div className="flex flex-col">
                <div className="text-left text-[#aaabb6] text-xl font-medium">
                  Module : Introduction to blockchain technology
                </div>
                <div className="flex justify-start text-white text-lg items-center">
                  <img
                    src={FilledWatchIcon}
                    className="w-[16px] h-[16px]"
                    alt="watch icon"
                  />
                  <div className="ml-2">min</div>
                  <img
                    src={FilledDocIcon}
                    className="w-[11px] h-[16px] ml-4"
                    alt="watch icon"
                  />
                  <div className="ml-2">Quiz</div>
                </div>
              </div>
              <img
                src={SoloPauseIcon}
                className="w-[14px] h-[14px]"
                alt="solo icon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailed;
