import { UseReportContext } from "@/app/contexts/Report";
import usePersonsService from "@/app/service/usePersons";
import useTranslation from "@/app/service/useTranslation";
import useStyle from "@/app/useStyle";
import React from "react";
import { EmptyList } from "./EmptyList";
import { UsePersonsContex } from "@/app/contexts/Person";

const BeneficiaryList = () => {
  const { useReport } = UseReportContext();
  const { getPerson, checkPerson, updatePerson } = usePersonsService();
  const { translate } = useTranslation();
  const { usePerson } = UsePersonsContex();
  const {
    mainListStyle,
    listItemStyle,
    selectAnimation,
    mainListComponentStyle,
    newItemStyle,
  } = useStyle();

  const ready = (
    <div className={`${mainListComponentStyle}`}>
      <div>{translate("beneficiaries")}</div>
      {useReport.beneficiaries?.map((e) => {
        let person = checkPerson(e.personId);
        if (!person) {
          getPerson(e.personId).then((p) => (person = p.data));
        }
        if (person == undefined || person == null) {
          return <>Person not found!!! contact your system admin!!!</>;
        }
        const isNew =
          e.personId == usePerson.person.personId ? newItemStyle : "";
        return (
          <div
            onClick={(e) => updatePerson(person!)}
            className={` ${mainListStyle} grid grid-cols-6 ${isNew} `}
          >
            <div className={`${listItemStyle} col-span-3 flex gap-3  `}>
              <div>{person?.firstName}</div>
              <div>{person?.lastName}</div>
            </div>
            <div
              className={`${listItemStyle} col-start-4 row-start-1 col-span-2  `}
            >
              {person?.personId}
              <div className={selectAnimation}>select</div>
            </div>
          </div>
        );
      })}
    </div>
  );
  return useReport.beneficiaries == undefined ||
    useReport.beneficiaries.length == 0 ? (
    <EmptyList listName='beneficiaries' />
  ) : (
    ready
  );
};

export default BeneficiaryList;
