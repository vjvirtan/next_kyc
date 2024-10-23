import React, {
  createContext,
  type ReactNode,
  useContext,
  useState,
} from "react";

export interface PersonInterface {
  firstName: string;
  lastName: string;
  id: string;
  personId: string;
  systemId: string;
  nationalities: string[];
}
export interface MainPersonInterface {
  person: PersonInterface;
  persons: PersonInterface[];
}
export const PersonsContext = createContext<PersonType>({} as PersonType);

export interface PersonType {
  usePerson: MainPersonInterface;
  setPerson: React.Dispatch<React.SetStateAction<MainPersonInterface>>;
}

export const UsePersonsContex = (): PersonType => useContext(PersonsContext);

interface ChildType {
  children: ReactNode;
}
export const initPerson: PersonInterface = {
  personId: "",
  firstName: "",
  lastName: "",
  id: "",
  systemId: "",

  nationalities: [],
};
export const PersonContextProvider = ({ children }: ChildType) => {
  const [usePerson, setPerson] = useState<MainPersonInterface>({
    person: initPerson,
    persons: [] as PersonInterface[],
  });
  return (
    <PersonsContext.Provider value={{ usePerson, setPerson }}>
      {children}
    </PersonsContext.Provider>
  );
};
