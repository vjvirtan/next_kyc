import { KeyValue, UseAdviceContext } from "@/app/contexts/Advice";

export interface Valid {
  style: string;
  validated: boolean;
  message?: string;
  errors?: KeyValue<string, string>[];
}

const onError = (errors: KeyValue<string, string>[]): Valid => {
  return {
    style: "bg-red-200 text-red-600 border-spacing-2 border-red-300",
    validated: false,
    message: "",
    errors: errors,
  };
};
const onValid = (): Valid => {
  return {
    style: "bg-green-200 text-green-600 border-spacing-2 border-green-300",
    validated: true,
    message: "",
  };
};

const useValidate = () => {
  const { useAdvice } = UseAdviceContext();

  const runValidation = async (field: string, input: any): Promise<Valid> => {
    return new Promise((resolve, reject) => {
      const rules = useAdvice.advice.find((e) => {
        if (e.key.toLowerCase() == field.toLowerCase()) {
          return e.value;
        }
      })?.value.validationRule;

      const validationErrors: KeyValue<string, string>[] = [];
      const isNumber = typeof input == "number".toString();

      if (rules?.allowedChars) {
        new RegExp(rules?.allowedChars).test(String(input))
          ? ""
          : validationErrors.push({
              key: "cahrs not met " + rules.allowedChars,
              value: input,
            });
      }

      if (rules?.max) {
        isNumber
          ? input > rules.max
            ? validationErrors.push({
                key: " maximum value is " + rules.max,
                value: input,
              })
            : ""
          : input.length > rules.max
          ? validationErrors.push({
              key: " too long, max characters ",
              value: input,
            })
          : "";
      }
      if (rules?.min) {
        isNumber
          ? input < rules.min
            ? validationErrors.push({
                key: " value must be equal/over " + rules.min,
                value: input,
              })
            : ""
          : input.length < rules.min
          ? validationErrors.push({
              key: " too short, min characters must be " + rules.min,
              value: input,
            })
          : "";
      }
      if (rules?.subString) {
        rules.subString.map((e) => {});
      }
      resolve(
        validationErrors.length > 0 ? onError(validationErrors) : onValid()
      );
    });
  };

  return { runValidation };
};
export default useValidate;
