import { createContext, ReactNode, useContext, useState } from "react";

export interface CompanyInterface {
  id: string;
  businessId: string;
  name: string;
  address?: string;
  postalCode?: string;
  postalPlace?: string;
}

export const CompanyContext = createContext<CompanyType>({} as CompanyType);

export interface CompanyType {
  useCompany: CompanyInterface | null;
  setCompany: React.Dispatch<React.SetStateAction<CompanyInterface | null>>;
}

export const UseCompany = (): CompanyType => useContext(CompanyContext);

interface ChildType {
  children: ReactNode;
}

export const CompanyContextProvider = ({ children }: ChildType) => {
  const [useCompany, setCompany] = useState<CompanyInterface | null>(null);
  return (
    <CompanyContext.Provider value={{ useCompany, setCompany }}>
      {children}
    </CompanyContext.Provider>
  );
};
