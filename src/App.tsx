import React from "react";
import GlobalStyled from "./styles/global";
import AppRoutes from "./routes";

const App: React.FC = () => (
  <>
    <GlobalStyled />
    <AppRoutes />
  </>
);

export default App;
