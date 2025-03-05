import { Box, FaqText, Top, Faq } from "@components";

const name = "faq";

const Default = () => (
  <Box flex gap sx={{ px: 2, pt: 1, overflowX: "hidden" }}>
    <Top />
    <Faq />
    <FaqText />
  </Box>
);

const def = { Component: Default, name };

export default def;
