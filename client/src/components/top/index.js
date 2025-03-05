import { Box } from "../box";
import { Caption } from "../caption";
import { Text } from "../text";
import bonus from "./bonus.png";
import girl2 from "./girl2.jpg";

const Default = () => {
  return (
    <Box
      defGrid
      sx={{
        minHeight: 120,
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      }}
    >
      <Box
        flex
        gap={0.5}
        grow
        sx={{ p: 1, boxShadow: ({ shadows }) => shadows[2] }}
      >
        <Box flex row gap>
          <img
            alt="icon"
            style={{ width: 45, height: 45, borderRadius: "50%" }}
            src={girl2}
          />
          <Box flex jc>
            <Text caption="Привет" secondary />
            <Text caption="Ирина" />
          </Box>
        </Box>
        <Box flex row gap ai>
          <Text caption="Статус:" />
          <Text
            caption="Клиент"
            strong
            marker
            sx={{
              backgroundColor: "#fff",
              color: "#000",
              py: 0,
            }}
          />
        </Box>
        <Box flex row gap ai>
          <Text caption="Подписка в клуб:" />
          <Text caption="до" />
          <Text
            caption="15.02.2025"
            marker
            strong
            sx={{
              backgroundColor: "#5ce1e6",
              color: "#000",
              fontWeight: "bold",
              py: 0,
            }}
          />
        </Box>
      </Box>
      <Box
        flex
        grow
        sx={{
          p: 1,
          boxShadow: ({ shadows }) => shadows[2],
          borderRadius: 3,
          backgroundColor: "#5ce1e6",
        }}
      >
        <Box flex row gap={2.5} grow>
          <Box flex>
            <Caption caption="БОНУСЫ" />
            <Box flex row ai gap>
              <Text
                caption="₽"
                sx={{ color: "#000", fontWeight: "500", fontSize: 35 }}
              />
              <Caption
                caption={4500}
                sx={{ px: 1 }}
                sxFont={{ fontWeight: "bold", fontSize: 20 }}
              />
            </Box>
          </Box>
          <img alt="logo" style={{ width: 50, height: 50 }} src={bonus} />
        </Box>

        <Box flex center>
          <Caption
            caption="ИСПОЛЬЗОВАТЬ БОНУСЫ"
            sx={{ px: 1, py: 0.5 }}
            sxFont={{ fontSize: 11 }}
          />
        </Box>
      </Box>
    </Box>
  );
};
export { Default as Top };
