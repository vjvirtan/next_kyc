import { PersonInterface } from "../contexts/Person";
import { FetchResponse, URL } from "../interface/FetchInterface";

import { useFetch } from "./useFetch";
const fResponse: FetchResponse = {
  status: false,
  data: null,
  style: "",
  errorMessage: null,
  simpleErrorMessage: "",
};
const FetchPerson = async (personId: string) => {
  const { postData } = useFetch();
  let personData: PersonInterface | null = null;

  await postData(URL + "/demodata/person", {
    personId: personId.toUpperCase(),
  })
    .then((d) => {
      if (!d.ok) {
        d.json().then((err) => {
          fResponse.errorMessage = err;
        });
        return fResponse;
      }

      return d.json();
    })
    .then((data) => {
      personData = {
        firstName: data.firstname,
        lastName: data.lastname,
        personId: data.personId,
        systemId: data.personId,
        id: data.personId,
        nationalities: data.nationalities,
      };
      fResponse.status = true;
      fResponse.data = personData;
    })
    .catch((error) => {});

  return fResponse;
};

export default FetchPerson;
