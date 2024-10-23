"use client";
import { UseCompany } from "@/app/contexts/CompanyContext";
import React, { useState } from "react";
import Validate, { Valid } from "./useValidate";
import { PersonInterface, UsePersonsContex } from "@/app/contexts/Person";
import useTranslation from "@/app/service/useTranslation";
import usePersonsService from "@/app/service/usePersons";
import useStyle from "@/app/useStyle";
import FindPersonFormChild from "./FindPersonFormChild";

const FindPersonForm = () => {
  const { useCompany } = UseCompany();

  const { usePerson, setPerson } = UsePersonsContex();

  return usePerson.person.personId == "" && useCompany?.businessId != null ? (
    <FindPersonFormChild />
  ) : (
    <></>
  );
};
export default FindPersonForm;
