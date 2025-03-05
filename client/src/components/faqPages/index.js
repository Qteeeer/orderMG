import { Divider, Stack } from "@mui/material";
import { useState } from "react";
import { Box } from "../box";
import { Text } from "../text";

const historyClient = [
  { id: 1, data: "Какой-то вопрос?", text: "Ответ на этот вопрос." },
  { id: 2, data: "Еще один вопрос?", text: "Ответ на второй вопрос." },
  { id: 3, data: "Третий вопрос?", text: "Ответ на третий вопрос." },
  { id: 4, data: "Четвертый вопрос?", text: "Ответ на четвертый вопрос." },
  { id: 5, data: "Пятый вопрос?", text: "Ответ на пятый вопрос." },
  { id: 6, data: "Шестой вопрос?", text: "Ответ на шестой вопрос." },
];

const Default = () => {
  const [active, setActive] = useState(null);

  return (
    <Box
      flex
      gap
      sx={{
        border: "1px solid #5ce1e6",
        p: 2,
        boxShadow: ({ shadows }) => shadows[2],
        borderRadius: 3,
      }}
    >
      <Stack gap={1} direction="column" divider={<Divider sx={{ my: 1 }} />}>
        {historyClient.map((item) => (
          <Box key={item.id}>
            <Text
              caption={item.data}
              onClick={() => setActive((p) => (p === item.id ? null : item.id))}
            />
            {active === item.id && (
              <Text caption={item.text} secondary sx={{ fontSize: 18, m: 1 }} />
            )}
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export * from "./faq";
export { Default as FaqText };
