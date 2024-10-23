import { MainErrorInterface } from "../interface/ValidationInterface";

export interface FetchResponse {
  status: boolean;
  data?: any;
  style?: string;
  errorMessage?: MainErrorInterface | null;
  simpleErrorMessage: string;
}
export const URL = process.env.NEXT_PUBLIC_API_URL;

const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Credentials": "true",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,DELETE,PATCH,POST,PUT",
};

export const useFetch = () => {
  async function postData(url: string, data: {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(data),
    }).then((e) => {
      return e;
    });
    return response;
  }

  async function getData(url: string) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "GET",
      headers: headers,
    });
    return response;
  }

  return { postData, getData };
};
