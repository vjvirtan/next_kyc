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
      console.log(d);
      if (!d.ok) {
        fResponse.status = false;
        d.json().then((err) => {
          fResponse.errorMessage = err;
        });
        throw new Error("");
      }

      return d.json();
    })

    .then((data) => {
      console.log(" TULEEKO TÄNNE");
      console.log(data);
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
    .catch((error) => {
      return fResponse;
    });

  return fResponse;
};

export default FetchPerson;
