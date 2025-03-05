import {
  Ambassador,
  Box,
  CloudMaster,
  Info,
  Material,
  Service,
  SocProj,
  Top,
} from "@components";

const name = "home";

const Default = () => (
  <Box flex gap sx={{ px: 2, pt: 1, overflowX: "hidden" }}>
    <Top />
    <Ambassador />
    <Info />
    <SocProj />
    <CloudMaster />
    <Service />
    <Material />
  </Box>
);

const def = { Component: Default, name, isDef: true };

export default def;
