import { Box } from "../box";
import { Caption } from "../caption";

const Default = () => {
  return (
    <Box
      flex
      center
      sx={{
        p: 1,
        boxShadow: ({ shadows }) => shadows[2],
        borderRadius: 3,
        background: "linear-gradient(90deg, #808080 0%, #ffffff 100%)", // Градиент слева серый, справа белый
      }}
    >
      <Caption caption="ОТЗЫВЫ" />
    </Box>
  );
};
export { Default as Reviews };
