"use client";
import useTranslation from "@/app/service/useTranslation";
import useStyle from "@/app/useStyle";
import React, { useState } from "react";

import { PersonInterface, UsePersonsContex } from "@/app/contexts/Person";
import usePersonsService from "@/app/service/usePersons";
import useValidate, { Valid } from "./useValidate";

const FindPersonFormChild = () => {
  const { usePerson, setPerson } = UsePersonsContex();
  const { translatePageText } = useTranslation();
  const { checkPerson, getPerson } = usePersonsService();
  const { mainItemStyle, headerStyle, validationErrorStyle } = useStyle();
  const { runValidation } = useValidate();
  const [isValid, setValid] = useState<Valid>({
    style: validationErrorStyle,
    validated: false,
    message: "",
  });

  const personInput = (event: string, fieldName: string) => {
    runValidation(event, fieldName).then((response) => {
      if (response.validated) {
        let personCheck: PersonInterface | undefined = checkPerson(event);

        if (personCheck == undefined) {
          getPerson(event).then((persondata) => {
            if (persondata.status) {
              setPerson((prev) => ({
                ...prev,
                person: persondata.data,
              }));
            }
          });
        } else {
          setPerson((prev) => ({
            person: personCheck || null,
            persons: [...(prev?.persons || [])],
          }));
        }
      }
    });
  };

  const errors = () => {
    return isValid.validated ? (
      isValid.errors?.map((e) => {
        return <div>{e.key}</div>;
      })
    ) : (
      <div></div>
    );
  };
  return (
    <div className={`${headerStyle} mt-2`}>
      {" "}
      {translatePageText("findWithId")}
      <label className={mainItemStyle}>
        <input
          className={isValid.style}
          type='text'
          onChange={(e) => personInput(e.target.value, "personId")}
        />
        {errors()}

        <div
          className='text-sm'
          onClick={(e) => {
            const target = e.target as HTMLDivElement;
            personInput(target.id, "personId");
          }}
        >
          {" "}
          <div className='text-black'>Demo persons:</div>
          <div id={"010101AXXXX"}>010101AXXXX</div>
          <div id={"020202AXXXX"}>020202AXXXX</div>
          <div id={"030303-XXXX"}>030303-XXXX</div>
          <div id={"040404AXXXX"}>040404AXXXX</div>
        </div>
      </label>
    </div>
  );
};

export default FindPersonFormChild;
