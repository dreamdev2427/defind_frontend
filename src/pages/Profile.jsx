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

  return (
    <div className="w-full min-h-[100vh]">
      <div className="mt-10 text-white font-bold text-lg border-b-[#4C4C56] border-[1px] pb-4 text-left px-10">
        Settings
      </div>
      <Tabs value="html" orientation="vertical" className="px-10 mt-8">
        <TabsHeader
          className="w-56 px-6 py-6 border-[#4C4C56] border-[1px] rounded-xl bg-[#4C4C56] min-h-[70vh]  "
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
          <TabPanel key={"my details"} value={"my details"} className="py-0">
            {isInEditionOfProofile === false ? (
              <>
                <div className="flex justify-between pb-5 border-b-[#4C4C56] border-b-[1px]">
                  <div className="flex justify-start ">
                    <div className="relative">
                      <img
                        src={AvatarImg}
                        className="w-40 h-40 rounded-full "
                        alt="user avatar"
                      />
                      <img
                        src={VerifiedBlueTick}
                        className="w-8 h-8 absolute bottom-0 right-4"
                        alt="verified icon"
                      />
                    </div>
                    <div className="flex flex-col ml-4">
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
                          className={
                            "w-28 h-10 text-white font-bold ml-10 mt-8"
                          }
                          label={"Follow"}
                        />
                        <img
                          src={GoOutsideIcon}
                          className="w-10 h-10 ml-5 mt-8"
                          alt="go outside icon"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <button
                      className={"bg-[#666875] w-24 h-10 rounded-lg text-white"}
                      onClick={() => setIsInEditionOfProfile(true)}
                    >
                      Edit
                    </button>
                  </div>
                </div>
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
              <></>
            )}
          </TabPanel>
          <TabPanel
            key={"my crypto projects"}
            value={"my crypto projects"}
            className="py-0"
          ></TabPanel>
          <TabPanel
            key={"password"}
            value={"password"}
            className="py-0"
          ></TabPanel>
          <TabPanel
            key={"notifications"}
            value={"notifications"}
            className="py-0"
          ></TabPanel>
          <TabPanel key={"feed"} value={"feed"} className="py-0"></TabPanel>
          <TabPanel key={"theme"} value={"theme"} className="py-0"></TabPanel>
          <TabPanel
            key={"version"}
            value={"version"}
            className="py-0"
          ></TabPanel>
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default Profile;
