import React, { type JSX } from "react";
import { LoadingProvider } from "./loading-provider";

export const RootProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return <LoadingProvider>{children}</LoadingProvider>;
};
