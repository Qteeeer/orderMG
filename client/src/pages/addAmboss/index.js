import { AddAmbassador, Box, Reviews, Top } from "@components";
import { ImageSlider } from "src/components/ImageSlider";
import review from "./review.png";
import review1 from "./review1.png";
import review2 from "./review2.png";
import review3 from "./review3.png";

const name = "addAmbassador";

const images = [
  { id: 1, url: review },
  { id: 2, url: review1 },
  { id: 3, url: review2 },
  { id: 4, url: review3 },
];

const Default = () => (
  <Box flex gap={2} sx={{ px: 2, pt: 1, overflowX: "hidden" }}>
    <Top />
    <AddAmbassador />
    <Reviews />
    <ImageSlider images={images} />
  </Box>
);

const def = { Component: Default, name };

export default def;
