import FetchCompany from "@/app/requests/FetchCompany";
import { UseCompany } from "@/app/contexts/CompanyContext";
import useTranslation from "@/app/service/useTranslation";
import Validate from "./useValidate";

const CompanyForm = () => {
  const { translatePageText } = useTranslation();
  const { runValidation } = Validate();
  const { setCompany } = UseCompany();

  const findCompany = (e: string) => {
    runValidation(e, e).then((response) => {
      if (response.validated) {
        const fetchedCompany = FetchCompany(e);
        fetchedCompany.then((e) => {
          setCompany(e);
        });
      }
    });
  };
  return (
    <>
      <div className='border-spacing-2 border-green-300'></div>
      <br />
      <div
        className='text-sm'
        onClick={(e) => {
          const target = e.target as HTMLDivElement;
          findCompany(target.id);
        }}
      >
        <div>{translatePageText("exampleCompanyIDs")}</div>
        <button
          className='bg-base-mid text-white border-2 rounded-md border-base-dark shadow-sm shadow-gray-400 m-2 p-4 hover:border-white hover:bg-blue-500'
          id='7777777-1'
        >
          "7777777-1"
        </button>
        <button
          className='bg-base-mid text-white border-2 rounded-md border-base-dark shadow-sm shadow-gray-400  m-2 p-4 hover:border-white hover:bg-blue-500'
          id='8888888-1'
        >
          "8888888-1"
        </button>
        <button
          className='bg-base-mid text-white border-2 rounded-md border-base-dark shadow-sm shadow-gray-400  m-2 p-4 hover:border-white hover:bg-blue-500'
          id='9999999-1'
        >
          "9999999-1"
        </button>
      </div>
    </>
  );
};

export default CompanyForm;
