import { AddAmboss } from "src/components/addAmboss";
import { Riviews } from "src/components/reviews";
import { TopShapka } from "src/components/topShapka";
import { ImageSlider } from "src/components/ImageSlider";
import review from "../res/review.png";
import review1 from "../res/review1.png";
import review2 from "../res/review2.png";
import review3 from "../res/review3.png";

const Default = () => {
  const images = [
    { id: 1, url: review },
    { id: 2, url: review1 },
    { id: 3, url: review2 },
    { id: 4, url: review3 },
  ];
  return (
    <>
      <div style={{ backgroundColor: "#000", height: "100dvh" }}>
        <TopShapka />
        <AddAmboss />
        <Riviews />
        <ImageSlider images={images} />
      </div>
    </>
  );
};

export { Default as AddAmboss };
