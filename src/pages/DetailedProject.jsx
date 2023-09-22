import ProjectCardPNG from "../assets/projectcard.png";
import OrbitorLogo from "../assets/orbiterlogo.png";
import VerifiedIcon from "../assets/verified.png";
import AvatarIcon from "../assets/Avatar.png";
import PrimaryButton from "../components/PrimaryButton";

import TwitterIcon from "../assets/icon-twitter-fill.png";
import TelegramIcon from "../assets/icon-telegram-fill.png";
import NotificationIcon from "../assets/icon-notification-fill.png";

const DetailedProject = () => {
  return (
    <div className="w-full min-h-[100vh] px-10 mt-10">
      <div className="relative">
        <img
          src={ProjectCardPNG}
          className="min-w-full rounded-lg "
          alt="project banner"
        />
      </div>
      <div className="flex justify-start pl-20 relative">
        <div
          className="absolute z-20  rounded-full w-[8rem] h-[8rem] 
              md:w-[10rem] md:h-[10rem] lg:w-[12rem] lg:h-[12rem]
              -mt-[3rem]  md:-mt-[4rem]  lg:-mt-[5rem] overflow-hidden "
        >
          <img
            src={OrbitorLogo}
            className="w-full h-full rounded-full border-none z-5 "
            alt="project logo"
          />
        </div>
        <div className="w-full flex justify-end">
          <div className="flex justify-between w-10/12">
            <div className="flex flex-col ">
              <div className="flex items-center">
                <span className="text-white text-3xl font-bold">
                  Orbiter Finance
                </span>
                <img
                  src={VerifiedIcon}
                  alt="verified"
                  className="w-8 h-8 ml-2"
                />
              </div>
              <div className="mt-2 text-md font-normal text-[#cecfc5] text-left">
                Launch Date: already live
              </div>
              <div className="flex mt-3 text-[#cecfc5] gap-1">
                <div className="py-2 px-3 rounded-3xl border-[#cecfc5] border-[1px] ">
                  Bridge
                </div>
                <div className="py-2 px-3 rounded-3xl border-[#cecfc5] border-[1px] ">
                  ETH
                </div>
                <div className="py-2 px-3 rounded-3xl border-[#cecfc5] border-[1px] ">
                  MultiChain
                </div>
              </div>

              <div className="mt-3 flex ">
                <div className="flex relative">
                  <img src={AvatarIcon} className="w-10 h-10  " alt="avatar" />
                  <img
                    src={AvatarIcon}
                    className="w-10 h-10 absolute left-8 "
                    alt="avatar"
                  />
                  <img
                    src={AvatarIcon}
                    className="w-10 h-10 absolute left-14 "
                    alt="avatar"
                  />
                </div>

                <div className="text-[#cecfc5] text-left ml-24 ">
                  Followed by LL United Club, Wall Street<br></br> Baby, and 8
                  others you follow
                </div>
              </div>
            </div>
            <div className="flex  gap-8 ">
              <div className="flex flex-col  mt-10 ">
                <div className="text-[#aaabb6] text-lg min-w-30 h-12 flex flex-col justify-center">
                  <div className="text-left">Contract</div>
                </div>
                <div className="text-[#aaabb6] text-lg min-w-30 h-12 flex flex-col justify-center">
                  <div className="text-left">Dextools.io</div>
                </div>
                <div className="text-[#aaabb6] text-lg min-w-30 h-12 flex flex-col justify-center ">
                  <div className="text-left">Site web</div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-between mt-10 h-36">
                <input
                  disabled={true}
                  value={"0x4a2ed6fd89g25v69......3b9c"}
                  className="ml-3 bg-[#1D1D25] px-4 py-2 rounded-xl text-white"
                ></input>
                <input
                  disabled={true}
                  value={"https://www.dextools.io"}
                  className="ml-3 bg-[#1D1D25] px-4 py-2 rounded-xl text-white"
                ></input>
                <input
                  disabled={true}
                  value={"www.orbiter.finance"}
                  className="ml-3 bg-[#1D1D25] px-4 py-2 rounded-xl text-white"
                ></input>
              </div>
            </div>
            <div className="flex flex-col text-white items-end justify-around pt-8">
              <div className="flex items-center ">
                <div className="">543 Following</div>
                <PrimaryButton
                  label="Follow"
                  className="text-white w-40 h-12 ml-4 font-bold "
                />
              </div>
              <div className="flex justify-end">
                <div className="">Share:</div>
                <img
                  src={TwitterIcon}
                  className="ml-3 w-6 h-6"
                  alt="twitter icon"
                />
                <img
                  src={TelegramIcon}
                  className="ml-3 w-6 h-6"
                  alt="telegram icon"
                />
                <img
                  src={NotificationIcon}
                  className="ml-3 w-6 h-6"
                  alt="notification icon"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedProject;
