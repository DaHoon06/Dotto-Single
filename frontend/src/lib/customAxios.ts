import axios, { AxiosInstance } from "axios";

export const customAxios: AxiosInstance = axios.create({
  // baseURL: `${SERVER_ADDRESS}`,
  // headers: {
  //   access_token: '',
  // }
  baseURL: 'http://localhost:3000',
});
