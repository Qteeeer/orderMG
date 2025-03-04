import Histori from "src/components/history";
import { Kupon } from "src/components/kypon";
import { TopShapka } from "src/components/topShapka";

const Default = () => {
  return (
    <>
      <div style={{ backgroundColor: "#000", height: "100dvh" }}>
        <TopShapka />
        <Kupon />
        <Histori />
      </div>
    </>
  );
};

export { Default as Bonus };
