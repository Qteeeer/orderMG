import { Activ } from "src/components/activ";
import { CreatingTask } from "src/components/creatingTask";
import { Faq } from "src/components/faq";
import { Service } from "src/components/service";
import { GenerPromo } from "src/components/taskPromo";
import { TopShapka } from "src/components/topShapka";

const Default = (props) => {
  return (
    <>
      <div style={{ backgroundColor: "#000" }}>
        <TopShapka />
        <GenerPromo />
        <CreatingTask text="СОЗДАТЕЛЬ КОНТЕНТА" />
        <CreatingTask text="КОМЕНТАТОР" />
        <Activ />
        <Service />
        <Faq />
      </div>
    </>
  );
};

export { Default as Task };
