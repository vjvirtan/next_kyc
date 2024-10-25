"use client";
import { UseAdviceContext } from "@/app/contexts/Advice";
import { useLocalStorage } from "@/app/service/useLocalStorage";
import React, { useEffect, useState } from "react";

export const LanguageSelection = () => {
  const { useAdvice, setAdvice } = UseAdviceContext();
  const { addToLocalStorage, getFromLocalStorage } = useLocalStorage();
  const [clicked, setClicked] = useState<number>(0);
  const [lang, setLang] = useState<string>();

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const target = e.target as HTMLDivElement;
    if (target.id == "") {
      return;
    }
    addToLocalStorage("language", target.id);
    setAdvice((prev) => ({ ...prev, language: target.id }));
    setClicked(clicked + 1);
  };

  useEffect(() => {
    // TRANSFER TO THE INITIAL TRANSLATIONS
    const changeLang = () => {
      setLang(
        getFromLocalStorage("language") == "FI"
          ? "Kieli:"
          : getFromLocalStorage("language") == "SE"
          ? "Språk:"
          : "Language:"
      );
    };

    changeLang();
  }, [clicked]);

  const selected = () => {
    const base = "";
    if (useAdvice.languages.length != 0) {
      return useAdvice.languages.map((e) => {
        return (
          <div
            key={e}
            id={e}
            className={`  ${base} ${
              useAdvice.language == e ? "text-green-600" : "text-gray-900"
            } `}
          >
            {e}
          </div>
        );
      });
    } else {
      <div> wait</div>;
    }
  };

  return (
    <>
      <div className='flex text-black gap-2 align-end pl-2 pr-2 pt-1 pb-1 justify-end'>
        <div
          className=' bg-orange-50 shadow-md pl-2 pr-2 pt-1 pb-1  shadow-orange-500 rounded-md md:whitespace-nowrap lg:whitespace-nowrap'
          bg-orange-50
          shadow-md
          shadow-orange-500
          rounded-md
        >
          <div>{lang}</div>
          <div onClick={(e) => handleClick(e)}>
            <div className='flex gap-3'>{selected()}</div>
          </div>
        </div>
      </div>
    </>
  );
};
