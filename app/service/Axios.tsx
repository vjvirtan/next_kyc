import axios from "axios";
const BASE_URL = "http://localhost:8089/kyc";
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
