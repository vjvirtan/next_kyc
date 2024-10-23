import React from "react";
import FetchAdvice from "../requests/FetchAdvice";
import { UseAdviceContext } from "../contexts/Advice";
import EditPerson from "./EditPerson";
import CompanySelection from "./form/CompanySelection";
import FindPersonForm from "./form/FindPersonForm";
import HeaderComponent from "./HeaderComponent";
import { LanguageSelection } from "./LanguageSelection";
import CompanyDetails from "./Presentation/CompanyDetails";

const preLoad = () => {
  FetchAdvice();
  return (
    <>
      <div>loading data...</div>
    </>
  );
};

export const Ready = (): React.JSX.Element => {
  const getReady = () => {
    const { useAdvice, setAdvice } = UseAdviceContext();

    const ready = () => {
      return (
        <>
          <div className='row-start-1 row-end-1'>
            <div className=' grid grid-cols-5 rounded-md text-white mb-3 bg-gray-600  shadow-md shadow-orange-500 items-center justify-center gap-y-2'>
              <div className=' col-start-1 col-span-3  '>
                <HeaderComponent />
              </div>
              <div className='col-start-5 p-2'>
                <LanguageSelection />
              </div>
            </div>
            <div className='flex rounded mb-3 mt-3 ring-2 ring-base-dark shadow-md shadow-orange-500 bg-main-mid'>
              <CompanyDetails />
              <div className={``}>
                <FindPersonForm />
                <EditPerson />
              </div>
            </div>
            <div></div>
          </div>
          <div className='row-start-3 col-start-1 '>
            <CompanySelection />
          </div>
        </>
      );
    };

    return useAdvice.advice.length != 0 ? ready() : preLoad();
  };

  return getReady();
};
