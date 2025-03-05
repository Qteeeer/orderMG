import { Active, GetPromo, Faq, CreatingTask, Service } from "@components";

const name = "task";

const Default = (props) => (
  <>
    <GetPromo />
    <CreatingTask caption="СОЗДАТЕЛЬ КОНТЕНТА" />
    <CreatingTask caption="КОММЕНТАТОР" />
    <Active />
    <Service />
    <Faq />
  </>
);

const def = { Component: Default, name };

export default def;
