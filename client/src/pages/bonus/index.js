import { Discount, History } from "@components";

const name = "bonus";

const Default = () => (
  <>
    <Discount />
    <History />
  </>
);

const def = { Component: Default, name };

export default def;
