import { Box } from "../box";
import { Text } from "../text";

const Default = (props) => {
  const { caption, sx, sxFont, ...other } = props;

  return (
    <Box
      flex
      center
      sx={{
        px: 2,
        backgroundColor: "background.default",
        borderRadius: 1.5,
        ...sx,
      }}
      {...other}
    >
      <Text caption={caption} sx={{ textAlign: "center", ...sxFont }} />
    </Box>
  );
};

export { Default as Caption };
