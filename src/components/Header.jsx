import LogoSVG from "../assets/logo.svg";
import NotifySVG from "../assets/nav_notify_icon.svg";
import AvatarPNG from "../assets/Avatar.png";
import CrossSVG from "../assets/crossicon.svg";
import DropdownSearch from "./DropdownSearch";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [showNotificationDlg, setShowNotificationDlg] = useState(false);

  return (
    <div className="w-full flex justify-between py-5 px-10">
      <div className="flex justify-start">
        <img src={LogoSVG} className="w-23 h-5" alt="logo" />
        <div className="ml-10 flex justify-center cursor-pointer">
          <div className="text-white mx-2" onClick={() => navigate("/")}>
            Home
          </div>
          <div
            className="text-white mx-2"
            onClick={() => navigate("/favorite")}
          >
            My List
          </div>
          <div
            className="text-white mx-2"
            onClick={() => navigate("/calendar")}
          >
            Calendar
          </div>
          <div
            className="text-white mx-2"
            onClick={() => navigate("/training")}
          >
            Learn
          </div>
          <div className="text-white mx-2">...</div>
        </div>
      </div>
      <div className="flex justify-end">
        <DropdownSearch className="w-8 h-8 relative" />
        <div className="relative">
          <img
            src={NotifySVG}
            alt="search icon"
            className="w-8 h-8 ml-2"
            onClick={() => setShowNotificationDlg(!showNotificationDlg)}
          />
          {showNotificationDlg === true && (
            <div className="absolute z-20 rounded-3xl right-0 top-0 bg-[#4C4C56] text-white py-5 w-72 ">
              <div
                className="flex w-full justify-between items-center
                border-b-black border-b-[1px] pb-3
              "
              >
                <span className="ml-3 text-lg font-bold">Notifications</span>
                <img
                  className="w-6 h-6 cursor-pointer mr-3"
                  onClick={() => setShowNotificationDlg(!showNotificationDlg)}
                  src={CrossSVG}
                  alt="cross icon"
                />
              </div>
              <div
                className="flex w-full justify-between items-center
                border-b-black border-b-[1px] py-4 px-3
                hover:bg-[#1D1D25]
              "
              >
                <img
                  className="w-8 h-8 cursor-pointer mr-3"
                  src={AvatarPNG}
                  alt="avatar"
                />
                <div className="flex flex-col items-start">
                  <span className="text-white">Trending</span>
                  <span className="text-[#aaabb6] text-left">
                    Your post is trending in the hot section.
                  </span>
                </div>
                <span className="ml-3 text-sm ">7:56 AM</span>
              </div>

              <div
                className="flex w-full justify-between items-center
                border-b-black border-b-[1px] py-4 px-3
                hover:bg-[#1D1D25]
              "
              >
                <img
                  className="w-8 h-8 cursor-pointer mr-3"
                  src={AvatarPNG}
                  alt="avatar"
                />
                <div className="flex flex-col items-start">
                  <span className="text-white">Trending</span>
                  <span className="text-[#aaabb6] text-left">
                    Your post is trending in the hot section.
                  </span>
                </div>
                <span className="ml-3 text-sm ">7:56 AM</span>
              </div>

              <div
                className="flex w-full justify-between items-center
                border-b-black border-b-[1px] py-4 px-3
                hover:bg-[#1D1D25]
              "
              >
                <img
                  className="w-8 h-8 cursor-pointer mr-3"
                  src={AvatarPNG}
                  alt="avatar"
                />
                <div className="flex flex-col items-start">
                  <span className="text-white">Trending</span>
                  <span className="text-[#aaabb6] text-left">
                    Your post is trending in the hot section.
                  </span>
                </div>
                <span className="ml-3 text-sm ">7:56 AM</span>
              </div>

              <div
                className="flex w-full justify-between items-center
                border-b-black border-b-[1px] py-4 px-3
                hover:bg-[#1D1D25]
              "
              >
                <img
                  className="w-8 h-8 cursor-pointer mr-3"
                  src={AvatarPNG}
                  alt="avatar"
                />
                <div className="flex flex-col items-start">
                  <span className="text-white">Trending</span>
                  <span className="text-[#aaabb6] text-left">
                    Your post is trending in the hot section.
                  </span>
                </div>
                <span className="ml-3 text-sm ">7:56 AM</span>
              </div>
            </div>
          )}
        </div>
        <img
          src={AvatarPNG}
          alt="search icon"
          className="w-8 h-8 ml-2 cursor-pointer"
          onClick={() => navigate("/settings")}
        />
      </div>
    </div>
  );
};

export default Header;
