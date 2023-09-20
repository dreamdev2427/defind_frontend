import RightArrowSVG from "../assets/rightArrow.svg";
import DePNG from "../assets/De.png";
import MailSVG from "../assets/mail.svg";
import MetamaskSVG from "../assets/metamask.svg";

const Login = () => {
  return (
    <div className="w-full h-full min-h-[100vh] flex justify-center ">
      <div className="text-white">
        <div className="mt-20 text-3xl">Login</div>

        <div className="mt-10 text-[#aaabb6] text-left">
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
            <div className="ml-6">Login with verified email</div>
          </div>
          <img src={RightArrowSVG} alt="right arrow" className="w-4 h-4" />
        </div>

        <div className="mt-10 text-[#aaabb6] text-left">
          Or connect with a mobile wallet app
        </div>

        <div className="mt-3 rounded-[16px] border-[1px] border-[#35383d] min-w-[480px] min-h-[64px] flex  px-4 justify-between items-center ">
          <div className="flex justify-start">
            <img src={MetamaskSVG} alt="depng" className="w-10 h-7"></img>
            <div className="ml-4">Metamask</div>
          </div>
          <img src={RightArrowSVG} alt="right arrow" className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export default Login;
