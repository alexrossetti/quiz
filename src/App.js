import React from "react";
import { ThemeProvider } from "styled-components";
import { Themes, GlobalStyles } from "./styles.js";

export default function App() {
  return (
    <ThemeProvider theme={Themes["default"]}>
      <GlobalStyles />
      app
    </ThemeProvider>
  );
}
