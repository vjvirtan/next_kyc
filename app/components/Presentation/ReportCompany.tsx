import React from "react";
import BoardList from "./BoardList";
import BeneficiaryList from "./BeneficiaryList";
import OwnerList from "./OwnerList";
import useStyle from "@/app/useStyle";

const ReportCompany = () => {
  const { backgroundListStyle } = useStyle();
  return (
    <>
      <div className={` ${backgroundListStyle}  `}>
        <BoardList />
      </div>
      <div className={` ${backgroundListStyle} grid grid-rows-1 grid-cols-2 `}>
        <OwnerList />
        <BeneficiaryList />
      </div>
    </>
  );
};

export default ReportCompany;
