'use client'
import React, { createContext, useContext, ReactNode, useState } from "react";

export interface IContext {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
}

// Rename the exported Context to avoid conflicts
export let StateContext = createContext<IContext | undefined>(undefined);

export const StateContextProvider = ({ children }: { children: ReactNode }) => {
  const [name, setName] = useState<string>("");

  return (
    <StateContext.Provider value={{ setName, name }}>
      {children}
    </StateContext.Provider>
  );
};
export default StateContextProvider;
