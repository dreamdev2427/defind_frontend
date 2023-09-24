import Secnewbanner from "../../assets/secnewsbanner.png";
import TwitterIcon from "../../assets/icon-twitter-fill.png";
import TelegramIcon from "../../assets/icon-telegram-fill.png";
import NotificationIcon from "../../assets/icon-notification-fill.png";
import IstanbulBanner from "../../assets/istanbulnewsbanner.png";
import SecBanner from "../../assets/secnewsbanner.png";
import OnlyfansBanner from "../../assets/onlyfansnewsbanner.png";

import { useNavigate } from "react-router-dom";

const NewsDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-[100vh] flex flex-col items-center">
      <div className="mt-5 container">
        <div className="w-full flex flex-col items-center">
          <img
            src={Secnewbanner}
            className="w-9/12 h-[380px] rounded-xl "
            alt="news banner"
          />
          <div className="w-9/12 mt-5 flex flex-col items-start">
            <div className="text-[#5BDFE4] text-sm text-left text-medium">
              Crypto News
            </div>
            <div className="mt-3 text-2xl font-semibold text-left text-white">
              Grayscale Wins Lawsuit Against SEC
            </div>
            <div className="mt-3 w-full flex justify-between">
              <div className="flex justify-start items-center">
                <div className="text-white text-lg text-left">
                  By Decentralized dog
                </div>
                <div className="ml-4 text-[#aaabb6] text-sm text-left">
                  August 16, 2021 . 7h ago . 2m
                </div>
              </div>
              <div className="flex justify-end">
                <div className="text-white text-sm">Share:</div>
                <div className="ml-4 flex gap-3">
                  <img
                    src={TwitterIcon}
                    className="w-[17px] h-[17px]"
                    alt="twitter icon"
                  />

                  <img
                    src={TelegramIcon}
                    className="w-[17px] h-[17px]"
                    alt="twitter icon"
                  />

                  <img
                    src={NotificationIcon}
                    className="w-[17px] h-[17px]"
                    alt="twitter icon"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="w-9/12 mt-10 flex flex-col items-start bg-[#666875] h-[140px]
                  border-l-[5px] border-[#15D465] text-white text-xl text-left
                  justify-center px-10
          "
          >
            An independent agency of the United States federal government,
            responsible for enforcing federal securities laws, proposing
            securities rules, and regulating the securities industry, the natio
          </div>
          <div className="w-9/12 mt-5 flex flex-col items-start justify-center text-left text-xl text-[#aaabb6]">
            Orbiter Finance is designed as a decentralized cross-rollup bridge
            for transferring Ethereum-native assets. The system has two roles:
            Sender and Maker. The 'Maker' is required to deposit excess margin
            to Orbiter's contract before they can qualify to be a cross-rollup
            service provider to the 'Sender'. In the usual process, the 'Sender'
            sends assets to the 'Maker' on the 'Source Network', and the 'Maker'
            sends back to the 'Sender' on the 'Destination Network'. There are 3
            types of smart contracts in Orbiter's security model.
          </div>
          <div className="w-9/12 mt-5 flex flex-col items-start justify-center text-left text-xl text-[#aaabb6]">
            Orbiter Finance is designed as a decentralized cross-rollup bridge
            for transferring Ethereum-native assets. The system has two roles:
            Sender and Maker. The 'Maker' is required to deposit excess margin
            to Orbiter's contract before they can qualify to be a cross-rollup
            service provider to the 'Sender'. In the usual process, the 'Sender'
            sends assets to the 'Maker' on the 'Source Network', and the 'Maker'
            sends back to the 'Sender' on the 'Destination Network'. There are 3
            types of smart contracts in Orbiter's security model.
          </div>
          <div className="w-9/12 mt-5 flex flex-col items-start justify-center text-left text-xl text-[#aaabb6]">
            Orbiter Finance is designed as a decentralized cross-rollup bridge
            for transferring Ethereum-native assets. The system has two roles:
            Sender and Maker. The 'Maker' is required to deposit excess margin
            to Orbiter's contract before they can qualify to be a cross-rollup
            service provider to the 'Sender'. In the usual process, the 'Sender'
            sends assets to the 'Maker' on the 'Source Network', and the 'Maker'
            sends back to the 'Sender' on the 'Destination Network'. There are 3
            types of smart contracts in Orbiter's security model.
          </div>
        </div>
      </div>

      <div className="mt-20 mb-5 w-8/12 flex justify-start flex-wrap gap-5 text-white text-4xl text-left">
        Related articles
      </div>
      <div className=" w-9/12 flex justify-center flex-wrap gap-5">
        <div
          className="flex flex-col items-start w-[420px] mt-10 
                  transform hover:scale-105 transition-transform duration-150 ease-out 
          "
          onClick={() => navigate("/detailed_news")}
        >
          <img src={SecBanner} className="w-full h-[220px]" alt="news banner" />
          <div className="mt-3 text-[#5BDFE4] text-md font-medium text-left">
            Crypto News
          </div>

          <div className="mt-3 text-white text-lg font-semibold text-left">
            Blockchain Technology and Islamic Finance Converge at Istanbul
            Blockchain Week
          </div>

          <div className="mt-3 text-[#aaabb6] text-md font-medium text-left">
            The event showcased the latest developments in AI and Web3, and
            explored the intersection of these technologies
          </div>

          <div className="mt-3 text-white text-lg text-left">
            By Decentralized Dog
          </div>

          <div className="mt-3 text-[#aaabb6] text-[12px] text-left">
            August15, 2021 . 7 ago . 2m
          </div>
        </div>

        <div
          className="flex flex-col items-start w-[420px] mt-10 
                  transform hover:scale-105 transition-transform duration-150 ease-out 
          "
          onClick={() => navigate("/detailed_news")}
        >
          <img
            src={OnlyfansBanner}
            className="w-full h-[220px]"
            alt="news banner"
          />
          <div className="mt-3 text-[#5BDFE4] text-md font-medium text-left">
            Crypto News
          </div>

          <div className="mt-3 text-white text-lg font-semibold text-left">
            Blockchain Technology and Islamic Finance Converge at Istanbul
            Blockchain Week
          </div>

          <div className="mt-3 text-[#aaabb6] text-md font-medium text-left">
            The event showcased the latest developments in AI and Web3, and
            explored the intersection of these technologies
          </div>

          <div className="mt-3 text-white text-lg text-left">
            By Decentralized Dog
          </div>

          <div className="mt-3 text-[#aaabb6] text-[12px] text-left">
            August15, 2021 . 7 ago . 2m
          </div>
        </div>

        <div
          className="flex flex-col items-start w-[420px] mt-10 
                  transform hover:scale-105 transition-transform duration-150 ease-out 
          "
          onClick={() => navigate("/detailed_news")}
        >
          <img
            src={IstanbulBanner}
            className="w-full h-[220px]"
            alt="news banner"
          />
          <div className="mt-3 text-[#5BDFE4] text-md font-medium text-left">
            Crypto News
          </div>

          <div className="mt-3 text-white text-lg font-semibold text-left">
            Blockchain Technology and Islamic Finance Converge at Istanbul
            Blockchain Week
          </div>

          <div className="mt-3 text-[#aaabb6] text-md font-medium text-left">
            The event showcased the latest developments in AI and Web3, and
            explored the intersection of these technologies
          </div>

          <div className="mt-3 text-white text-lg text-left">
            By Decentralized Dog
          </div>

          <div className="mt-3 text-[#aaabb6] text-[12px] text-left">
            August15, 2021 . 7 ago . 2m
          </div>
        </div>
      </div>
      <div className="w-full h-[100px]"></div>
    </div>
  );
};

export default NewsDetails;
