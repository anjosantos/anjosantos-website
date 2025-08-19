import React, { type JSX } from "react";
import { LoadingProvider } from "./loading-provider";
import { PageProvider } from "./page-provider";

export const RootProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <LoadingProvider>
      <PageProvider>{children}</PageProvider>
    </LoadingProvider>
  );
};
