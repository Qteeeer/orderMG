import { useState } from "react";
import { FileInput, Image } from "./fileImput";
import { Input } from "./textImput";

const CreatingTask = (props) => {
  const [value, setValue] = useState(null);
  const [name, setName] = useState("");
  const { text } = props;

  return (
    <div
      style={{
        height: 150,
        borderRadius: 5,
        backgroundColor: "#5ce1e6",
        margin: 10,
        padding: 10,
      }}
    >
      <div
        name="mainContainer"
        style={{ display: "flex", flexDirection: "row", gap: 8 }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 8,
            flexGrow: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: 200,
              height: 25,
              background: "#000",
              borderRadius: 5,
            }}
          >
            <div style={{ fontSize: 12, fontFamily: "Inter", color: "#fff" }}>
              <b>{text}</b>
            </div>
          </div>
          <Input
            value={name}
            setValue={setName}
            placeholder="Вставьте ссылку*"
          />
          <FileInput setValue={setValue} />
        </div>
        {value?.map?.((i, index) => (
          <Image
            key={index}
            setValue={setValue}
            img={i.pre}
            index={index}
            cover
          />
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 25,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: 200,
            height: 25,
            background: "#000",
            borderRadius: 5,
            backgroundImage: "rgba(196, 196, 196, 0)",
          }}
        >
          <div style={{ fontSize: 12, fontFamily: "Inter", color: "#fff" }}>
            <b>СДАТЬ ЗАДАНИЕ</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CreatingTask };
