import { FaqText, Faq } from "@components";

const name = "faq";

const Default = () => (
  <>
    <Faq />
    <FaqText />
  </>
);

const def = { Component: Default, name };

export default def;
