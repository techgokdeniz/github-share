"use client";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import RandomUser from "./tabs/randomUser";

export default function Example() {
  const data = [
    {
      label: "Random User",
      value: "randomUser",
      component: <RandomUser />,
    },
    {
      label: "Lang User",
      value: "langUser",
      component: "abc",
    },
    {
      label: "abc User",
      value: "abcUser",
      component: "abc",
    },
  ];

  return (
    <Tabs value="randomUser" className="p-6">
      <TabsHeader>
        {data.map(({ label, value }) => (
          <Tab key={value} value={value}>
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
