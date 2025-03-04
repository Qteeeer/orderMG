import { Ambossador } from "src/components/ambossador";
import { CloudMaster } from "src/components/cloubMaster";

import { Info } from "src/components/info";
import { Material } from "src/components/material";
import { Service } from "src/components/service";
import { SocProj } from "src/components/socProj";
import { TopShapka } from "src/components/topShapka";

const Default = () => {
  return (
    <>
      <div style={{ backgroundColor: "#000", height: "100dvh" }}>
        <TopShapka />
        <Ambossador />
        <Info />
        <SocProj />
        <CloudMaster />
        <Service />
        <Material />
      </div>
    </>
  );
};

export { Default as Home };
