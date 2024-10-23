import { UsePersonsContex } from "@/app/contexts/Person";
import useStyle from "@/app/useStyle";
import useTranslation from "@/app/service/useTranslation";
import React from "react";

const PersonInfo = () => {
  const { translate } = useTranslation();
  const { usePerson } = UsePersonsContex();
  const { labelStyle, itemStyle, mainItemStyle } = useStyle();

  const noData = <></>;
  const main = (
    <div className='bg-main-primary text-gray-900 rounded p-4 mr-2 text-left  '>
      <div className={`${mainItemStyle} grid grid-cols-3`}>
        <div className={labelStyle}>{translate("firstname")}</div>
        <div className={itemStyle}> {usePerson?.person?.firstName}</div>
      </div>

      <div className={`${mainItemStyle} grid grid-cols-3`}>
        <div className={labelStyle}>{translate("lastname")}</div>
        <div className={itemStyle}>{usePerson?.person?.lastName}</div>
      </div>
      <div className={`${mainItemStyle} grid grid-cols-3`}>
        <div className={`${labelStyle} `}>{translate("personId")}</div>
        <div className={itemStyle}>{usePerson.person.personId}</div>
      </div>
      <div className={`${mainItemStyle} grid grid-cols-3`}>
        <div className={labelStyle}>{translate("nationality")}</div>
        <div className='flex gap-2 py-1 bg-main-light rounded-md'>
          {usePerson?.person?.nationalities.map((e) => (
            <div className='row-start-1 px-2 pl-4 text-sm content-end' key={e}>
              {e.substring(3)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return usePerson.person.id == "" ? noData : main;
};

export default PersonInfo;
