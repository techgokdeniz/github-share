"use client";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import RandomUser from "./tabs/randomUser";
import FollowUser from "./tabs/followUser";
import RepoUser from "./tabs/repoUser";
import { useState } from "react";

export default function TabsComponent() {
  const [activeTab, setActiveTab] = useState("randomUser");

  const data = [
    {
      label: "Rastgele Kullanıcılar",
      value: "randomUser",
      component: <RandomUser />,
    },
    {
      label: "En Fazla Takipçiye Sahip Kullanıcılar",
      value: "followUser",
      component: <FollowUser />,
    },
    {
      label: "En Fazla Repositoriye Sahip Kullanıcılar",
      value: "repoUser",
      component: <RepoUser />,
    },
  ];

  return (
    <Tabs value={activeTab}>
      <TabsHeader className="flex flex-col md:flex-row gap-2">
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={` ${
              activeTab === value
                ? "text-black dark:font-semibold"
                : "dark:text-white"
            } `}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, component }) => (
          <TabPanel key={value} value={value}>
            {component}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
