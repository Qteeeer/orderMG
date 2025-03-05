import { AddAmbassador, Reviews } from "@components";
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
  <>
    <AddAmbassador />
    <Reviews />
    <ImageSlider images={images} />
  </>
);

const def = { Component: Default, name };

export default def;
