import axios from "axios";
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
axios.defaults.baseURL = BASE_URL;

export const useAxios = () => {
  const axiosTokenGetUser = axios.create({
    method: "get",
  });

  const axiosPostData = axios.create({
    method: "post",
  });

  return {
    axiosTokenGetUser,
    axiosPostData,
  };
};
