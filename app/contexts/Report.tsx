import React, {
  createContext,
  type ReactNode,
  useContext,
  useState,
} from "react";
import { BoardInterface } from "../interface/BoardInterface";

import { BeneficiaryInterface } from "../interface/BeneficiaryInterfaca";
import { OwnerInterface } from "../components/Owner";

export interface ReportInterface {
  businessId: string;
  boardRoles?: BoardInterface[];
  owners?: OwnerInterface[];
  beneficiaries?: BeneficiaryInterface[];
}
export const ReportsContext = createContext<ReportType>({} as ReportType);

export interface ReportType {
  useReport: ReportInterface;
  setReport: React.Dispatch<React.SetStateAction<ReportInterface>>;
}

export const UseReportContext = (): ReportType => useContext(ReportsContext);

interface ChildType {
  children: ReactNode;
}
export const ReportContextProvider = ({ children }: ChildType) => {
  const [useReport, setReport] = useState<ReportInterface>({
    businessId: "",
    beneficiaries: [],
  });
  return (
    <ReportsContext.Provider value={{ useReport, setReport }}>
      {children}
    </ReportsContext.Provider>
  );
};
