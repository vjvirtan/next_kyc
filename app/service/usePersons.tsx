import { PersonInterface, UsePersonsContex } from "../contexts/Person";
import { FetchResponse } from "../interface/FetchInterface";
import FetchPerson from "../requests/FetchPerson";
import {} from "../requests/useFetch";

const fetchResponse: FetchResponse = {
  status: false,
  data: [] as any,
  style: "",
  errorMessage: null,
  simpleErrorMessage: "",
};

const usePersonsService = () => {
  const { usePerson, setPerson } = UsePersonsContex();

  const checkPerson = (personId: string): PersonInterface | undefined => {
    if (usePerson.persons[0] == null || usePerson.persons == null) {
      return undefined;
    }
    return usePerson?.persons?.find((e) => e.personId == personId);
  };
  const getPerson = async (personId: string): Promise<FetchResponse> => {
    const result = await FetchPerson(personId)
      .then((data) => {
        if (data.status) {
          console.log(" STATUS MAYBY NOT SET ");
        }
        setPerson((prev) => ({
          ...prev,
          persons: [...prev.persons, data.data],
        }));

        return data;
      })
      .catch();
    return result;
  };

  const updatePerson = (person: PersonInterface) => {
    setPerson((prev) => ({ ...prev, person: person }));
  };
  return { getPerson, checkPerson, updatePerson };
};

export default usePersonsService;
