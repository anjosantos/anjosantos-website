import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage, ProjectPage } from "@/pages";
import APP_PATHS from "./paths";

const AppRoutes: React.FC = () => (
  <Router>
    <Routes>
      <Route path={APP_PATHS.HOME} element={<HomePage />} />
      <Route path={APP_PATHS.PROJECT} element={<ProjectPage />} />
    </Routes>
  </Router>
);

export default AppRoutes;
