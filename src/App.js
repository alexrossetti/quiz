import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Themes, GlobalStyles } from "./styles.js";

export default function App() {
  return (
    <ThemeProvider theme={Themes["default"]}>
      <BrowserRouter>
        <GlobalStyles />
        <Routes>
          <Route index element={<h1>Home</h1>} />
          <Route path="/quiz">
            <Route path=":id" element={<h2>quiz</h2>} />
          </Route>
          <Route path="/results" element={<h1>Results</h1>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
