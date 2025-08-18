import { useState, createContext, useContext, type JSX } from "react";

export const LoadingContext = createContext<any>([
  {},
  () => {
    return;
  },
]);

export const LoadingProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <LoadingContext.Provider
      value={{
        loadingContext: {
          isLoading,
          setIsLoading,
        },
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};

const useLoading = () => useContext(LoadingContext);
export default useLoading;
