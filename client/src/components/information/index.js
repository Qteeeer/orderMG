import logo from "./logo.svg";
import logo2 from "./logo2.svg";
import { Box } from "../box";
import { Text } from "../text";
import { Caption } from "../caption";

const Info = () => {
  return (
    <Box
      defGrid
      sx={{
        mb: 3,
        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
        rowGap: 3,
      }}
    >
      <Box
        flex
        ai
        gap={0.5}
        sx={{
          borderRadius: 3,
          py: 1,
          minHeight: 160,
          boxShadow: ({ shadows }) => shadows[2],
          background: "linear-gradient(90deg, #808080 0%, #ffffff 100%)",
          position: "relative",
        }}
      >
        <Caption caption="В РАЗРАБОТКЕ" sx={{ zIndex: 1 }} />
        <Text caption="скоро" secondary sx={{ color: "#000", zIndex: 1 }} />
        <img
          alt="logo"
          style={{ height: 200, position: "absolute", right: 0, bottom: -60 }}
          src={logo2}
        />
      </Box>
      <Box
        flex
        grow
        ai
        gap={0.5}
        sx={{
          p: 1,
          minHeight: 160,
          boxShadow: ({ shadows }) => shadows[2],
          // boxShadow: "0px 0px 12px 0px rgba(92, 225, 230, 0.5)",
          borderRadius: 3,
          background: "#5ce1e6",
          position: "relative",
        }}
      >
        <Caption caption="ДЛЯ АМБОССАДОРОВ" sx={{ zIndex: 1 }} />
        <Text
          caption="ЗАДАНИЯ И ПОДАРКИ"
          secondary
          sx={{ color: "#000", zIndex: 1 }}
        />

        <img
          alt="logo"
          style={{ height: 200, position: "absolute", right: -50, bottom: -50 }}
          src={logo}
        />
      </Box>
    </Box>
  );
};
export { Info };
