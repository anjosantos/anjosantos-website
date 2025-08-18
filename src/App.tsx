import AppRoutes from "./routes";
import "./App.css";

import { useLoading } from "@/providers";
import { FullLoader } from "@/components";

const App = () => {
  const { loadingContext } = useLoading();
  const { isLoading } = loadingContext;

  return (
    <>
      <AppRoutes />
      <FullLoader isLoading={isLoading} />
    </>
  );
};

export default App;
