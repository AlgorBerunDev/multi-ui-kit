import React, { createContext, useContext, ReactNode } from "react";

type LibraryType = "antd" | "material-ui";

interface UIContextProps {
  library: LibraryType;
}

const UIContext = createContext<UIContextProps | undefined>(undefined);

export const UIProvider: React.FC<{ library: LibraryType; children: ReactNode }> = ({ library, children }) => {
  return <UIContext.Provider value={{ library }}>{children}</UIContext.Provider>;
};

export const useUI = () => {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error("useUI must be used within a UIProvider");
  }
  return context;
};
