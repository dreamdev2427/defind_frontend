import NotificationSlider from "../components/NotificationSlider/NotificationSlider";
import { exampleItems } from "./Home";
import DownArrowIcon from "../assets/downarrrowIcon.png";

const Calendar = () => {
  return (
    <div className="w-full h-full min-h-[100vh] ">
      <div className="text-white mt-10 text-left px-10 text-lg font-bold pb-2">
        Calendar
      </div>
      <div className="flex justify-between px-10 text-white">
        <div className="flex justify-start">
          <span className="cursor-pointer p-3 mr-2 rounded-md ">May 29th</span>
        </div>
        <div className="flex justify-end gap-2">
          <span className="cursor-pointer p-3 rounded-md bg-[#1D1D25] bg-gradient-to-r from-[#5BDFE4] to-[#024CAD]">
            Today
          </span>
          <span className="cursor-pointer p-3 rounded-md bg-[#1D1D25]">
            Tomorrow
          </span>

          <span className="cursor-pointer p-3 rounded-md bg-[#1D1D25] flex items-center">
            <div>Select date</div>
            <img
              src={DownArrowIcon}
              className="w-3 h-2 ml-2 "
              alt="down side arror"
            />
          </span>
        </div>
      </div>
      <div className="border-[1px] border-[#1d1d1d] px-10 mt-3"></div>
      <NotificationSlider title="" items={exampleItems} hideArrow={true} />
      <NotificationSlider title="" items={exampleItems} hideArrow={true} />
      <NotificationSlider title="" items={exampleItems} hideArrow={true} />
      <NotificationSlider title="" items={exampleItems} hideArrow={true} />
    </div>
  );
};

export default Calendar;
