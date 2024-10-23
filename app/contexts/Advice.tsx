import { createContext, ReactNode, useContext, useState } from "react";
import { useLocalStorage } from "../service/useLocalStorage";
import InitialTranslations from "../service/InitialTranslations";

export interface MainAdviceInterface {
  advice: KeyValue<string, Advice>[];
  language: string;
  // TODO: BRING THESE FROM SERVER ADVICE
  languages: string[];
  pageTranslations: KeyValue<string, KeyValue<string, string>[]>[];
}
export interface KeyValue<K, V> {
  key: K;
  value: V;
}
export interface Advice {
  key: string;
  id?: string;
  categories?: Categories;
  translations: Translation[];
  validationRule?: ValidationRule;
}

export interface Categories {
  name: string;
}

export interface Translation {
  key: string;
  value: string;
}

export interface ValidationRule {
  allowedChars?: string;
  mandatory?: boolean;
  max?: number;
  min?: number;
  subString?: [];
}
interface ChildType {
  children: ReactNode;
}

export interface AdviceType {
  useAdvice: MainAdviceInterface;
  setAdvice: React.Dispatch<React.SetStateAction<MainAdviceInterface>>;
}

export const AdviceContext = createContext<AdviceType>({} as AdviceType);

export const UseAdviceContext = (): AdviceType => useContext(AdviceContext);

const { getFromLocalStorage } = useLocalStorage();
const lang = getFromLocalStorage("language");

export const AdviceContextProvider = ({ children }: ChildType) => {
  const [useAdvice, setAdvice] = useState<MainAdviceInterface>(init);
  return (
    <AdviceContext.Provider value={{ useAdvice, setAdvice }}>
      {children}
    </AdviceContext.Provider>
  );
};

const init = {
  advice: [] as KeyValue<string, Advice>[],
  language: lang != undefined ? lang : "en",
  languages: ["FI", "SE", "EN"],
  pageTranslations: InitialTranslations(),
};
