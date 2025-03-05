import makeup from "./store.png";
import tg from "./tg.png";
import { Box } from "../box";
import { Caption } from "../caption";
import { Text } from "../text";

const Service = () => {
  return (
    <Box
      defGrid
      sx={{
        minHeight: 140,
        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
      }}
    >
      <Box
        flex
        gap={0.5}
        ai="flex-start"
        sx={{
          p: 1,
          backgroundColor: "#5ce1e6",
          boxShadow: ({ shadows }) => shadows[2],
          borderRadius: 3,
        }}
      >
        <Caption caption="СЛУЖБА ЗАБОТЫ" />
        <Text caption="ЗАДАТЬ ВОПРОС" sx={{ color: "#000" }} secondary />
        <Box grow />
        <img alt="icon" style={{ width: 50, height: 50 }} src={tg} />
      </Box>

      <Box
        flex
        gap={0.5}
        ai="flex-end"
        sx={{
          p: 1,
          background: "linear-gradient(90deg, #808080 0%, #ffffff 100%)",
          boxShadow: ({ shadows }) => shadows[2],
          borderRadius: 3,
        }}
      >
        <Caption caption="КУПИТЬ МАТЕРИАЛЫ" />
        <Text caption="ЛУЧНИЕ ЦЕНЫ НА САЙТЕ" sx={{ color: "#000" }} secondary />
        <Box grow />
        <img alt="icon" style={{ width: 50, height: 50 }} src={makeup} />
      </Box>
    </Box>
  );
};
export { Service };
