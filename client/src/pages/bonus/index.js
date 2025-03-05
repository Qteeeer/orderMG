import { Discount, Top, History, Box } from "@components";

const name = "bonus";

const Default = () => (
  <Box flex gap={2} sx={{ px: 2, pt: 1, overflowX: "hidden" }}>
    <Top />
    <Discount />
    <History />
  </Box>
);

const def = { Component: Default, name };

export default def;
