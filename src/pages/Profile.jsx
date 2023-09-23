import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { useState } from "react";
import AvatarImg from "../assets/avatar2.png";
import VerifiedBlueTick from "../assets/VerifiedBlueTick.png";
import CopyIcon from "../assets/copy.svg";
import GoOutsideIcon from "../assets/gooutsideicon.png";
import PrimaryButton from "../components/PrimaryButton";
import ArrowUpRight from "../assets/arrow-up-right.png";
import Editicon from "../assets/editicon.png";
import EyeOffSVG from "../assets/eye-off.svg";
import CopySVG from "../assets/copy.svg";
import ProductSlider from "../components/ProductSlider/ProductSlider";
import { exampleItems } from "./Home";
import { Switch } from "@material-tailwind/react";

const Profile = () => {
  const data = [
    {
      label: "My details",
      value: "my details",
    },
    {
      label: "My Crypto Projects",
      value: "my crypto projects",
    },
    {
      label: "Password",
      value: "password",
    },
    {
      label: "Notifications",
      value: "notifications",
    },
    {
      label: "Feed",
      value: "feed",
    },
    {
      label: "Theme",
      value: "theme",
    },
    {
      label: "Version",
      value: "version",
    },
  ];

  const [activeTab, setActiveTab] = useState("my details");
  const [isInEditionOfProofile, setIsInEditionOfProfile] = useState(false);
  const [nftActivity, setNftActivity] = useState(false);
  const [shitcoinActivity, setShitcoinActivity] = useState(false);
  const [englishActivity, setEnglichActivity] = useState(false);
  const [defiActivity, setDefiActivity] = useState(false);
  const [ohmActivity, setOhmActivity] = useState(false);
  const [ethActivity, setEthActivity] = useState(false);

  return (
    <div className="w-full min-h-[100vh]">
      <div className="mt-5 text-white font-bold text-xl border-b-[#4C4C56] border-[1px] pb-4 text-left px-10">
        Settings
      </div>
      <Tabs value="html" orientation="vertical" className="px-10 mt-8">
        <TabsHeader
          className="w-56 px-6 py-6 border-[#1D1D25] border-[1px] rounded-xl bg-[#1D1D25] min-h-[70vh]  "
          indicatorProps={{
            className: "bg-[#666875] shadow-none ",
          }}
        >
          {data.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => setActiveTab(value)}
              className={
                activeTab === value ? "text-white " : "text-[#aaabb6] "
              }
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          <TabPanel
            key={"my details"}
            value={"my details"}
            className="py-0 px-10 min-h-[100vh]"
          >
            <div className="flex justify-between pb-5 border-b-[#4C4C56] border-b-[1px]">
              <div className="flex justify-start ">
                <div className="relative">
                  <img
                    src={AvatarImg}
                    className="w-40 h-40 rounded-full "
                    alt="user avatar"
                  />
                  {isInEditionOfProofile === false ? (
                    <img
                      src={VerifiedBlueTick}
                      className="w-8 h-8 absolute bottom-0 right-4"
                      alt="verified icon"
                    />
                  ) : (
                    <img
                      src={Editicon}
                      className="w-8 h-8 absolute bottom-0 right-4"
                      alt="verified icon"
                    />
                  )}
                </div>
                <div className="flex flex-col ml-4 justify-center">
                  <div className="text-3xl text-white text-left">
                    Jenifer Loren
                  </div>
                  <div className="text-[#aaabb6] flex items-center">
                    0x4a2e0x4a2e0x4a2e...0x4a2e3b9c
                    <img
                      src={CopyIcon}
                      className="ml-2 w-4 h-4"
                      alt="copy icon"
                    />
                  </div>
                  {isInEditionOfProofile === false ? (
                    <div className="flex items-center ">
                      <div className="mt-8 flex gap-10">
                        <div className="flex flex-col">
                          <div className="bg-gradient-to-r from-[#5BDFE4] to-[#024CAD] bg-clip-text text-transparent text-3xl font-semibold">
                            899
                          </div>
                          <div className="text-[#aaabb6] flex">Following</div>
                        </div>
                        <div className="flex flex-col">
                          <div className="bg-gradient-to-r from-[#5BDFE4] to-[#024CAD] bg-clip-text text-transparent text-3xl font-semibold">
                            1.5k
                          </div>
                          <div className="text-[#aaabb6]">Followers</div>
                        </div>
                        <div className="flex flex-col">
                          <div className="bg-gradient-to-r from-[#5BDFE4] to-[#024CAD] bg-clip-text text-transparent text-3xl font-semibold">
                            1.3k
                          </div>
                          <div className="text-[#aaabb6]">Dcoins</div>
                        </div>
                      </div>
                      <PrimaryButton
                        className={"w-28 h-10 text-white font-bold ml-10 mt-8"}
                        label={"Follow"}
                      />
                      <img
                        src={GoOutsideIcon}
                        className="w-10 h-10 ml-5 mt-8"
                        alt="go outside icon"
                      />
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <div className="flex justify-end">
                {isInEditionOfProofile === false ? (
                  <button
                    className={"bg-[#666875] w-24 h-10 rounded-lg text-white"}
                    onClick={() => setIsInEditionOfProfile(true)}
                  >
                    Edit
                  </button>
                ) : (
                  <></>
                )}
              </div>
            </div>
            {isInEditionOfProofile === false ? (
              <>
                <div className="text-[#aaabb6] my-5 text-left">
                  The Avengers began as a group of extraordinary his Chitauri
                  army in New York City rosterThe Avengers began as a group of
                  extraordinary his Chitauri army in New York City rosteThe
                  Avengers began as a group of extraordinary his Chitauri army
                  in New York City rosteThe Avengers began as Chitauri army in
                  New York City rosteThe Avengers began as a group of
                  extraordinary his Chitauri army in New York City rosteThe
                  Avengers began as a group of extraordinary his Chitauri army
                  in New York City roste...{" "}
                  <span className="text-white">More</span>
                </div>
                <div className="bg-[#4C4C56] rounded-xl text-[#aaabb6] px-10 py-5">
                  <table>
                    <thead>
                      <th>Website</th>
                      <th>Portfolio</th>
                      <th>Email</th>
                    </thead>
                    <tbody>
                      <tr className="text-white">
                        <td className="px-5">
                          <div className="flex items-center">
                            zahirmays.com
                            <img
                              src={ArrowUpRight}
                              className="w-5 h-5 ml-2"
                              alt="arror up icon"
                            ></img>
                          </div>
                        </td>
                        <td className="px-5">
                          <div className="flex items-center">
                            @zahir
                            <img
                              src={ArrowUpRight}
                              className="w-5 h-5 ml-2"
                              alt="arror up icon"
                            ></img>
                          </div>
                        </td>
                        <td className="px-5">
                          <div className="flex items-center">
                            hello@zahirmays.com
                            <img
                              src={ArrowUpRight}
                              className="w-5 h-5 ml-2"
                              alt="arror up icon"
                            ></img>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </>
            ) : (
              <div className="flex justify-center">
                <div className="w-6/12 ">
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
                      <img
                        src={EyeOffSVG}
                        alt="eyeoff"
                        className="w-6 h-6"
                      ></img>
                    </div>
                  </div>
                  <div className="mt-3 rounded-[16px] border-[1px] border-[#35383d] min-w-[480px] min-h-[64px] flex  px-4 justify-between">
                    <div className="flex flex-col items-start justify-center ">
                      <div className="text-[#aaabb6] text-sm">
                        Wallet address
                      </div>
                      <input
                        placeholder="wallet address"
                        className="text-white text-md bg-transparent border-none w-full hover:border-none focus:border-none"
                        value="0x4a2ed6fd89g25v69......3b9c"
                      ></input>
                    </div>
                    <div className=" min-h-[64px] flex flex-col justify-center">
                      <img
                        src={CopySVG}
                        alt="copybutton"
                        className="w-6 h-6"
                      ></img>
                    </div>
                  </div>
                  <div className="pb-10 w-full flex justify-between">
                    <button
                      className="mt-5 w-6/12 mr-1 min-h-[56px] text-white bg-transparent rounded-2xl border-[2px] border-[#aaabb6]"
                      onClick={() => setIsInEditionOfProfile(false)}
                    >
                      Back
                    </button>
                    <PrimaryButton
                      className="mt-5 w-6/12 ml-1 min-h-[56px] text-white"
                      label="Save"
                    />
                  </div>
                </div>
              </div>
            )}
          </TabPanel>
          <TabPanel
            key={"my crypto projects"}
            value={"my crypto projects"}
            className="py-0 px-10 min-h-[100vh]"
          >
            <div className="text-lg text-white text-left ml-10">
              My projects
            </div>

            <ProductSlider items={exampleItems} hideArrow={true} />

            <ProductSlider items={exampleItems} hideArrow={true} />

            <ProductSlider items={exampleItems} hideArrow={true} />

            <ProductSlider items={exampleItems} hideArrow={true} />
          </TabPanel>
          <TabPanel
            key={"password"}
            value={"password"}
            className="py-0 px-10 min-h-[100vh]"
          >
            <div className="text-lg text-white text-center ml-10">
              Change password
            </div>
            <div className="w-full flex justify-center">
              <div className="w-6/12">
                <div className="mt-3 rounded-[16px] border-[1px] border-[#35383d] min-w-[480px] min-h-[64px] flex  px-4 justify-between">
                  <div className="flex flex-col items-start justify-center ">
                    <div className="text-[#aaabb6] text-sm">
                      Current Password
                    </div>
                    <input
                      placeholder="Type here..."
                      type="password"
                      className="text-white text-md bg-transparent border-none w-full hover:border-none focus:border-none"
                    ></input>
                  </div>
                  <div className=" min-h-[64px] flex flex-col justify-center">
                    <img src={EyeOffSVG} alt="eyeoff" className="w-6 h-6"></img>
                  </div>
                </div>
                <div className="mt-3 rounded-[16px] border-[1px] border-[#35383d] min-w-[480px] min-h-[64px] flex  px-4 justify-between">
                  <div className="flex flex-col items-start justify-center ">
                    <div className="text-[#aaabb6] text-sm">New Password</div>
                    <input
                      placeholder="Type here..."
                      type="password"
                      className="text-white text-md bg-transparent border-none w-full hover:border-none focus:border-none"
                    ></input>
                  </div>
                  <div className=" min-h-[64px] flex flex-col justify-center">
                    <img src={EyeOffSVG} alt="eyeoff" className="w-6 h-6"></img>
                  </div>
                </div>
                <div className="mt-3 rounded-[16px] border-[1px] border-[#35383d] min-w-[480px] min-h-[64px] flex  px-4 justify-between">
                  <div className="flex flex-col items-start justify-center ">
                    <div className="text-[#aaabb6] text-sm">
                      Confirm New Password
                    </div>
                    <input
                      placeholder="Type here..."
                      type="password"
                      className="text-white text-md bg-transparent border-none w-full hover:border-none focus:border-none"
                    ></input>
                  </div>
                  <div className=" min-h-[64px] flex flex-col justify-center">
                    <img src={EyeOffSVG} alt="eyeoff" className="w-6 h-6"></img>
                  </div>
                </div>
                <PrimaryButton
                  label={"Save"}
                  className={"mt-5 w-1/2 h-12 text-white font-bold"}
                />
              </div>
            </div>
          </TabPanel>
          <TabPanel
            key={"notifications"}
            value={"notifications"}
            className="py-0 px-10 min-h-[100vh]"
          >
            <div className="text-lg text-white text-left">Notifications</div>
            <div className="bg-[#1D1D25] rounded-2xl px-5 py-8 mt-5 w-full ">
              <div className="pb-5 border-b-[1px] border-b-[#4C4C56]">
                <div className="text-white text-left">
                  Notification settings
                </div>
                <div className="text-[#aaabb6] text-left">
                  We may still send you important notifications about your
                  account outside of your notification settings.
                </div>
              </div>
              <div className="pb-5 border-b-[1px] border-b-[#4C4C56] pt-5 flex w-full justify-between">
                <div className="">
                  <div className="text-white text-left">Comments</div>
                  <div className="text-[#aaabb6] text-left">
                    These are notifications for comments on your posts and
                    replies to your comments.
                  </div>
                </div>
                <div className="flex flex-col mr-5">
                  <div className="flex">
                    <Switch color="blue" defaultChecked />
                    <div className="ml-10 text-white">Push</div>
                  </div>
                  <div className="flex">
                    <Switch color="red" defaultChecked />
                    <div className="ml-10 text-white">Email</div>
                  </div>
                  <div className="flex">
                    <Switch color="green" defaultChecked />
                    <div className="ml-10 text-white">SMS</div>
                  </div>
                </div>
              </div>

              <div className="pb-5 border-b-[1px] border-b-[#4C4C56] pt-5 flex w-full justify-between">
                <div className="">
                  <div className="text-white text-left">Tags</div>
                  <div className="text-[#aaabb6] text-left">
                    These are notifications for comments on your posts and
                    replies to your comments.
                  </div>
                </div>
                <div className="flex flex-col mr-5">
                  <div className="flex">
                    <Switch color="blue" defaultChecked />
                    <div className="ml-10 text-white">Push</div>
                  </div>
                  <div className="flex">
                    <Switch color="red" defaultChecked />
                    <div className="ml-10 text-white">Email</div>
                  </div>
                  <div className="flex">
                    <Switch color="green" defaultChecked />
                    <div className="ml-10 text-white">SMS</div>
                  </div>
                </div>
              </div>

              <div className="pb-5 border-b-[1px] border-b-[#4C4C56] pt-5 flex w-full justify-between">
                <div className="">
                  <div className="text-white text-left">Reminders</div>
                  <div className="text-[#aaabb6] text-left">
                    These are notifications for comments on your posts and
                    replies to your comments.
                  </div>
                </div>
                <div className="flex flex-col mr-5">
                  <div className="flex">
                    <Switch color="blue" defaultChecked />
                    <div className="ml-10 text-white">Push</div>
                  </div>
                  <div className="flex">
                    <Switch color="red" defaultChecked />
                    <div className="ml-10 text-white">Email</div>
                  </div>
                  <div className="flex">
                    <Switch color="green" defaultChecked />
                    <div className="ml-10 text-white">SMS</div>
                  </div>
                </div>
              </div>

              <div className="pb-5 pt-5 flex w-full justify-between">
                <div className="">
                  <div className="text-white text-left">
                    Mare activity about you
                  </div>
                  <div className="text-[#aaabb6] text-left">
                    These are notifications for comments on your posts and
                    replies to your comments.
                  </div>
                </div>
                <div className="flex flex-col mr-5">
                  <div className="flex">
                    <Switch color="blue" defaultChecked />
                    <div className="ml-10 text-white">Push</div>
                  </div>
                  <div className="flex">
                    <Switch color="red" defaultChecked />
                    <div className="ml-10 text-white">Email</div>
                  </div>
                  <div className="flex">
                    <Switch color="green" defaultChecked />
                    <div className="ml-10 text-white">SMS</div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel
            key={"feed"}
            value={"feed"}
            className="py-0 px-10 min-h-[100vh]"
          >
            <div className="flex justify-between items-center border-b-[#4C4C56] border-b-[1px] pb-5 ">
              <div className="flex flex-col">
                <div className="text-lg text-white text-left">Feed</div>
                <div className="text-sm text-[#CECFD5] text-left">
                  You can select that you want to show on home page
                </div>
              </div>
              <PrimaryButton className={"w-24 h-10 text-white "} label="Save" />
            </div>
            <div className="mt-8">
              <div className="text-white text-left text-lg font-bold">
                Category
              </div>
              <div className="flex flex-wrap">
                <div
                  className={`
                    ${
                      nftActivity
                        ? "bg-transparent border-[1px] rounded-lg border-[#CECFD5] text-[#CECFD5]"
                        : "bg-gradient-to-r from-[#5BDFE4] to-[#024CAD] rounded-lg text-white"
                    }
                      px-3 py-2 my-3 mx-3
                      `}
                  onClick={() => setNftActivity(!nftActivity)}
                >
                  NFT
                </div>
                <div
                  className={`
                  ${
                    shitcoinActivity
                      ? "bg-transparent border-[1px] rounded-lg border-[#CECFD5] text-[#CECFD5]"
                      : "bg-gradient-to-r from-[#5BDFE4] to-[#024CAD] rounded-lg text-white"
                  }
                    px-3 py-2 my-3 mx-3
                    `}
                  onClick={() => setShitcoinActivity(!shitcoinActivity)}
                >
                  Shitcoin
                </div>
                <div
                  className={`
                  ${
                    englishActivity
                      ? "bg-transparent border-[1px] rounded-lg border-[#CECFD5] text-[#CECFD5]"
                      : "bg-gradient-to-r from-[#5BDFE4] to-[#024CAD] rounded-lg text-white"
                  }
                    px-3 py-2 my-3 mx-3
                    `}
                  onClick={() => setEnglichActivity(!englishActivity)}
                >
                  English
                </div>
                <div
                  className={`
                  ${
                    defiActivity
                      ? "bg-transparent border-[1px] rounded-lg border-[#CECFD5] text-[#CECFD5]"
                      : "bg-gradient-to-r from-[#5BDFE4] to-[#024CAD] rounded-lg text-white"
                  }
                    px-3 py-2 my-3 mx-3
                    `}
                  onClick={() => setDefiActivity(!defiActivity)}
                >
                  Defi
                </div>
                <div
                  className={`
                    ${
                      ohmActivity
                        ? "bg-transparent border-[1px] rounded-lg border-[#CECFD5] text-[#CECFD5]"
                        : "bg-gradient-to-r from-[#5BDFE4] to-[#024CAD] rounded-lg text-white"
                    }
                      px-3 py-2 my-3 mx-3
                      `}
                  onClick={() => setOhmActivity(!ohmActivity)}
                >
                  OHM
                </div>
                <div
                  className={`
                    ${
                      ethActivity
                        ? "bg-transparent border-[1px] rounded-lg border-[#CECFD5] text-[#CECFD5]"
                        : "bg-gradient-to-r from-[#5BDFE4] to-[#024CAD] rounded-lg text-white"
                    }
                      px-3 py-2 my-3 mx-3
                      `}
                  onClick={() => setEthActivity(!ethActivity)}
                >
                  ETH
                </div>
                <div
                  className={`
                    ${
                      nftActivity
                        ? "bg-transparent border-[1px] rounded-lg border-[#CECFD5] text-[#CECFD5]"
                        : "bg-gradient-to-r from-[#5BDFE4] to-[#024CAD] rounded-lg text-white"
                    }
                      px-3 py-2 my-3 mx-3
                      `}
                  onClick={() => setNftActivity(!nftActivity)}
                >
                  NFT
                </div>
                <div
                  className={`
                  ${
                    shitcoinActivity
                      ? "bg-transparent border-[1px] rounded-lg border-[#CECFD5] text-[#CECFD5]"
                      : "bg-gradient-to-r from-[#5BDFE4] to-[#024CAD] rounded-lg text-white"
                  }
                    px-3 py-2 my-3 mx-3
                    `}
                  onClick={() => setShitcoinActivity(!shitcoinActivity)}
                >
                  Shitcoin
                </div>
                <div
                  className={`
                  ${
                    englishActivity
                      ? "bg-transparent border-[1px] rounded-lg border-[#CECFD5] text-[#CECFD5]"
                      : "bg-gradient-to-r from-[#5BDFE4] to-[#024CAD] rounded-lg text-white"
                  }
                    px-3 py-2 my-3 mx-3
                    `}
                  onClick={() => setEnglichActivity(!englishActivity)}
                >
                  English
                </div>
                <div
                  className={`
                  ${
                    defiActivity
                      ? "bg-transparent border-[1px] rounded-lg border-[#CECFD5] text-[#CECFD5]"
                      : "bg-gradient-to-r from-[#5BDFE4] to-[#024CAD] rounded-lg text-white"
                  }
                    px-3 py-2 my-3 mx-3
                    `}
                  onClick={() => setDefiActivity(!defiActivity)}
                >
                  Defi
                </div>
                <div
                  className={`
                    ${
                      ohmActivity
                        ? "bg-transparent border-[1px] rounded-lg border-[#CECFD5] text-[#CECFD5]"
                        : "bg-gradient-to-r from-[#5BDFE4] to-[#024CAD] rounded-lg text-white"
                    }
                      px-3 py-2 my-3 mx-3
                      `}
                  onClick={() => setOhmActivity(!ohmActivity)}
                >
                  OHM
                </div>
                <div
                  className={`
                    ${
                      ethActivity
                        ? "bg-transparent border-[1px] rounded-lg border-[#CECFD5] text-[#CECFD5]"
                        : "bg-gradient-to-r from-[#5BDFE4] to-[#024CAD] rounded-lg text-white"
                    }
                      px-3 py-2 my-3 mx-3
                      `}
                  onClick={() => setEthActivity(!ethActivity)}
                >
                  ETH
                </div>
                <div
                  className={`
                    ${
                      nftActivity
                        ? "bg-transparent border-[1px] rounded-lg border-[#CECFD5] text-[#CECFD5]"
                        : "bg-gradient-to-r from-[#5BDFE4] to-[#024CAD] rounded-lg text-white"
                    }
                      px-3 py-2 my-3 mx-3
                      `}
                  onClick={() => setNftActivity(!nftActivity)}
                >
                  NFT
                </div>
                <div
                  className={`
                  ${
                    shitcoinActivity
                      ? "bg-transparent border-[1px] rounded-lg border-[#CECFD5] text-[#CECFD5]"
                      : "bg-gradient-to-r from-[#5BDFE4] to-[#024CAD] rounded-lg text-white"
                  }
                    px-3 py-2 my-3 mx-3
                    `}
                  onClick={() => setShitcoinActivity(!shitcoinActivity)}
                >
                  Shitcoin
                </div>
                <div
                  className={`
                  ${
                    englishActivity
                      ? "bg-transparent border-[1px] rounded-lg border-[#CECFD5] text-[#CECFD5]"
                      : "bg-gradient-to-r from-[#5BDFE4] to-[#024CAD] rounded-lg text-white"
                  }
                    px-3 py-2 my-3 mx-3
                    `}
                  onClick={() => setEnglichActivity(!englishActivity)}
                >
                  English
                </div>
                <div
                  className={`
                  ${
                    defiActivity
                      ? "bg-transparent border-[1px] rounded-lg border-[#CECFD5] text-[#CECFD5]"
                      : "bg-gradient-to-r from-[#5BDFE4] to-[#024CAD] rounded-lg text-white"
                  }
                    px-3 py-2 my-3 mx-3
                    `}
                  onClick={() => setDefiActivity(!defiActivity)}
                >
                  Defi
                </div>
                <div
                  className={`
                    ${
                      ohmActivity
                        ? "bg-transparent border-[1px] rounded-lg border-[#CECFD5] text-[#CECFD5]"
                        : "bg-gradient-to-r from-[#5BDFE4] to-[#024CAD] rounded-lg text-white"
                    }
                      px-3 py-2 my-3 mx-3
                      `}
                  onClick={() => setOhmActivity(!ohmActivity)}
                >
                  OHM
                </div>
                <div
                  className={`
                    ${
                      ethActivity
                        ? "bg-transparent border-[1px] rounded-lg border-[#CECFD5] text-[#CECFD5]"
                        : "bg-gradient-to-r from-[#5BDFE4] to-[#024CAD] rounded-lg text-white"
                    }
                      px-3 py-2 my-3 mx-3
                      `}
                  onClick={() => setEthActivity(!ethActivity)}
                >
                  ETH
                </div>
                <div
                  className={`
                    ${
                      nftActivity
                        ? "bg-transparent border-[1px] rounded-lg border-[#CECFD5] text-[#CECFD5]"
                        : "bg-gradient-to-r from-[#5BDFE4] to-[#024CAD] rounded-lg text-white"
                    }
                      px-3 py-2 my-3 mx-3
                      `}
                  onClick={() => setNftActivity(!nftActivity)}
                >
                  NFT
                </div>
                <div
                  className={`
                  ${
                    shitcoinActivity
                      ? "bg-transparent border-[1px] rounded-lg border-[#CECFD5] text-[#CECFD5]"
                      : "bg-gradient-to-r from-[#5BDFE4] to-[#024CAD] rounded-lg text-white"
                  }
                    px-3 py-2 my-3 mx-3
                    `}
                  onClick={() => setShitcoinActivity(!shitcoinActivity)}
                >
                  Shitcoin
                </div>
                <div
                  className={`
                  ${
                    englishActivity
                      ? "bg-transparent border-[1px] rounded-lg border-[#CECFD5] text-[#CECFD5]"
                      : "bg-gradient-to-r from-[#5BDFE4] to-[#024CAD] rounded-lg text-white"
                  }
                    px-3 py-2 my-3 mx-3
                    `}
                  onClick={() => setEnglichActivity(!englishActivity)}
                >
                  English
                </div>
                <div
                  className={`
                  ${
                    defiActivity
                      ? "bg-transparent border-[1px] rounded-lg border-[#CECFD5] text-[#CECFD5]"
                      : "bg-gradient-to-r from-[#5BDFE4] to-[#024CAD] rounded-lg text-white"
                  }
                    px-3 py-2 my-3 mx-3
                    `}
                  onClick={() => setDefiActivity(!defiActivity)}
                >
                  Defi
                </div>
                <div
                  className={`
                    ${
                      ohmActivity
                        ? "bg-transparent border-[1px] rounded-lg border-[#CECFD5] text-[#CECFD5]"
                        : "bg-gradient-to-r from-[#5BDFE4] to-[#024CAD] rounded-lg text-white"
                    }
                      px-3 py-2 my-3 mx-3
                      `}
                  onClick={() => setOhmActivity(!ohmActivity)}
                >
                  OHM
                </div>
                <div
                  className={`
                    ${
                      ethActivity
                        ? "bg-transparent border-[1px] rounded-lg border-[#CECFD5] text-[#CECFD5]"
                        : "bg-gradient-to-r from-[#5BDFE4] to-[#024CAD] rounded-lg text-white"
                    }
                      px-3 py-2 my-3 mx-3
                      `}
                  onClick={() => setEthActivity(!ethActivity)}
                >
                  ETH
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel
            key={"theme"}
            value={"theme"}
            className="py-0 px-10 min-h-[100vh]"
          ></TabPanel>
          <TabPanel
            key={"version"}
            value={"version"}
            className="py-0 px-10 min-h-[100vh]"
          ></TabPanel>
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default Profile;
