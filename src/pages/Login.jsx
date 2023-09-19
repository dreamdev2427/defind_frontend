const Login = () => {
  return (
    <div className="p-20 w-full h-full flex justify-center items-center">
      <div className="text-white">
        <div className="text-3xl">Login</div>

        <div className="mt-10 text-[#aaabb6] text-left">
          Already logged into DeFined on PC?
        </div>

        <div className="mt-3 rounded-[16px] border-[1px] border-[#35383d] min-w-[480px] min-h-[64px] flex  px-4 justify-between items-center ">
          Connect With DeFined
        </div>

        <div className="mt-3 rounded-[16px] border-[1px] border-[#35383d] min-w-[480px] min-h-[64px] flex  px-4 justify-between items-center ">
          Login with verified email
        </div>
      </div>
    </div>
  );
};

export default Login;
