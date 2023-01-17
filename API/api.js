import axios from "https://cdn.skypack.dev/axios";
import { API_URL } from "./constants";

const mockoon = axios.create({
  baseURL: API_URL,
});

mockoon.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(alert(error));
  }
);

export const GetCatalogData = async () => {
  let content = await mockoon.get(`/item/`).then((responce) => responce.data);
  return content.content;
};

export const GetDetailedPageData = async (id) => {
  let content = await mockoon
    .get(`/item/${id}`)
    .then((responce) => responce.data);
  return content.content;
};
