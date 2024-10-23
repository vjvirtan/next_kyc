import React from "react";
import { PersonInterface, PersonType } from "../contexts/Person";

export const PersonRow = (person: PersonInterface) => {
  return (
    <li key={person.systemId} onClick={(e) => e}>
      {" "}
      <div>{person.firstName}</div>
      <div>{person.lastName}</div>
      <div>{person.id}</div> <div> edit </div>
    </li>
  );
};
