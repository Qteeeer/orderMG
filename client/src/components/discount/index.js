import { Box } from "../box";
import { Caption } from "../caption";
import { Text } from "../text";

const discounts = [
  { id: 1, value: 1000, count: 10 },
  { id: 2, value: 3000, count: 10 },
  { id: 3, value: 5000, count: 10 },
  { id: 4, value: 10000, count: 10 },
  { id: 5, value: 30000, count: 10 },
  { id: 6, value: 50000, count: 10 },
];

const Default = () => {
  return (
    <>
      <Box flex center>
        <Box
          flex
          center
          sx={{ backgroundColor: "#5ce1e6", borderRadius: 1.5, px: 1, py: 0.5 }}
        >
          <Text
            caption="МАГАЗИН БОНУСОВ"
            sx={{ fontSize: 14, color: "#000", fontWeight: "bold" }}
          />
        </Box>
      </Box>
      <Box
        defGrid
        sx={{ gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))" }}
      >
        {discounts.map((item) => (
          <Box
            key={item.id}
            flex
            sx={{
              p: 1,
              boxShadow: ({ shadows }) => shadows[2],
              borderRadius: 3,
              backgroundColor: "#5ce1e6",
            }}
          >
            <Caption caption="КУПОН" />
            <Box flex row gap ai jc>
              <Caption
                caption={`x${item.count}`}
                sx={{ px: 1, py: 0.5 }}
                sxFont={{ fontSize: 20 }}
              />
              <Caption
                caption={item.value}
                sx={{ px: 1, py: 0.5 }}
                sxFont={{ fontWeight: "bold", fontSize: 20 }}
              />
              <Text
                caption="₽"
                sx={{ color: "#000", fontWeight: "500", fontSize: 35 }}
              />
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};
export { Default as Discount };
