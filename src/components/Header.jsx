import LogoSVG from "../assets/logo.svg";
import NotifySVG from "../assets/nav_notify_icon.svg";
import AvatarPNG from "../assets/Avatar.png";
import DropdownSearch from "./DropdownSearch";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

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
          <div className="text-white mx-2">Learn</div>
          <div className="text-white mx-2">...</div>
        </div>
      </div>
      <div className="flex justify-end">
        <DropdownSearch className="w-8 h-8 relative" />
        <img src={NotifySVG} alt="search icon" className="w-8 h-8 ml-2" />
        <img
          src={AvatarPNG}
          alt="search icon"
          className="w-8 h-8 ml-2 cursor-pointer"
          onClick={() => navigate("/profile")}
        />
      </div>
    </div>
  );
};

export default Header;
