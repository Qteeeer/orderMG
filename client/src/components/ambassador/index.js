import main from "./main.png";
import logo from "./logo.png";
import { Box } from "../box";
import { Caption } from "../caption";

const Default = () => {
  return (
    <Box
      flex
      gap
      ai="flex-start"
      sx={{
        minHeight: 120,
        backgroundColor: "#d6ece8",
        boxShadow: ({ shadows }) => shadows[2],
        borderRadius: 3,
        p: 1,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box flex gap ai sx={{ zIndex: 1 }}>
        <Caption caption="СТАНЬ АМБАССАДОРОМ" />
        <img alt="main" style={{ height: 16 }} src={main} />
      </Box>
      <img
        alt="logo"
        style={{ height: 200, position: "absolute", right: -20, bottom: -50 }}
        src={logo}
      />
    </Box>
  );
};

export * from "./add";

export { Default as Ambassador };
