import { Box } from "../box";
import { Caption } from "../caption";
import { Text } from "../text";
import cap from "./cap.png";

const Default = () => {
  return (
    <Box
      flex
      ai
      sx={{
        backgroundColor: "#5ce1e6",
        p: 1,
        minHeight: 120,
        borderRadius: 3,
        boxShadow: ({ shadows }) => shadows[2],
        position: "relative",
      }}
    >
      <Caption
        caption="КЛУБ МАСТЕРСТВА"
        sxFont={{ fontSize: 32, fontWeight: "bold" }}
      />
      <Text
        caption="ВЫВОДИМ LASH ИНДУСТРИЮ НА НОВЫЙ УРОВЕНЬ"
        sx={{ color: "#000" }}
        secondary
      />

      <img
        alt="logo"
        style={{
          height: 80,
          transform: "rotate(20deg)",
          position: "absolute",
          bottom: -10,
          right: 5,
        }}
        src={cap}
      />
    </Box>
  );
};
export { Default as CloudMaster };
