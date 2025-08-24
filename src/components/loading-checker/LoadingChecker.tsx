import React, { useEffect } from "react";

import { useLoading } from "@/providers";

const LoadingChecker: React.FC = () => {
  const { loadingContext } = useLoading();
  const { setIsLoading } = loadingContext;
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return <></>;
};

export default LoadingChecker;
