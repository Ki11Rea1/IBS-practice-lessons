import { API_URL } from "./constants";

export const GetCatalogData = async () => {
  let response = await fetch(API_URL);
  let content = await response.json();
  return content.content;
};
