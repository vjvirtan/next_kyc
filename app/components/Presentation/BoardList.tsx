import { UsePersonsContex } from "@/app/contexts/Person";
import { UseReportContext } from "@/app/contexts/Report";
import usePersons from "@/app/service/usePersons";
import useTranslation from "@/app/service/useTranslation";
import useStyle from "@/app/useStyle";
import React from "react";
import { EmptyList } from "./EmptyList";

const BoardList = (): React.JSX.Element => {
  const { translate } = useTranslation();
  const { useReport } = UseReportContext();
  const { checkPerson, getPerson } = usePersons();
  const { setPerson } = UsePersonsContex();
  const {
    mainListStyle,
    listItemStyle,
    mainListComponentStyle,
    selectAnimation,
    newItemStyle,
  } = useStyle();

  const ready = () => {
    return (
      <>
        <div className={` ${mainListComponentStyle}  `}>
          {translate("tradeRegistryInfo")}
          <div className='grid grid-row-auto grid-cols-1'>
            {useReport.boardRoles!.map((e) => {
              let person = checkPerson(e.personId);
              if (!person) {
                getPerson(e.personId).then((p) => (person = p.data));
              }
              const rowStyle = "grid grid-cols-6    border-b-2 odd:bg-gray-200";
              const isNew = e.isNew ? newItemStyle : "";
              return (
                <>
                  <div
                    onClick={(e) =>
                      setPerson((prev) => ({ ...prev, person: person! }))
                    }
                    className={`${rowStyle} ${mainListStyle} ${isNew} `}
                    key={e.id}
                  >
                    <div
                      className={` ${listItemStyle} col-span-3 content-end flex gap-3 flex-wrap  `}
                    >
                      <div className='row-start-1 '>{person?.lastName}</div>
                      <div className='row-start-1'>{person?.firstName}</div>
                      <div className='row-start-1 pl-5'>{person?.personId}</div>
                      <div className={selectAnimation}>select</div>
                    </div>

                    <div
                      className={` ${listItemStyle} col-span-2  col-start-4`}
                    >
                      {translate(e.boardRole)}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </>
    );
  };

  return useReport.boardRoles?.length == 0 ||
    useReport.boardRoles == undefined ? (
    <EmptyList listName={"tradeRegistryInfo"} />
  ) : (
    ready()
  );
};

export default BoardList;
