import { CompanyInterface } from "../contexts/CompanyContext";
import { URL, useFetch } from "./useFetch";

const FetchCompany = async (id: string) => {
  const { postData } = useFetch();
  let companyData: CompanyInterface | null = null;

  const data = await postData(URL + "/demodata/company", { businessId: id })
    .then((data) => {
      if (!data.ok) {
        throw new Error(`Error status: ${data}`);
      }
      return data.json();
    })
    .then((data) => {
      companyData = {
        id: data.id,
        businessId: data.businessId,
        name: data.name,
        address: data.address,
        postalCode: data.postalCode,
        postalPlace: data.postalPlace,
      };
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  // fetchPerson;
  // DUMMY DATA
  const dummy: CompanyInterface = {
    id: "",
    businessId: "",
    name: "",
    address: "",
    postalCode: "",
    postalPlace: "",
  };

  return companyData == null ? dummy : companyData;
};

export default FetchCompany;
