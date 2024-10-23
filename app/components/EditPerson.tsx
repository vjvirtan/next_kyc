import FetchSelections from "../requests/FetchSelections";
import { FetchResponse } from "../requests/useFetch";
import { UseCompany } from "../contexts/CompanyContext";
import { UsePersonsContex } from "../contexts/Person";
import { UseReportContext } from "../contexts/Report";
import usePersonsService from "../service/usePersons";
import Benefiary from "./form/Benefiary";
import Board from "./form/Board";
import Shares from "./form/Shares";
import PersonInfo from "./Presentation/PersonInfo";

const EditPerson = () => {
  const { useCompany } = UseCompany();
  const { usePerson, setPerson } = UsePersonsContex();
  const { useReport, setReport } = UseReportContext();
  const { updateBoardMember, uppdateOwner, updateBeneficiary } =
    FetchSelections();
  const { checkPerson, getPerson } = usePersonsService();

  const changeBoardMemberships = (choise: string) => {
    const role = useReport?.boardRoles?.find(
      (e) => e.boardRole == choise && e.personId == usePerson.person.personId
    );

    let addRemove = true;
    let choiseId = "";

    if (role != undefined) {
      addRemove = false;
      choiseId = role.id;
    }

    // DEAL ERROR //
    updateBoardMember(
      addRemove,
      choiseId,
      choise,
      useCompany!.businessId,
      usePerson!.person!.personId
    ).then((data: FetchResponse) => {
      if (data.status) {
        if (useReport.businessId == useCompany!.businessId) {
          setReport((prev) => ({ ...prev, boardRoles: data.data! }));
        } else {
          setReport({
            businessId: useCompany!.businessId,
            boardRoles: data.data!,
          });
        }
        useReport.boardRoles?.forEach((e) => {
          if (!checkPerson(e.personId)) {
            getPerson(e.personId);
          }
        });
      } else {
        // TODO: ERROR STYLE AND MESSAGE TO SELECTION
      }
    });
  };

  // OWNER UPDATE

  const boardRoles = ["ceo", "headOfBoard", "boardMember", "deputyBoardMember"];
  const ready = (
    <>
      <div className='flex bg-main-light border-2 rounded-lg border-base-dark m-3 p-2'>
        <div>
          <PersonInfo />
          <div className={`flex `}>
            <Shares />
            <Benefiary />
          </div>
        </div>
        <div>
          <Board
            boardRoles={boardRoles}
            changeBoardMemberships={changeBoardMemberships}
          />
        </div>
      </div>
    </>
  );
  return usePerson.person.personId == "" ? <></> : ready;
};

export default EditPerson;
