import { Box } from "@components";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import page1 from "./addAmboss";
import page2 from "./bonus";
import page4 from "./faqPages";
import page5 from "./main";
import page3 from "./task";

const pages = [page1, page2, page3, page4, page5];

const defPage = pages.find((i) => i.isDef);

const getComponent = (page) =>
  (pages.find((i) => i.name === page) ?? defPage)?.Component;

const getHash = () => {
  const hashData = window.location.hash.slice(1);

  const [pathName, params] = hashData.split(";");

  return {
    pathName,
    params: params?.split?.("&")?.map?.((i) => {
      const [key, value] = i.split("=");

      return { key, value };
    }),
  };
};

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#000000",
      paper: "#000000",
    },
  },
  typography: {
    fontFamily: '"Montserrat", sans-serif',
    fontOpticalSizing: "auto",
    fontWeight: "200",
    fontStyle: "normal",
  },
});

const Default = () => {
  const [selectedTab, setSelectedTab] = useState(getHash()?.pathName);

  useEffect(() => {
    const event = () => {
      setSelectedTab(getHash()?.pathName);
    };

    window.addEventListener("hashchange", event);

    return () => {
      window.removeEventListener("hashchange", event);
    };
  }, []);

  const Component = getComponent(selectedTab);

  if (!Component) {
    return (
      <Box flex center sx={{ minHeight: "100dvh" }}>
        404 page not found
      </Box>
    );
  }

  return <Component />;
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Default />
      <Box sx={{ minHeight: 20 }} />
    </ThemeProvider>
  );
};

export default App;
