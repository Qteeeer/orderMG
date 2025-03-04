import { useState } from "react";
import { AddAmboss } from "./addAmboss";
import { Home } from "./main";
import { Bonus } from "./bonus";
import { Task } from "./task";
import { FaqPages } from "./faqPages";

//import { TopShapka } from "@components";

const getComponent = (page) => {
  if (page === "addAmboss") return AddAmboss;
  if (page === "bonus") return Bonus;
  if (page === "home") return Home;
  if (page === "task") return Task;
  if (page === "faq") return FaqPages;

  return Home;
};

const Default = () => {
  const [selectedTab, setSelectedTab] = useState("task");
  const Component = getComponent(selectedTab);

  return (
    <div>
      <Component setSelectedTab={setSelectedTab} />
    </div>
  );
};

export { Default as Brow };
