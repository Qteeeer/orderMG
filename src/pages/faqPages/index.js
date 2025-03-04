import { Faq } from "src/components/faq";
import FaqText from "src/components/faqPages";
import { TopShapka } from "src/components/topShapka";

const Default = () => {
  return (
    <>
      <div style={{ backgroundColor: "#000", height: "100dvh" }}>
        <TopShapka />
        <Faq />
        <FaqText />
      </div>
    </>
  );
};

export { Default as FaqPages };
