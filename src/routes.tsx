import { Route, Routes } from "react-router-dom";
import LandingPage from "./views/LandingPage/LandingPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<LandingPage />} path="/" />
    </Routes>
  );
};

export default AppRoutes;
