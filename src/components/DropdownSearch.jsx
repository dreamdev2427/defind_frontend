import { useState, useRef } from "react";
import SearchSVG from "../assets/nav_search_icon.svg";

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
      }}
      className="relative"
    >
      {" "}
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
      {showDropdown && (
        <div className="absolute right-0 top-[-85px] min-w-[230px] transform translate-y-full transition-transform duration-300  ">
          <div className="border border-t-0 rounded-b shadow text-white bg-[#1D1D25] border-[#4C4C56] ">
            <div className="p-2">Item 1</div>
            <div className="p-2">Item 2</div>
            <div className="p-2">Item 3</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DropdownSearch;
