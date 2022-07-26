import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { theme } from "./styles/base";
import { ThemeProvider } from "styled-components";
import SideBar from "./components/Sidebar/Sidebar";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <SideBar />
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
