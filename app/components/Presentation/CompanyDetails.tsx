import { UseCompany } from "@/app/contexts/CompanyContext";
import { initPerson, UsePersonsContex } from "@/app/contexts/Person";
import useTranslation from "@/app/service/useTranslation";
import useStyle from "@/app/useStyle";
import React from "react";

const CompanyDetails = (): React.JSX.Element => {
  const { useCompany, setCompany } = UseCompany();
  const { translate, translatePageText } = useTranslation();
  const { usePerson, setPerson } = UsePersonsContex();
  const { labelStyle, itemStyle } = useStyle();

  const empty = () => {
    return <></>;
  };

  const details = (
    <>
      <div className='gap-10 p-5 bg-main-primary rounded-md m-2 '>
        <div className=' rounded bg-orange-400  p-3 max-w-max '>
          <div className={`${labelStyle} grid grid-cols-3 `}>
            <div className='row-start-1 px-3'>{translate("companyName")} </div>
            <div className={`${itemStyle} row-start-1 col-span-2`}>
              {useCompany?.name}
            </div>
          </div>

          <div className={`${labelStyle} grid grid-cols-3 `}>
            <div className='row-start-1 px-3'>{translate("businessId")} </div>
            <div className={`${itemStyle} row-start-1 col-span-2`}>
              {useCompany?.businessId}
            </div>
          </div>

          <div className={`${labelStyle} grid grid-cols-3 `}>
            <div className='row-start-1 px-3'>
              {translatePageText("address")}{" "}
            </div>
            <div className={`${itemStyle} row-start-1 col-span-2`}>
              <div> {useCompany?.address}</div>
              <div>
                {useCompany?.postalCode} {useCompany?.postalPlace}
              </div>
            </div>
          </div>
        </div>
        <div className='flex gap-4 p-3'>
          <div
            onClick={(e) => {
              setCompany(null);
              setPerson((prev) => ({ ...prev, person: initPerson }));
            }}
            className='rounded-xl  text-white border-2 bg-green-900  p-2 content-center hover:border-orange-600'
          >
            {translatePageText("done")?.toUpperCase()}
          </div>

          {usePerson.person.personId == "" ? (
            <></>
          ) : (
            <div
              onClick={(e) =>
                setPerson((prev) => ({
                  ...prev,
                  person: initPerson,
                }))
              }
              className='rounded-xl  text-white border-2 bg-green-900  shadow-sm shadow-green-500  p-2  content-center hover:border-orange-600'
            >
              {" "}
              {translatePageText("addperson")?.toUpperCase()}
            </div>
          )}
        </div>
      </div>
    </>
  );

  return <>{useCompany == null ? empty() : details}</>;
};

export default CompanyDetails;
