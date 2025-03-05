import { useRef } from "react";

import { Box } from "../box";
import photoPlus from "./photo-plus.png";
import { Text } from "../text";
import del from "./x.png";

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
    <Box
      sx={{
        position: "relative",
        p: 0.5,
        "& img": {
          boxShadow: ({ shadows }) => shadows[4],
        },
      }}
    >
      <Box
        flex
        center
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          borderRadius: "50%",
          backgroundColor: "#fff",
          width: 23,
          height: 23,
          boxShadow: ({ shadows }) => shadows[4],
        }}
        onClick={() => {
          setValue((p) => p.filter((_, oldIndex) => oldIndex !== index));
        }}
      >
        <img
          alt="icon"
          style={{ width: 15, height: 15, boxShadow: "none" }}
          src={del}
        />
      </Box>
      <img
        src={img}
        alt=""
        width={80}
        height={100}
        style={{
          borderRadius: 8,
          objectFit: cover ? "cover" : "contain",
        }}
      />
    </Box>
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
        <Box
          flex
          row
          ai
          gap
          sx={{ px: 1, py: 0.5, backgroundColor: "#a8f6f9", borderRadius: 1.5 }}
        >
          <img alt="icon" style={{ width: 15, height: 15 }} src={photoPlus} />
          <Text
            caption="Загрузите скрин*"
            sx={{ color: "#000", fontSize: 14 }}
          />
        </Box>
      </div>

      {value?.map?.((i, index) => (
        <Image key={index} setValue={setValue} img={i.pre} index={index} />
      ))}
    </div>
  );
};
export { FileInput, Image };
