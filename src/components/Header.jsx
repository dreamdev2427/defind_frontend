import LogoSVG from "../assets/logo.svg";
import SearchSVG from "../assets/nav_search_icon.svg";
import NotifySVG from "../assets/nav_notify_icon.svg";
import AvatarPNG from "../assets/Avatar.png";

const Header = () => {
  return (
    <div className="w-full flex justify-between py-5 px-10">
      <div className="flex justify-start">
        <img src={LogoSVG} className="w-23 h-5" alt="logo" />
        <div className="ml-10 flex justify-center">
          <div className="text-white mx-2">Home</div>
          <div className="text-white mx-2">My List</div>
          <div className="text-white mx-2">Calendar</div>
          <div className="text-white mx-2">Learn</div>
          <div className="text-white mx-2">...</div>
        </div>
      </div>
      <div className="flex justify-end">
        <img src={SearchSVG} alt="search icon" className="w-8 h-8" />
        <img src={NotifySVG} alt="search icon" className="w-8 h-8 ml-2" />
        <img src={AvatarPNG} alt="search icon" className="w-8 h-8 ml-2" />
      </div>
    </div>
  );
};

export default Header;
