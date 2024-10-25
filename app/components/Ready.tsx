import React from "react";
import FetchAdvice from "../requests/FetchAdvice";
import { UseAdviceContext } from "../contexts/Advice";
import EditPerson from "./EditPerson";
import CompanySelection from "./form/CompanySelection";
import FindPersonForm from "./form/FindPersonForm";
import HeaderComponent from "./HeaderComponent";
import { LanguageSelection } from "./LanguageSelection";
import CompanyDetails from "./Presentation/CompanyDetails";
import Sanctions from "./form/Sanctions";

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
    const { useAdvice } = UseAdviceContext();

    const ready = () => {
      return (
        <>
          <div className='row-start-1 row-end-1'>
            <div className=' grid grid-flow-col auto-cols-[minmax(300 ,1fr)] rounded-md text-white mb-3 bg-gray-600  shadow-md shadow-orange-500  gap-y-2'>
              <div className='    '>
                <HeaderComponent />
              </div>
              <div className='p-2 '>
                <LanguageSelection />
              </div>
            </div>
            <div className='grid lg:grid-flow-col  auto-cols-[minmax(250 ,1fr)] rounded mb-3 mt-3 ring-2 ring-base-dark shadow-md shadow-orange-500 bg-main-mid'>
              <CompanyDetails />
              <div className={`flex auto-cols-[minmax(300 ,1fr)]`}>
                <FindPersonForm />
                <EditPerson />
              </div>
              <Sanctions />
            </div>
            <div></div>
          </div>

          <CompanySelection />
        </>
      );
    };

    return useAdvice.advice.length != 0 ? ready() : preLoad();
  };

  return getReady();
};
