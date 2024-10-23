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
      <div>{translatePageText("findCompany")} </div>
      <div className='border-spacing-2 border-green-300'>
        <input
          className=''
          id='businessId'
          onChange={(e) => findCompany(e.target.value)}
          type='text'
        ></input>
      </div>
      <br />
      <div
        className='text-sm'
        onClick={(e) => {
          const target = e.target as HTMLDivElement;
          findCompany(target.id);
        }}
      >
        <div>{translatePageText("exampleCompanyIDs")}</div>
        <div id='7777777-1'>"7777777-1"</div>
        <div id='8888888-1'>"8888888-1"</div>
        <div id='9999999-1'>"9999999-1"</div>
      </div>
    </>
  );
};

export default CompanyForm;
