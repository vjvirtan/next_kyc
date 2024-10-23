import { UsePersonsContex } from "@/app/contexts/Person";
import React from "react";
import FindPersonForm from "./FindPersonForm";
import EditPerson from "../EditPerson";

const SetPersonForm = () => {
  const { usePerson } = UsePersonsContex();
};

export default SetPersonForm;
