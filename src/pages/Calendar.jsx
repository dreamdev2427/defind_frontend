import NotificationSlider from "../components/NotificationSlider/NotificationSlider";
import { exampleItems } from "./Home";
import DownArrowIcon from "../assets/downarrrowIcon.png";
import NotificationIcon from "../assets/notificationicon.png";

const Calendar = () => {
  return (
    <div className="w-full h-full min-h-[100vh]  flex flex-col items-center">
      <div className="container">
        <div className="text-white  text-left text-2xl font-medium pb-2">
          Calendar
        </div>
        <div className="flex justify-between  text-white items-center">
          <div className="flex justify-start">
            <span className="cursor-pointer mr-2 rounded-md ">May 29th</span>
          </div>
          <div className="flex justify-end gap-2">
            <div className="cursor-pointer p-3 h-[34px] rounded-md bg-[#1D1D25] bg-gradient-to-r from-[#5BDFE4] to-[#024CAD] flex justify-center items-center">
              Today
            </div>
            <div className="cursor-pointer p-3 h-[34px]  rounded-md bg-[#1D1D25]  flex justify-center items-center">
              Tomorrow
            </div>
            <div className="cursor-pointer p-3 h-[34px]  rounded-md bg-[#1D1D25] flex items-center justify-center">
              <div>Select date</div>
              <img
                src={DownArrowIcon}
                className="w-3 h-2 ml-2 "
                alt="down side arror"
              />
            </div>
          </div>
        </div>
        <div className="border-[1px] border-[#1d1d1d] mt-2"></div>
        <div className="mt-5 w-full flex flex-wrap justify-between gap-10">
          {exampleItems.map((item, index) => (
            <div key={index}>
              <div className="w-[298px] h-[160px] transform hover:scale-110 transition-transform duration-150 ease-out relative">
                <img
                  draggable="false"
                  className="object-cover w-full h-full rounded-xl"
                  src={item.image}
                  alt={item.text}
                />
                <img
                  src={NotificationIcon}
                  className="w-7 h-7 absolute top-3 right-3"
                  alt="notification icon"
                />
              </div>
              <div className="text-xl font-semibold  mt-3 text-white text-left">
                {item.text}
              </div>
              <div className="flex gap-1 mt-1">
                <div className=" text-[12px] font-mixed text-[#aaabb6] rounded-[6px] ">
                  Launch: May 29th 11:30 am UTC
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
