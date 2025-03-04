import { useRef } from "react";

import photoPlus from "../pages/res/photo-plus.png";
import del from "../pages/res/x.png";

const readFile = (file) =>
  new Promise((r) => {
    const reader = new FileReader();
    reader.onload = function () {
      r({ file, pre: reader.result });
      // var output = document.getElementById('output');
      // output.src = reader.result;
    };
    reader.readAsDataURL(file);
  });

const Image = (props) => {
  const { setValue, img, index, cover } = props;

  return (
    <div
      style={{
        position: "relative",
        padding: 4,
      }}
    >
      <div
        style={{
          position: "absolute",
          right: 6,
          top: 6,
          borderRadius: "50%",
          backgroundColor: "#fff",
          width: 23,
          height: 23,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={() => {
          setValue((p) => p.filter((_, oldIndex) => oldIndex !== index));
        }}
      >
        <img alt="icon" style={{ width: 15, height: 15 }} src={del} />
      </div>
      <img
        src={img}
        alt=""
        width={80}
        height={100}
        style={{
          borderRadius: 12,
          objectFit: cover ? "cover" : "contain",
          border: "1px solid rgba(253, 253, 253, 0.64)",
          boxShadow: "0px 7px 15px -8px rgba(66, 68, 90, 1)",
        }}
      />
    </div>
  );
};

/**
 * @typedef {Object} MyProps
 * @property {array} [value] - Заголовок.
 * @property {Function} [setValue] - Заголовок.
 *
 */

/**
 * @param {MyProps} props - Свойства компонента.
 * @returns {JSX.Element} The custom button
 */

const FileInput = (props) => {
  const { value, setValue } = props;

  const ref = useRef();

  return (
    <div
      style={{
        display: "flex",
        gap: 8,
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{}}
        onClick={(e) => {
          if (ref.current) {
            ref.current.click(e);
          }
        }}
      >
        <input
          type="file"
          accept="image/*"
          // multiple // Для множества
          ref={ref}
          style={{ display: "none" }}
          onChange={async (e) => {
            const files = Array.from(e.target.files);
            const result = [];

            for (const file of files) {
              result.push(await readFile(file));
            }
            setValue?.(result ?? []); //для одной фотки
            // setValue?.((p) => [...(p ?? []), ...(result ?? [])]); // для множества
          }}
        />
        <div
          style={{
            backgroundColor: "#a8f6f9",
            borderRadius: 12,
            height: 23,
            width: 150,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            color: "#333",
            gap: 5,
          }}
        >
          <img alt="icon" style={{ width: 15, height: 15 }} src={photoPlus} />
          <div style={{ fontSize: 10 }}>Загрузите скрин*</div>
        </div>
      </div>

      {value?.map?.((i, index) => (
        <Image key={index} setValue={setValue} img={i.pre} index={index} />
      ))}
    </div>
  );
};
export { FileInput, Image };
