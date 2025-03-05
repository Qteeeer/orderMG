import { Box } from "../box";
import { Caption } from "../caption";

const Default = () => {
  return (
    <Box
      flex
      center
      gap={3}
      sx={{
        p: 1,
        py: 3,
        boxShadow: ({ shadows }) => shadows[2],
        borderRadius: 3,
        backgroundColor: "#5ce1e6",
        minHeight: 100,
      }}
    >
      <Caption
        caption="ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ"
        sx={{ py: 1, px: 2.5 }}
        sxFont={{ fontSize: 20, fontWeight: "bold" }}
      />

      <Caption caption="КАК РАБОТАЕТ ПРОМОКОД" />
      <Caption caption="ЗА ЧТО НАЧИСЛЯЮТ БОНУСЫ" />
      <Caption caption="КАК ПОПАСТЬ В СПИСОК САМЫХ АКТИВНЫХ" />
      <Caption caption="КАКИЕ ЗАДАНИЯ ПРИНИМАЮТСЯ" />
    </Box>
  );
};
export { Default as Faq };
