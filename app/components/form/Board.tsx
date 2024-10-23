import { UsePersonsContex } from "@/app/contexts/Person";
import { UseReportContext } from "@/app/contexts/Report";
import useTranslation from "@/app/service/useTranslation";
import useStyle from "@/app/useStyle";
import React, { FC, useState } from "react";

interface BoardProps {
  changeBoardMemberships: (choise: string) => void;
  boardRoles: string[];
}

const Board: FC<BoardProps> = ({ boardRoles, changeBoardMemberships }) => {
  const { translate, translatePageText } = useTranslation();
  const { usePerson } = UsePersonsContex();
  const { useReport } = UseReportContext();
  const { selectedStyle, itemStyle, mainItemStyle, headerStyle } = useStyle();

  return (
    <div className='grid mb-4 border border-main-primary rounded-lg bg-main-mid'>
      <div className={`${headerStyle}`}>
        {translatePageText("tradeRegister")}
      </div>
      <div className={`${mainItemStyle}`}>
        {boardRoles.map((e) => {
          const isSelected = useReport.boardRoles
            ?.filter((f) => f.boardRole == e)
            .find((e) => e.personId == usePerson.person.personId)
            ? true
            : false;
          return (
            <div key={e}>
              <div
                className={` ${
                  isSelected ? `${selectedStyle}` : `${itemStyle} text-black`
                }`}
                onClick={() => changeBoardMemberships(e)}
              >
                <div className='flex gap-3 p-1 border-y border-gray-300'>
                  <input
                    className='m-1 px-2 '
                    checked={isSelected}
                    type='checkbox'
                    readOnly
                  ></input>
                  <div className='col-start-2 px-2 col-span-9 '>
                    {translate(e)}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Board;
