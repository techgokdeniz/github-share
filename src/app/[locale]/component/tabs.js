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
import { useTranslations } from "next-intl";

export default function TabsComponent() {
  const [activeTab, setActiveTab] = useState("randomUser");
  const t = useTranslations("tabs");

  const data = [
    {
      label: `${t("random")}`,
      value: "randomUser",
      component: <RandomUser />,
    },
    {
      label: `${t("follow")}`,
      value: "followUser",
      component: <FollowUser />,
    },
    {
      label: `${t("repo")}`,
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
