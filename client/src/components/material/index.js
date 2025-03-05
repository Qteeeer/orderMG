import { Box } from "../box";
import { Caption } from "../caption";
import { Text } from "../text";
import logo from "./logo.png";

const Material = () => {
  return (
    <Box
      flex
      ai="flex-start"
      sx={{
        boxShadow: ({ shadows }) => shadows[2],
        borderRadius: 3,
        p: 1,
        backgroundColor: "#5ce1e6",
        background: `url(${logo})`,
        minHeight: 150,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Caption caption="ЗНАКОМСТВО С МАТЕРИАЛАМИ" />
      <Text
        caption="ПОПРОБУЙ НАШУ ПРОДУКЦИЮ ПО ЛУЧШИМ УСЛОВИЯМ"
        sx={{ color: "#000" }}
        secondary
      />
    </Box>
  );
};
export { Material };
