import { FetchResponse, URL, useFetch } from "./useFetch";
interface BodyInterface {
  info?: string[];
  businessId: string;
  personId: string;
  percentage?: number;
}

const fResponse: FetchResponse = {
  status: false,
  data: [] as any,
  style: "",
  errorMessage: null,
  simpleErrorMessage: "",
};

const FetchSelections = () => {
  const { postData } = useFetch();

  const updateBoardMember = async (
    addRemove: boolean,
    id: string,
    boardRole: string,
    businessId: string,
    personId: string
  ) => {
    await postData(URL + "/board/update", {
      id: id,
      addRemove: addRemove,
      boardRole: boardRole,
      businessId: businessId,
      personId: personId,
    })
      .then((data) => {
        fResponse.status = data.ok;
        if (!data.ok) {
          throw new Error(`Error status: ${data}`);
        }
        return data.json();
      })
      .then((data) => {
        if (data.businessId != businessId) {
          throw new Error(
            `SERVER RETURN WRONG DATA: BUSINESS ID.s NOT MATCH!!! `
          );
        }

        fResponse.data = data.boardRoles.map(
          (d: {
            id: string;
            personId: string;
            boardRole: string;
            isNew: string;
            d: boolean;
          }) => {
            return {
              id: d.id,
              personId: d.personId,
              boardRole: d.boardRole,
              isNew: d.boardRole == boardRole && d.personId == personId,
            };
          }
        );

        return fResponse;
      })
      .catch((err) => {
        fResponse.simpleErrorMessage = err;
      });
    return fResponse;
  };

  const uppdateOwner = async (
    businessId: string,
    personId: string,
    percentage: number
  ) => {
    const response = await postData(URL + "/owner/update", {
      businessId: businessId,
      personId: personId,
      percentage: percentage,
    })
      .then((data) => {
        fResponse.status = data.ok;
        if (!data.ok) {
          throw new Error(`Error status: ${data}`);
        }
        return data.json();
      })
      .then((data) => {
        fResponse.data = data.owners;
        return fResponse;
      });
    return response;
  };

  const updateBeneficiary = async (
    businessId: string,
    personId: string,
    addRemove: boolean
  ) => {
    return await postData(URL + "/beneficiary/update", {
      businessId: businessId,
      personId: personId,
      addRemove: addRemove,
    })
      .then((data) => {
        fResponse.status = data.ok;
        if (!data.ok) {
          throw new Error(`Error status: ${data}`);
        }
        return data.json();
      })
      .then((data) => {
        fResponse.data = data.beneficiaries;
        return fResponse;
      })
      .catch();
  };

  return { updateBoardMember, uppdateOwner, updateBeneficiary };
};

export default FetchSelections;
