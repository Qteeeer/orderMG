import { Box } from "../box";
import logo from "./main2.png";
import background from "./background.png";
import { Text } from "../text";
import { Caption } from "../caption";

const Default = () => {
  return (
    <Box
      flex
      ai="flex-start"
      sx={{
        p: 1,
        borderRadius: 3,
        background: `url("${background}")`,
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "right",
        backgroundPositionY: "center",
        backgroundSize: "84%",
        minHeight: 250,
      }}
    >
      <Text caption="СТАНЬ АМБОССАДОРОМ" sx={{ fontSize: 16 }} />
      <img alt="icon" style={{ width: "50%" }} src={logo} />
      <Box flex grow jc ai="flex-start" gap={3}>
        <Text caption="ЭТО НЕ ТОЛЬКО СТАТУС, НО И ЛУЧШИЕ УСЛОВИЯ СОТРУДНИЧЕСТВА!" />
        <Caption
          caption="ПОДАТЬ ЗАЯВКУ"
          sx={{ backgroundColor: "#79d4d8", ml: 4 }}
          sxFont={{ color: "#000", fontSize: 25 }}
        />
      </Box>
    </Box>
  );
};
export { Default as AddAmbassador };
