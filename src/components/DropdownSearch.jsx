import { useState, useRef } from "react";
import SearchSVG from "../assets/nav_search_icon.svg";
import StarnetPNG from "../assets/Starknet.png";
import ArbitrumPNG from "../assets/Arbitrum.png";
import OrbiterPNG from "../assets/Orbiter.png";
import FriendTechPNG from "../assets/FriendTech.png";
import OmninetPNG from "../assets/Omninet.png";
import SupraPNG from "../assets/Supraoracles.png";

const searchResult = [
  {
    image: StarnetPNG,
    text: "Starknet",
  },
  {
    image: ArbitrumPNG,
    text: "Arbitrum",
  },
  {
    image: OrbiterPNG,
    text: "Orbiter Finance",
  },
  {
    image: FriendTechPNG,
    text: "Friend Tech",
  },
  {
    image: OmninetPNG,
    text: "Omni Network",
  },
  {
    image: SupraPNG,
    text: "Supra Oracles",
  },
];

function DropdownSearch() {
  const [isHovered, setIsHovered] = useState(false);
  const [query, setQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const inputRef = useRef(null);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setShowDropdown(false);
        setQuery("");
      }}
      className="relative"
    >
      {isHovered ? (
        <div className="absolute left-0 transform -translate-x-full transition-transform duration-300">
          <input
            ref={inputRef}
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              if (e.target.value) {
                setShowDropdown(true);
              } else {
                setShowDropdown(false);
              }
            }}
            className="pl-10 pr-2 py-1 min-w-[230px] border-[#4C4C56] bg-[#1D1D25] text-white focus:border-[#4C4C56] hover:border-[#4C4C56] rounded"
          />
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <img src={SearchSVG} alt="search icon" className="w-8 h-8"></img>
          </span>
        </div>
      ) : (
        <img src={SearchSVG} alt="search icon" className="w-8 h-8"></img>
      )}
      {showDropdown && (
        <div className="absolute right-0 top-8 pt-1 min-w-[230px] z-20  ">
          <div className="mt-0 border border-t-0 rounded-b shadow text-white bg-[#1D1D25] border-[#4C4C56] ">
            {searchResult.map((item, index) => (
              <div
                key={index}
                className="px-3 py-1 flex justify-start items-center"
              >
                <img src={item.image} alt="item" />
                <div className="ml-2">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default DropdownSearch;
