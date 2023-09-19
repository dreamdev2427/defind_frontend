import * as React from "react";
import EyeOffSVG from "../assets/eye-off.svg";
import CopySVG from "../assets/copy.svg";
import DePNG from "../assets/De.png";
import MailSVG from "../assets/mail.svg";
import RightArrowSVG from "../assets/rightArrow.svg";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../components/PrimaryButton";

const SignUp = () => {
  const navigate = useNavigate();

  return (
    <div className="p-20 w-full h-full flex justify-center items-center">
      <div className="text-white">
        <div className="text-3xl">Sign Up</div>

        <div className="mt-10 rounded-[16px] border-[1px] border-[#35383d] min-w-[480px] min-h-[64px] flex flex-col items-start flex-0 px-4 justify-center">
          <div className="text-[#aaabb6] text-sm">Email</div>
          <input
            placeholder="email"
            className="text-white text-md bg-transparent border-none w-full hover:border-none focus:border-none"
            value="Jeniferloren@gmail.com"
          ></input>
        </div>

        <div className="mt-3 rounded-[16px] border-[1px] border-[#35383d] min-w-[480px] min-h-[64px] flex flex-col items-start flex-0 px-4 justify-center">
          <div className="text-[#aaabb6] text-sm">Name</div>
          <input
            placeholder="name"
            className="text-white text-md bg-transparent border-none w-full hover:border-none focus:border-none"
            value="Jeniferlore"
          ></input>
        </div>

        <div className="mt-3 rounded-[16px] border-[1px] border-[#35383d] min-w-[480px] min-h-[64px] flex flex-col items-start flex-0 px-4 justify-center">
          <div className="text-[#aaabb6] text-sm">User Name</div>
          <input
            placeholder="user name"
            className="text-white text-md bg-transparent border-none w-full hover:border-none focus:border-none"
            value="199Jeniferlore"
          ></input>
        </div>

        <div className="mt-3 rounded-[16px] border-[1px] border-[#35383d] min-w-[480px] min-h-[64px] flex flex-col items-start flex-0 px-4 justify-center">
          <div className="text-[#aaabb6] text-sm">Phone Number</div>
          <input
            placeholder="phone number"
            className="text-white text-md bg-transparent border-none w-full hover:border-none focus:border-none"
            value="00336655422"
          ></input>
        </div>

        <div className="mt-3 rounded-[16px] border-[1px] border-[#35383d] min-w-[480px] min-h-[64px] flex  px-4 justify-between">
          <div className="flex flex-col items-start justify-center ">
            <div className="text-[#aaabb6] text-sm">Password</div>
            <input
              placeholder="password"
              type="password"
              className="text-white text-md bg-transparent border-none w-full hover:border-none focus:border-none"
              value="00336655422"
            ></input>
          </div>
          <div className=" min-h-[64px] flex flex-col justify-center">
            <img src={EyeOffSVG} alt="eyeoff" className="w-6 h-6"></img>
          </div>
        </div>

        <div className="mt-3 rounded-[16px] border-[1px] border-[#35383d] min-w-[480px] min-h-[64px] flex  px-4 justify-between">
          <div className="flex flex-col items-start justify-center ">
            <div className="text-[#aaabb6] text-sm">Wallet address</div>
            <input
              placeholder="wallet address"
              className="text-white text-md bg-transparent border-none w-full hover:border-none focus:border-none"
              value="0x4a2ed6fd89g25v69......3b9c"
            ></input>
          </div>
          <div className=" min-h-[64px] flex flex-col justify-center">
            <img src={CopySVG} alt="copybutton" className="w-6 h-6"></img>
          </div>
        </div>

        <PrimaryButton
          className="mt-5 min-w-[480px] min-h-[56px] "
          label="Sign Up"
        />

        <div className="mt-8 text-[#aaabb6] text-md">
          I already have an account{" "}
          <span
            className="text-white underline "
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </div>

        <div className="my-8 text-[#aaabb6] text-md flex w-full items-center">
          <div className="w-5/12 border-t-[1px] border-[#35383d] h-0"></div>
          <span className="w-2/12 text-[#aaabb6]  ">Or</span>
          <div className="w-5/12 border-t-[1px] border-[#35383d] h-0"></div>
        </div>

        <div className="text-[#aaabb6] text-left">
          Already logged into DeFined on PC?
        </div>

        <div className="mt-3 rounded-[16px] border-[1px] border-[#35383d] min-w-[480px] min-h-[64px] flex  px-4 justify-between items-center ">
          <div className="flex justify-start">
            <img src={DePNG} alt="depng" className="w-10 h-5"></img>
            <div className="ml-4">Connect With DeFined</div>
          </div>
          <img src={RightArrowSVG} alt="right arrow" className="w-4 h-4" />
        </div>

        <div className="mt-3 rounded-[16px] border-[1px] border-[#35383d] min-w-[480px] min-h-[64px] flex  px-4 justify-between items-center ">
          <div className="flex justify-start">
            <img src={MailSVG} alt="mailsvg" className="w-8 h-5"></img>
            <div className="ml-4">Login with verified email</div>
          </div>
          <img src={RightArrowSVG} alt="right arrow" className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
