import React from "react";
import { Box } from "../box";
import { Divider, Stack } from "@mui/material";
import { Text } from "../text";

const histories = [
  { id: 1, data: "27.05.22", caption: "Выдан купон на 5000 руб." },
  { id: 2, data: "19.06.22", caption: "Выдан купон на 5000 руб." },
  { id: 3, data: "10.07.22", caption: "Выдан купон на 5000 руб." },
  { id: 4, data: "16.07.22", caption: "Выдан купон на 5000 руб." },
  { id: 5, data: "20.08.22", caption: "Выдан купон на 5000 руб." },
  { id: 6, data: "24.08.22", caption: "Выдан купон на 5000 руб." },
];

const Default = () => {
  return (
    <Box
      flex
      gap
      sx={{
        border: "1px solid #5ce1e6",
        boxShadow: ({ shadows }) => shadows[2],
        borderRadius: 3,
        overflow: "hidden",
      }}
    >
      <Box flex center sx={{ p: 1, backgroundColor: "#5ce1e6" }}>
        <Text caption="ИСТОРИЯ" sx={{ color: "#000" }} />
      </Box>
      <Stack
        gap={1}
        direction="column"
        divider={<Divider sx={{ my: 1 }} />}
        sx={{ p: 1 }}
      >
        {histories.map((item) => (
          <Box flex row gap ai key={item.id}>
            <Text
              caption={`${item.data}`}
              marker
              sx={{
                backgroundColor: "#5ce1e6",
                color: "#000",
                minWidth: 80,
                textAlign: "center",
              }}
            />
            <Text caption={item.caption} />
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export { Default as History };
