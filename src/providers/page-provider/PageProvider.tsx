import { useState, createContext, useContext, type JSX } from "react";

import { PageKeys } from "@/pages/grid-pages/pageKeys";

export const PageContext = createContext<any>([
  {},
  () => {
    return;
  },
]);

export const PageProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const [activeKey, setActiveKey] = useState<PageKeys>(PageKeys.HOME);

  return (
    <PageContext.Provider
      value={{
        pageContext: {
          activeKey,
          setActiveKey,
        },
      }}
    >
      {children}
    </PageContext.Provider>
  );
};

const usePage = () => useContext(PageContext);
export default usePage;
