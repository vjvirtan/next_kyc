import { UsePersonsContex } from "@/app/contexts/Person";
import { UseReportContext } from "@/app/contexts/Report";
import usePersonsService from "@/app/service/usePersons";
import useTranslation from "@/app/service/useTranslation";
import useStyle from "@/app/useStyle";
import { EmptyList } from "./EmptyList";

function OwnerList() {
  const { translate } = useTranslation();
  const { useReport } = UseReportContext();
  const { checkPerson, getPerson, updatePerson } = usePersonsService();
  const { usePerson } = UsePersonsContex();
  const {
    mainListStyle,
    listItemStyle,
    mainListComponentStyle,
    selectAnimation,
    newItemStyle,
  } = useStyle();

  const common = <div>{translate("owners")}</div>;

  const empty = <EmptyList listName='owners' />;
  let oldPercentage: number = 0;

  const ready = () => {
    return (
      <>
        <div className={`${mainListComponentStyle}`}>
          {common}
          <div className={` grid grid-row-auto grid-cols-1 `}>
            {useReport.owners!.map((e) => {
              let person = checkPerson(e.personId);
              if (!person) {
                getPerson(e.personId).then((p) => (person = p.data));
              }

              const isNew =
                person?.personId == usePerson.person.personId &&
                oldPercentage != e.percentage
                  ? newItemStyle
                  : "";
              oldPercentage =
                person?.personId == usePerson.person.personId
                  ? e.percentage
                  : oldPercentage;
              return (
                <>
                  <div
                    onClick={(e) => updatePerson(person!)}
                    className={`${mainListStyle} grid grid-cols-3 justify-evenly  md:whitespace-nowrap md:overflow-hidden  ${isNew}`}
                    key={person?.lastName}
                  >
                    <div className={`${listItemStyle}  gap-3 flex `}>
                      <div>{person?.lastName}</div>
                      <div>{person?.firstName}</div>
                    </div>
                    <div className={`${listItemStyle} justify-start `}>
                      <div>
                        {person?.personId}
                        <div className={selectAnimation}>select</div>
                      </div>
                    </div>
                    <div className={`${listItemStyle}  `}>
                      {e?.percentage} {" %"}
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

  return useReport.owners?.length == undefined ? empty : ready();
}

export default OwnerList;
