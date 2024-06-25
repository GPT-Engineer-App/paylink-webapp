import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme, ColorModeScript } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#4A148C",
    800: "#6A1B9A",
    700: "#7B1FA2",
    600: "#8E24AA",
    500: "#9C27B0",
    400: "#AB47BC",
    300: "#BA68C8",
    200: "#CE93D8",
    100: "#E1BEE7",
    50: "#F3E5F5",
  },
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({ colors, config });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
