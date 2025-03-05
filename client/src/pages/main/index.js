import {
  Ambassador,
  CloudMaster,
  Info,
  Material,
  Service,
  SocProj,
} from "@components";

const name = "home";

const Default = () => (
  <>
    <Ambassador />
    <Info />
    <SocProj />
    <CloudMaster />
    <Service />
    <Material />
  </>
);

const def = { Component: Default, name, isDef: true };

export default def;
