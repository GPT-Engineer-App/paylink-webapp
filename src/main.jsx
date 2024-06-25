import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

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

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
