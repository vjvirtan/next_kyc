import FetchSelections from "@/app/requests/FetchSelections";
import { UseCompany } from "@/app/contexts/CompanyContext";
import { PersonInterface, UsePersonsContex } from "@/app/contexts/Person";
import { UseReportContext } from "@/app/contexts/Report";
import useTranslation from "@/app/service/useTranslation";
import useStyle from "@/app/useStyle";
import React from "react";

export interface BenReturn {
  ren: React.JSX.Element;
  person: PersonInterface;
  classStyle: string;
}

const Benefiary = () => {
  const { translatePageText } = useTranslation();
  const { usePerson } = UsePersonsContex();
  const { useCompany } = UseCompany();
  const { updateBeneficiary } = FetchSelections();
  const { useReport, setReport } = UseReportContext();
  const { selectedStyle } = useStyle();

  const changeBen = (isBene: boolean) => {
    updateBeneficiary(
      useCompany!.businessId,
      usePerson.person.personId,
      !isBene
    ).then((response) => {
      if (response.status) {
        setReport((prev) => ({
          ...prev,
          beneficiaries: response.data,
        }));
      } else {
      }
    });
  };

  let isBene = useReport.beneficiaries?.some(
    (e) => e.personId == usePerson.person.personId
  );

  isBene = isBene == undefined ? false : isBene;

  return (
    <>
      <div
        className={`flex-1
          m-2 rounded-md p-2 shadow-md shadow-main-primary content-center
          ${isBene ? selectedStyle : "bg-main-light"}`}
        onClick={(e) => changeBen(isBene!)}
      >
        <div className='justify-self-start  '>
          <div className=' px-2 col-span-9 '>
            <input
              className='p-2 mr-2'
              checked={isBene}
              type='checkbox'
              readOnly
            ></input>
            {translatePageText("beneficiary")}
          </div>
        </div>
      </div>
    </>
  );
};

export default Benefiary;
