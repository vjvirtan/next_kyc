import { UseAdviceContext } from "../contexts/Advice";
import { useLocalStorage } from "./useLocalStorage";

const useTranslation = () => {
  const { useAdvice } = UseAdviceContext();

  const translate = (input: string) => {
    const advice = useAdvice.advice.find((e) => {
      if (e.key.toLowerCase() == input.toLowerCase()) {
        return e.value;
      }
    });
    const lang = advice?.value.translations.find((e) => {
      if (e.key.toLowerCase() == useAdvice.language.toLowerCase()) {
        return e.value;
      }
    });
    return lang?.value;
  };

  const translatePageText = (input: string): string | undefined => {
    return useAdvice.pageTranslations
      .find((e) => {
        if (input.toLowerCase() == e.key.toLowerCase()) {
          return e;
        }
      })
      ?.value.find((lang) => {
        if (lang.key.toLowerCase() == useAdvice.language.toLowerCase()) {
          return lang.value;
        }
      })?.value;
  };

  return { translate, translatePageText };
};

export default useTranslation;
