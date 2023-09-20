import RightArrowSVG from "../assets/rightArrow.svg";
import MailSVG from "../assets/mail.svg";
import PrimaryButton from "../components/PrimaryButton";

const Login = () => {
  return (
    <div className="w-full h-full min-h-[100vh] flex justify-center ">
      <div className="text-white">
        <div className="mt-20 text-3xl">Login with email</div>
        <div className="mt-10 text-white text-left">
          Already logged into DeFined on PC?
        </div>
        <div className="mt-3 rounded-[16px] border-[1px] border-[#35383d] min-w-[480px] min-h-[64px] flex  px-4 justify-between items-center ">
          <div className="flex justify-start">
            <img src={MailSVG} alt="depng" className="w-10 h-5"></img>
            <div className="ml-4 text-[#aaabb6]">Email</div>
          </div>
          <img src={RightArrowSVG} alt="right arrow" className="w-4 h-4" />
        </div>

        <div className="mt-2 text-sm text-[#aaabb6] ">
          Make sure your email address is already verified in your DeBank
          account
        </div>

        <div className="mt-10  text-left">Email verification code</div>
        <div className="mt-3 rounded-[16px] border-[1px] border-[#35383d] min-w-[480px] min-h-[64px] flex  px-4 justify-between items-center ">
          <div className="flex justify-start">
            <div className="ml-4 text-[#aaabb6]">Verification code</div>
          </div>
          <div className="ml-4 text-[#aaabb6] text-sm">Resend</div>
        </div>

        <PrimaryButton
          className="mt-5 min-w-[480px] min-h-[56px] "
          label="Log in"
        />
      </div>
    </div>
  );
};

export default Login;
