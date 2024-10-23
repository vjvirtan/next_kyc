import {
  Advice,
  KeyValue,
  MainAdviceInterface,
  UseAdviceContext,
} from "../contexts/Advice";
import { useLocalStorage } from "../service/useLocalStorage";
import { FetchResponse, URL, useFetch } from "./useFetch";

const fResponse: FetchResponse = {
  status: false,
  data: null,
  style: "",
  errorMessage: null,
  simpleErrorMessage: "",
};

const FetchAdvice = async () => {
  const { getFromLocalStorage } = useLocalStorage();
  const { getData } = useFetch();
  let adviceData: MainAdviceInterface | null = null;

  const { useAdvice, setAdvice } = UseAdviceContext();
  const response = getData(URL + "/advice/all")
    .then((data) => {
      fResponse.status = data.ok;
      if (!data.ok) {
        //   fResponse.errorMessages = data
      }
      return data.json();
    })
    .then((e) => {
      let advice: KeyValue<string, Advice>[] = [];

      Object.entries(e).forEach((k) => {
        advice.push({ key: k[0], value: k[1] as Advice });
      });
      setAdvice((prev) => ({ ...prev, advice: advice }));
      fResponse.data = useAdvice;
      return fResponse;
    })
    .catch((error) => console.log(error.data));

  response;
  return fResponse;
};

export default FetchAdvice;
