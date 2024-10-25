import React from "react";
import { UsePersonsContex } from "../../contexts/Person";

import FetchReport from "../../requests/FetchReport";
import { UseReportContext } from "../../contexts/Report";
import { UseCompany } from "../../contexts/CompanyContext";
import ReportCompany from "../Presentation/ReportCompany";

import useStyle from "@/app/useStyle";
import usePersonsService from "../../service/usePersons";

export const Kyc = (): React.JSX.Element => {
  const { useCompany } = UseCompany();
  const { usePerson } = UsePersonsContex();
  const { useReport } = UseReportContext();
  const { checkPerson, getPerson } = usePersonsService();
  const { mainItemStyle, itemStyle, headerStyle } = useStyle();
  // RESET DATA
  if (useCompany!.businessId != useReport.businessId) {
    FetchReport(useCompany!.businessId);

    useReport.boardRoles?.forEach((e) => {
      if (!checkPerson(e.personId)) {
        getPerson(e.personId);
      }
    });
  }

  const fillForm = () => {
    return <div></div>;
  };
  if (usePerson.person.id == "") {
    return (
      <>
        <ReportCompany />
      </>
    );
  } else {
    return (
      <>
        <div>{fillForm()}</div>
        <ReportCompany />
      </>
    );
  }
};
