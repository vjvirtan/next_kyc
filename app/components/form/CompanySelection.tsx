"use-client";

import { UseCompany } from "@/app/contexts/CompanyContext";
import CompanyForm from "./CompanyForm";
import { Kyc } from "./Kyc";

const CompanySelection = () => {
  const { useCompany } = UseCompany();

  const companyReady = () => {
    return useCompany == null ? <CompanyForm /> : <Kyc />;
  };

  // FIND COMPANY

  return (
    <>
      <div className='col-start-3 col-end-7'>{companyReady()}</div>
    </>
  );
};

export default CompanySelection;
