import {
  Active,
  Box,
  GetPromo,
  Top,
  Faq,
  CreatingTask,
  Service,
} from "@components";

const name = "task";

const Default = (props) => (
  <Box flex gap sx={{ px: 2, pt: 1, overflowX: "hidden" }}>
    <Top />
    <GetPromo />
    <CreatingTask caption="СОЗДАТЕЛЬ КОНТЕНТА" />
    <CreatingTask caption="КОММЕНТАТОР" />
    <Active />
    <Service />
    <Faq />
  </Box>
);

const def = { Component: Default, name };

export default def;
