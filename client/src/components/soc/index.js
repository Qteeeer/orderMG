import { Box } from "../box";
import { Caption } from "../caption";

const SocProj = () => {
  return (
    <Box
      flex
      center
      sx={{
        background: "linear-gradient(90deg, #808080 0%, #ffffff 100%)",
        p: 1,
        borderRadius: 3,
        minHeight: 60,
      }}
    >
      <Caption
        caption="СОЦИАЛЬНЫЙ ОБРАЗОВАТЕЛЬНЫЙ ПРОЕКТ"
        sxFont={{ fontSize: 18 }}
      />
    </Box>
  );
};
export { SocProj };
