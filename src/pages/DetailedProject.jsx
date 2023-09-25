import ProjectCardPNG from "../assets/projectcard.png";
import OrbitorLogo from "../assets/orbiterlogo.png";
import VerifiedIcon from "../assets/verified.png";
import AvatarIcon from "../assets/Avatar.png";
import PrimaryButton from "../components/PrimaryButton";

import TwitterIcon from "../assets/icon-twitter-fill.png";
import TelegramIcon from "../assets/icon-telegram-fill.png";
import NotificationIcon from "../assets/icon-notification-fill.png";
import HandRedIcon from "../assets/handred.png";
import HandGreenIcon from "../assets/handgreen.png";
import NewsIcon from "../assets/newslogo.png";
import Avatar2PNG from "../assets/avatar2.png";

import DotsIcon from "../assets/dotsicon.png";
import ShieldCrossIcon from "../assets/shieldcrossicon.png";
import ShieldCheckIcon from "../assets/shieldcheckicon.png";

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { useState } from "react";

const DetailedProject = () => {
  const [activeTab, setActiveTab] = useState("details");
  const data = [
    {
      label: "Details",
      value: "details",
      desc: `Orbiter Finance is designed as a decentralized cross-rollup bridge for transferring Ethereum-native assets. The system has two roles: Sender and Maker. The 'Maker' is required to deposit excess margin to Orbiter's contract before they can qualify to be a cross-rollup service provider to the 'Sender'. In the usual process, the 'Sender' sends assets to the 'Maker' on the 'Source Network', and the 'Maker' sends back to the 'Sender' on the 'Destination Network'. There are 3 types of smart contracts in Orbiter's security model. MDC: 'Maker' Deposit Contract, keep Maker’s Margin, handle the arbitration for 'Sender'. EBC: Event Binding Contract, store the margin rules and Makers’ charging standards. SPV: Simple Payment Verification. This proves the existence of the transaction in Orbiter. Orbiter's technology creates SPV for every domain supported. MDC, EBC, and all the SPVs are deployed on one domain that supports smart contracts in the Ethereum ecosystem. Learn more details by reading Technology.`,
    },
    {
      label: "Comments",
      value: "comments",
      desc: ``,
    },
  ];

  return (
    <div className="w-full min-h-[100vh] px-10  flex flex-col items-center ">
      <div className="container">
        <div className="relative">
          <img
            src={ProjectCardPNG}
            className="min-w-full rounded-lg "
            alt="project banner"
          />
        </div>
        <div className="flex justify-start pl-[50px] relative">
          <div
            className="absolute z-20  rounded-full 
              -mt-[50px] overflow-hidden "
          >
            <img
              src={OrbitorLogo}
              className="w-[170px] rounded-full border-none z-5 "
              alt="project logo"
            />
          </div>
          <div className="w-full flex md:flex-row md:justify-end ">
            <div className="flex justify-between w-[1080px] mt-5">
              <div className="flex flex-col ">
                <div className="flex items-center">
                  <span className="text-white text-2xl font-semibold ">
                    Orbiter Finance
                  </span>
                  <img
                    src={VerifiedIcon}
                    alt="verified"
                    className="w-6 h-6 ml-2"
                  />
                </div>
                <div className="mt-2 text-sm font-normal text-[#cecfc5] text-left">
                  Launch Date: already live
                </div>
                <div className="flex mt-3 text-[#cecfc5] gap-1 text-[12px] ">
                  <div className="h-[28px] px-3 rounded-3xl border-[#cecfc5] border-[1px] flex justify-center items-center ">
                    Bridge
                  </div>
                  <div className="h-[28px] px-3 rounded-3xl border-[#cecfc5] border-[1px] flex justify-center items-center">
                    ETH
                  </div>
                  <div className="h-[28px] px-3 rounded-3xl border-[#cecfc5] border-[1px] flex justify-center items-center">
                    MultiChain
                  </div>
                </div>

                <div className="mt-3 flex ">
                  <div className="flex relative">
                    <img src={AvatarIcon} className="w-8 h-8  " alt="avatar" />
                    <img
                      src={AvatarIcon}
                      className="w-8 h-8 absolute left-4 "
                      alt="avatar"
                    />
                  </div>

                  <div className="text-[#cecfc5] text-left ml-8 ">
                    Followed by LL United Club, Wall Street<br></br> Baby, and 8
                    others you follow
                  </div>
                </div>
              </div>
              <div className="flex  gap-4 ">
                <div className="flex flex-col  mt-6 ">
                  <div className="text-[#aaabb6] text-lg min-w-30 h-12 flex flex-col justify-center">
                    <div className="text-left text-sm font-medium">
                      Contract
                    </div>
                  </div>
                  <div className="text-[#aaabb6] text-lg min-w-30 h-12 flex flex-col justify-center">
                    <div className="text-left text-sm font-medium">
                      Dextools.io
                    </div>
                  </div>
                  <div className="text-[#aaabb6] text-lg min-w-30 h-12 flex flex-col justify-center ">
                    <div className="text-left text-sm font-medium">
                      Site web
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-between mt-6 h-36">
                  <input
                    disabled={true}
                    value={"0x4a2ed6fd89g25v69......3b9c"}
                    className="ml-3 bg-[#1D1D25] px-4 py-2 rounded-xl text-white text-sm"
                  ></input>
                  <input
                    disabled={true}
                    value={"https://www.dextools.io"}
                    className="ml-3 bg-[#1D1D25] px-4 py-2 rounded-xl text-white text-sm"
                  ></input>
                  <input
                    disabled={true}
                    value={"www.orbiter.finance"}
                    className="ml-3 bg-[#1D1D25] px-4 py-2 rounded-xl text-white text-sm"
                  ></input>
                </div>
              </div>
              <div className="flex flex-col text-white items-end justify-around pt-8">
                <div className="flex items-center ">
                  <div className="text-sm">543 Following</div>
                  <PrimaryButton
                    label="Follow"
                    className="text-white w-[152px] h-[43px] ml-4 text-sm font-semibold rounded-full"
                  />
                </div>
                <div className="flex justify-end">
                  <div className="text-sm">Share:</div>
                  <img
                    src={TwitterIcon}
                    className="ml-3 w-4 h-4"
                    alt="twitter icon"
                  />
                  <img
                    src={TelegramIcon}
                    className="ml-3 w-4 h-4"
                    alt="telegram icon"
                  />
                  <img
                    src={NotificationIcon}
                    className="ml-3 w-4 h-4"
                    alt="notification icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10"></div>
        <Tabs value={activeTab}>
          <TabsHeader
            className="rounded-none border-b border-[#43465E] bg-transparent p-0 w-4/12          
          "
            indicatorProps={{
              className:
                "bg-transparent border-b-2 border-blue-400 shadow-none rounded-none ",
            }}
          >
            {data.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                onClick={() => setActiveTab(value)}
                className={"text-white text-[20px] font-semibold"}
              >
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            <TabPanel
              key={"details"}
              value={"details"}
              className="text-[#aaabb6] text-[16px] "
            >
              {`Orbiter Finance is designed as a decentralized cross-rollup bridge for transferring Ethereum-native assets. The system has two roles: Sender and Maker. The 'Maker' is required to deposit excess margin to Orbiter's contract before they can qualify to be a cross-rollup service provider to the 'Sender'. In the usual process, the 'Sender' sends assets to the 'Maker' on the 'Source Network', and the 'Maker' sends back to the 'Sender' on the 'Destination Network'. There are 3 types of smart contracts in Orbiter's security model. MDC: 'Maker' Deposit Contract, keep Maker’s Margin, handle the arbitration for 'Sender'. EBC: Event Binding Contract, store the margin rules and Makers’ charging standards. SPV: Simple Payment Verification. This proves the existence of the transaction in Orbiter. Orbiter's technology creates SPV for every domain supported. MDC, EBC, and all the SPVs are deployed on one domain that supports smart contracts in the Ethereum ecosystem. Learn more details by reading Technology.`}

              <div className="mt-10 flex items-center justify-between">
                <div className="mt-3 flex ">
                  <div className="flex relative">
                    <img
                      src={AvatarIcon}
                      className="w-[42px] h-[42px]  "
                      alt="avatar"
                    />
                    <img
                      src={AvatarIcon}
                      className="w-[42px] h-[42px] absolute left-8 "
                      alt="avatar"
                    />
                    <img
                      src={AvatarIcon}
                      className="w-[42px] h-[42px] absolute left-14 "
                      alt="avatar"
                    />
                  </div>

                  <div className="text-[#cecfc5] text-left ml-24 text-sm">
                    Followed by LL United Club, Wall Street<br></br> Baby, and 8
                    others you follow
                  </div>
                </div>
                <div className="w-48 flex flex-col">
                  <div className="text-white font-bold text-lg text-[19px]">
                    LIKE AND DISLIKE
                  </div>
                  <div className="flex w-full mt-2">
                    <div className="bg-[#17C671] w-[87.0%] h-[8px] rounded-s-md"></div>
                    <div className="bg-[#BC1729] w-[13.0%] h-[8px] rounded-e-md"></div>
                  </div>
                  <div className="flex justify-between mt-4">
                    <div className="flex text-sm text-[#17C671] items-center">
                      <img
                        src={HandGreenIcon}
                        className="w-[24px] h-[24px] mr-1"
                      />
                      87.0%
                    </div>
                    <div className="flex text-sm text-[#BC1729]  items-center">
                      13.0%
                      <img
                        src={HandRedIcon}
                        className="w-[24px] h-[24px]  ml-1"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-2xl font-bold my-10 text-white text-left">
                Last News
              </div>
              <div className="flex flex-wrap w-full justify-between gap-x-10 gap-y-10">
                <div className="flex text-white items-center ">
                  <img src={NewsIcon} className="w-10 h-10" alt="news icon" />
                  <div className="flex flex-col items-start ml-3 ">
                    <span className="text-sm text-[#aaabb6]">
                      Kevin Chisholm in Flutter
                    </span>
                    <span className="text-[18px]">
                      What’s new in Flutter 3.13
                    </span>
                    <span className="text-sm text-[#aaabb6]">
                      Aug 17 · 12 min read
                    </span>
                  </div>
                </div>

                <div className="flex text-white items-center ">
                  <img src={NewsIcon} className="w-10 h-10" alt="news icon" />
                  <div className="flex flex-col items-start ml-3 ">
                    <span className="text-sm text-[#aaabb6]">
                      Kevin Chisholm in Flutter
                    </span>
                    <span className="text-[18px]">
                      What’s new in Flutter 3.13
                    </span>
                    <span className="text-sm text-[#aaabb6]">
                      Aug 17 · 12 min read
                    </span>
                  </div>
                </div>

                <div className="flex text-white items-center ">
                  <img src={NewsIcon} className="w-10 h-10" alt="news icon" />
                  <div className="flex flex-col items-start ml-3 ">
                    <span className="text-sm text-[#aaabb6]">
                      Kevin Chisholm in Flutter
                    </span>
                    <span className="text-[18px]">
                      What’s new in Flutter 3.13
                    </span>
                    <span className="text-sm text-[#aaabb6]">
                      Aug 17 · 12 min read
                    </span>
                  </div>
                </div>
                <div className="flex text-white items-center ">
                  <img src={NewsIcon} className="w-10 h-10" alt="news icon" />
                  <div className="flex flex-col items-start ml-3 ">
                    <span className="text-sm text-[#aaabb6]">
                      Kevin Chisholm in Flutter
                    </span>
                    <span className="text-[18px]">
                      What’s new in Flutter 3.13
                    </span>
                    <span className="text-sm text-[#aaabb6]">
                      Aug 17 · 12 min read
                    </span>
                  </div>
                </div>

                <div className="flex text-white items-center ">
                  <img src={NewsIcon} className="w-10 h-10" alt="news icon" />
                  <div className="flex flex-col items-start ml-3 ">
                    <span className="text-sm text-[#aaabb6]">
                      Kevin Chisholm in Flutter
                    </span>
                    <span className="text-[18px]">
                      What’s new in Flutter 3.13
                    </span>
                    <span className="text-sm text-[#aaabb6]">
                      Aug 17 · 12 min read
                    </span>
                  </div>
                </div>

                <div className="flex text-white items-center ">
                  <img src={NewsIcon} className="w-10 h-10" alt="news icon" />
                  <div className="flex flex-col items-start ml-3 ">
                    <span className="text-sm text-[#aaabb6]">
                      Kevin Chisholm in Flutter
                    </span>
                    <span className="text-[18px]">
                      What’s new in Flutter 3.13
                    </span>
                    <span className="text-sm text-[#aaabb6]">
                      Aug 17 · 12 min read
                    </span>
                  </div>
                </div>
                <div className="flex text-white items-center">
                  <img src={NewsIcon} className="w-10 h-10" alt="news icon" />
                  <div className="flex flex-col items-start ml-3 ">
                    <span className="text-sm text-[#aaabb6]">
                      Kevin Chisholm in Flutter
                    </span>
                    <span className="text-[18px]">
                      What’s new in Flutter 3.13
                    </span>
                    <span className="text-sm text-[#aaabb6]">
                      Aug 17 · 12 min read
                    </span>
                  </div>
                </div>

                <div className="flex text-white items-center ">
                  <img src={NewsIcon} className="w-10 h-10" alt="news icon" />
                  <div className="flex flex-col items-start ml-3 ">
                    <span className="text-sm text-[#aaabb6]">
                      Kevin Chisholm in Flutter
                    </span>
                    <span className="text-[18px]">
                      What’s new in Flutter 3.13
                    </span>
                    <span className="text-sm text-[#aaabb6]">
                      Aug 17 · 12 min read
                    </span>
                  </div>
                </div>

                <div className="flex text-white items-center">
                  <img src={NewsIcon} className="w-10 h-10" alt="news icon" />
                  <div className="flex flex-col items-start ml-3 ">
                    <span className="text-sm text-[#aaabb6]">
                      Kevin Chisholm in Flutter
                    </span>
                    <span className="text-[18px]">
                      What’s new in Flutter 3.13
                    </span>
                    <span className="text-sm text-[#aaabb6]">
                      Aug 17 · 12 min read
                    </span>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel
              key={"comments"}
              value={"comments"}
              className="text-[#aaabb6]"
            >
              <div className="w-full flex justify-between mt-3 text-[18px] font-semibold">
                <div className="text-white">12.6K Comments</div>
                <PrimaryButton
                  label={"Add Comment"}
                  className={
                    "w-[169px] h-12 text-white rounded-full text-sm font-semibold"
                  }
                />
              </div>
              <div className="w-full mt-5">
                <div className="flex justify-between border-b-[#43465E] border-b-[1px] py-5">
                  <div className="flex justify-start">
                    <img
                      src={Avatar2PNG}
                      className="w-[88px] h-[88px]"
                      alt="avatar"
                    ></img>
                    <div className="flex flex-col ml-5">
                      <div className="text-white text-left text-[20px] font-medium ">
                        Aurelien H
                      </div>
                      <div className="text-[#aaabb6] text-sm text-left">
                        The NFT began as a group of extraordinary individuals
                        who were assembled to defeat Loki and his Chitauri army
                        in New York City. Since then, the team has expanded its
                        roster The NFT began as a group of extraordinary
                        individuals who were assembled to defeat Loki and his
                        Chitauri ..
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between items-end px-5">
                    <img src={DotsIcon} className="w-5 h-5" alt="dot icon" />
                    <div className="flex gap-3">
                      <img
                        src={ShieldCrossIcon}
                        className="w-5 h-5"
                        alt="cross icon"
                      />
                      <img
                        src={ShieldCheckIcon}
                        className="w-5 h-5"
                        alt="check icon"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-between border-b-[#43465E] border-b-[1px] py-5">
                  <div className="flex justify-start">
                    <img
                      src={Avatar2PNG}
                      className="w-[88px] h-[88px]"
                      alt="avatar"
                    ></img>
                    <div className="flex flex-col ml-5">
                      <div className="text-white text-left text-[20px] font-medium ">
                        Aurelien H
                      </div>
                      <div className="text-[#aaabb6] text-sm text-left">
                        The NFT began as a group of extraordinary individuals
                        who were assembled to defeat Loki and his Chitauri army
                        in New York City. Since then, the team has expanded its
                        roster The NFT began as a group of extraordinary
                        individuals who were assembled to defeat Loki and his
                        Chitauri ..
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between items-end px-5">
                    <img src={DotsIcon} className="w-5 h-5" alt="dot icon" />
                    <div className="flex gap-3">
                      <img
                        src={ShieldCrossIcon}
                        className="w-5 h-5"
                        alt="cross icon"
                      />
                      <img
                        src={ShieldCheckIcon}
                        className="w-5 h-5"
                        alt="check icon"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-between border-b-[#43465E] border-b-[1px] py-5">
                  <div className="flex justify-start">
                    <img
                      src={Avatar2PNG}
                      className="w-[88px] h-[88px]"
                      alt="avatar"
                    ></img>
                    <div className="flex flex-col ml-5">
                      <div className="text-white text-left text-[20px] font-medium ">
                        Aurelien H
                      </div>
                      <div className="text-[#aaabb6] text-sm text-left">
                        The NFT began as a group of extraordinary individuals
                        who were assembled to defeat Loki and his Chitauri army
                        in New York City. Since then, the team has expanded its
                        roster The NFT began as a group of extraordinary
                        individuals who were assembled to defeat Loki and his
                        Chitauri ..
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between items-end px-5">
                    <img src={DotsIcon} className="w-5 h-5" alt="dot icon" />
                    <div className="flex gap-3">
                      <img
                        src={ShieldCrossIcon}
                        className="w-5 h-5"
                        alt="cross icon"
                      />
                      <img
                        src={ShieldCheckIcon}
                        className="w-5 h-5"
                        alt="check icon"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-between border-b-[#43465E] border-b-[1px] py-5">
                  <div className="flex justify-start">
                    <img
                      src={Avatar2PNG}
                      className="w-[88px] h-[88px]"
                      alt="avatar"
                    ></img>
                    <div className="flex flex-col ml-5">
                      <div className="text-white text-left text-[20px] font-medium ">
                        Aurelien H
                      </div>
                      <div className="text-[#aaabb6] text-sm text-left">
                        The NFT began as a group of extraordinary individuals
                        who were assembled to defeat Loki and his Chitauri army
                        in New York City. Since then, the team has expanded its
                        roster The NFT began as a group of extraordinary
                        individuals who were assembled to defeat Loki and his
                        Chitauri ..
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between items-end px-5">
                    <img src={DotsIcon} className="w-5 h-5" alt="dot icon" />
                    <div className="flex gap-3">
                      <img
                        src={ShieldCrossIcon}
                        className="w-5 h-5"
                        alt="cross icon"
                      />
                      <img
                        src={ShieldCheckIcon}
                        className="w-5 h-5"
                        alt="check icon"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-between border-b-[#43465E] border-b-[1px] py-5">
                  <div className="flex justify-start">
                    <img
                      src={Avatar2PNG}
                      className="w-[88px] h-[88px]"
                      alt="avatar"
                    ></img>
                    <div className="flex flex-col ml-5">
                      <div className="text-white text-left text-[20px] font-medium ">
                        Aurelien H
                      </div>
                      <div className="text-[#aaabb6] text-sm text-left">
                        The NFT began as a group of extraordinary individuals
                        who were assembled to defeat Loki and his Chitauri army
                        in New York City. Since then, the team has expanded its
                        roster The NFT began as a group of extraordinary
                        individuals who were assembled to defeat Loki and his
                        Chitauri ..
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between items-end px-5">
                    <img src={DotsIcon} className="w-5 h-5" alt="dot icon" />
                    <div className="flex gap-3">
                      <img
                        src={ShieldCrossIcon}
                        className="w-5 h-5"
                        alt="cross icon"
                      />
                      <img
                        src={ShieldCheckIcon}
                        className="w-5 h-5"
                        alt="check icon"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <input
                type="string"
                placeholder="Type here..."
                className="mt-10 w-full min-h-[135px] rounded-xl border-[#4C4C56] border-[1px] bg-[#1D1D25]
              focus:border-[#4C4C56] focus:border-[1px] text-white px-2
              "
              />
              <div className="flex justify-start">
                <PrimaryButton
                  className="w-36 h-12 rounded-3xl mt-5 text-white font-bold"
                  label={"Submit"}
                />
              </div>
            </TabPanel>
          </TabsBody>
        </Tabs>
      </div>
    </div>
  );
};

export default DetailedProject;
