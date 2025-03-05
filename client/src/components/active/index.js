import { Divider } from "@mui/material";
import { Box } from "../box";
import { Text } from "../text";
import girl1 from "./girl1.jpg";
import girl2 from "./girl2.jpg";
import girl3 from "./girl3.jfif";

const girls = [girl1, girl2, girl3];
const category = [
  { id: 1, caption: "СОЗДАТЕЛЬ КОНТЕНТА", girls },
  { id: 2, caption: "КОММЕНТАТОР", girls },
  { id: 3, caption: "ПРОМО-МАСТЕР", girls },
];

const Default = () => {
  return (
    <Box
      flex
      gap
      sx={{
        pb: 1,
        minHeight: 180,
        border: "1px solid #5ce1e6",
        boxShadow: ({ shadows }) => shadows[4],
        borderRadius: 3,
        overflow: "hidden",
      }}
    >
      <Box flex center sx={{ backgroundColor: "#5ce1e6", py: 0.75 }}>
        <Text caption="САМЫЕ АКТИВНЫЕ МЕСЯЦА" bold />
      </Box>
      <Box flex gap sx={{ p: 1 }}>
        {category.map((i) => (
          <Box key={i.id} ai flex row jc="space-between">
            <Text caption={i.caption} />
            <Box flex row>
              {i.girls.map((i, index) => (
                <img
                  key={index}
                  alt="icon"
                  style={{
                    width: 35,
                    height: 35,
                    borderRadius: 25,
                  }}
                  src={i}
                />
              ))}
            </Box>
          </Box>
        ))}
      </Box>
      <Divider sx={{ mx: 1 }}>
        <Text
          caption="ПОДРОБНЕЕ"
          marker
          sx={{ backgroundColor: "#5ce1e6", color: "#000" }}
        />
      </Divider>
    </Box>
  );
};
export { Default as Active };
