import AppRoutes from "./routes";
import "./App.css";

import { useLoading } from "@/providers";
import { FullLoader, FullOverlay } from "@/components";

const App = () => {
  const { loadingContext } = useLoading();
  const { isLoading } = loadingContext;

  return (
    <>
      <AppRoutes />
      <FullOverlay />
      <FullLoader isLoading={isLoading} />
    </>
  );
};

export default App;
