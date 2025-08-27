import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { ProjectPage } from "@/pages";
import APP_PATHS from "./paths";
import LoadingChecker from "@/components/loading-checker/LoadingChecker";

const AppRoutes: React.FC = () => (
  <Router>
    <Routes>
      <Route
        path={APP_PATHS.HOME}
        element={
          <>
            <LoadingChecker />
          </>
        }
      />
      <Route path={APP_PATHS.PROJECT} element={<ProjectPage />} />
    </Routes>
  </Router>
);

export default AppRoutes;
