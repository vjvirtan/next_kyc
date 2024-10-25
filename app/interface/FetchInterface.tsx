import { MainErrorInterface } from "../interface/ValidationInterface";

export interface FetchResponse {
  status: boolean;
  data?: any;
  style?: string;
  errorMessage?: MainErrorInterface | null;
  simpleErrorMessage: string;
}
export const URL = process.env.NEXT_PUBLIC_API_URL;
