import { ReactNode, createContext, useState } from "react";
export interface INameContext {
  name: string;
  setName: (name: string) => void;
}
type NameContextProviderProps = {
  children: ReactNode;
};

export const NameContext = createContext<INameContext | undefined>(undefined);

export const NameContextProvider = ({ children }: NameContextProviderProps) => {
  const [name, setName] = useState("Láďa");

  const value = {
    name,
    setName,
  };

  return <NameContext.Provider value={value}>{children}</NameContext.Provider>;
};
