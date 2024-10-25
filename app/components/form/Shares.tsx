"use client";
import { UseCompany } from "@/app/contexts/CompanyContext";
import { PersonInterface, UsePersonsContex } from "@/app/contexts/Person";
import useTranslation from "@/app/service/useTranslation";
import useStyle from "@/app/useStyle";
import React, { useEffect, useState } from "react";
import Validate from "./useValidate";
import { ReportInterface, UseReportContext } from "@/app/contexts/Report";
import { useLocalStorage } from "@/app/service/useLocalStorage";
import FetchSelections from "@/app/requests/FetchSelections";
import useTimer from "../../service/useTimer";

const getPercentage = (
  useReport: ReportInterface,
  person: PersonInterface | undefined | null
) => {
  if (!person) {
    return 0;
  }
  const o = useReport.owners?.find((o) =>
    o.personId == person.personId ? o : undefined
  );
  if (o == undefined) {
    return 0;
  } else {
    return o.percentage;
  }
};
const Shares = () => {
  const { useCompany } = UseCompany();
  const { runValidation } = Validate();
  const { usePerson, setPerson } = UsePersonsContex();
  const { useReport, setReport } = UseReportContext();

  const { addToLocalStorage, getFromLocalStorage } = useLocalStorage();
  const [own, setOwn] = useState(getPercentage(useReport, usePerson?.person));
  const { uppdateOwner } = FetchSelections();
  const { timer } = useTimer();
  const { translatePageText } = useTranslation();

  const { headerStyle } = useStyle();
  useEffect(() => {
    setOwn(getPercentage(useReport, usePerson.person));
  }, [usePerson.person.personId]);
  const onChangeOwner = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputNumber: number = Number(
      e.target.value == "" ? "0" : e.target.value
    );

    runValidation("percentage", inputNumber).then((response) => {
      if (response.validated) {
        // sanitate zero

        setOwn(Number(inputNumber));

        timer(getFromLocalStorage("ownerTicket"), Date.now() + 1000).then(
          (promiseTicket) => {
            const storageTicket = getFromLocalStorage("ownerTicket");
            if (storageTicket === promiseTicket) {
              const response = uppdateOwner(
                useCompany!.businessId,
                usePerson!.person!.personId,
                Number.parseFloat(e.target.value)
              );
              response
                .then((r) => {
                  if (r.status) {
                    setReport((prev) => ({ ...prev, owners: r.data }));
                    const percent = r.data?.find(
                      (e: { personId: string }) =>
                        e.personId == usePerson!.person!.personId
                    );
                    setPerson((prev) => ({
                      person: prev?.person || null,
                      sharesPercentage: percent,
                      persons: [...(prev?.persons || [])],
                    }));
                  }
                })
                .catch();
            }
          }
        );
      }
    });
  };
  return (
    <>
      <div className='flex-1 m-2 rounded-md p-2 shadow-md shadow-main-primary'>
        <div className={`mt-1 ${headerStyle}`}>
          {translatePageText("share")}
        </div>
        <div className='flex mt-2 ml-1'>
          <input
            className='w-20 pl-2 justify-items-end text-black  m-3 rounded ring-2 ring-orange-200 shadow-sm shadow-orange-300'
            value={own == 0 ? "" : own}
            onChange={(e) => {
              addToLocalStorage("ownerTicket", Date.now());
              onChangeOwner(e);
            }}
            type='number'
          ></input>
          <div className='pt-3'>%</div>
        </div>
      </div>
    </>
  );
};

export default Shares;
