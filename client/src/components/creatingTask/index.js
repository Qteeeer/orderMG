import { useState } from "react";
import { Input, FileInput, Image } from "../input";
import { Box } from "../box";
import { Caption } from "../caption";

const Default = (props) => {
  const { caption } = props;

  const [value, setValue] = useState(null);
  const [name, setName] = useState("");

  return (
    <Box
      flex
      sx={{
        p: 1,
        boxShadow: ({ shadows }) => shadows[2],
        borderRadius: 3,
        backgroundColor: "#5ce1e6",
        minHeight: 180,
      }}
    >
      <Box flex row gap sx={{ flexWrap: "wrap" }}>
        <Box flex gap grow>
          <Caption caption={caption} sx={{ alignSelf: "flex-start" }} />

          <Input
            value={name}
            setValue={setName}
            placeholder="Вставьте ссылку*"
            style={{ flexGrow: 1, minWidth: "unset" }}
          />
          <FileInput setValue={setValue} />
        </Box>
        {value?.map?.((i, index) => (
          <Image
            key={index}
            setValue={setValue}
            img={i.pre}
            index={index}
            cover
          />
        ))}
      </Box>
      <Box grow />
      <Box flex center>
        <Caption caption="СДАТЬ ЗАДАНИЕ" />
      </Box>
    </Box>
  );
};

export { Default as CreatingTask };
