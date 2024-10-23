import React from "react";

const useStyle = () => {
  const labelStyle = "p-1 text-[12px] bg-main-mid text-white";
  const itemStyle = "bg-main-light text-base-dark rounded text-sm p-2";
  const mainItemStyle =
    "bg-main-light m-2 rounded shadow-md ring-1 shadow-md shadow-orange-500";
  const selectedStyle = "bg-main-green text-white text-sm p-2";
  const headerStyle = "text-xl p-2 ml-3 bg-main-mid rounded-md text-white";
  const mainListComponentStyle =
    "rounded-xl shadow-md shadow-base-primary bg-base-dark text-white p-3 m-3 text-xl  ";
  const headerListStyle = "text-xl p-2 bg-base-light rounded-md text-black";
  const listItemStyle =
    "p-2 text-base min-w-0 whitespace-nowrap content-end text-sm ";
  const mainListStyle =
    "bg-base-light text-black even:bg-base-mid even:text-white border-teal-100 border hover:text-balance hover:bg-blue-300 group";
  const backgroundListStyle =
    "bg-base-primary border-y-2 border-base-primary rounded-lg my-2";
  const newItemStyle = "transition-transform animate-bg-change group";
  const validationErrorStyle =
    "text-red-800 bg-main-light text-base-dark rounded text-sm p-2";

  // !!!!!!!!!!

  const selectAnimation =
    "pl-2 text-[10px] hidden group-hover:inline-block transition-transform duration-1000 group-hover:animate-slide-right";

  return {
    labelStyle,
    itemStyle,
    mainItemStyle,
    selectedStyle,
    headerStyle,
    listItemStyle,
    mainListStyle,
    headerListStyle,
    mainListComponentStyle,
    backgroundListStyle,
    selectAnimation,
    newItemStyle,
    validationErrorStyle,
  };
};

export default useStyle;
