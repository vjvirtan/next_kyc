import { UseReportContext } from "../contexts/Report";
import { URL } from "../interface/FetchInterface";
import { useFetch } from "./useFetch";
const FetchReport = (businessId: string) => {
  const { postData } = useFetch();
  const { setReport } = UseReportContext();
  const report = postData(URL + "/report/get", { businessId: businessId })
    .then((data) => {
      if (!data.ok) {
        throw new Error(`Error status: ${data}`);
      }
      return data.json();
    })

    .then((data) => {
      setReport({
        businessId: data.businessId,
        boardRoles: data.board.boardRoles,
        owners: data.owners.owners,
        beneficiaries: data.beneficiaries.beneficiaries,
      });
    })
    .catch((err) => {
      setReport({ businessId: businessId });
    });
};

export default FetchReport;
