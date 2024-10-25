import React from "react";
import useTranslation from "../service/useTranslation";

const HeaderComponent = () => {
  const { translatePageText } = useTranslation();
  return (
    <div className='pl-5 py-6 text-2xl  md:whitespace-nowrap md:overflow-hidden w-50 truncate '>
      {translatePageText("headerText")}
    </div>
  );
};

export default HeaderComponent;
