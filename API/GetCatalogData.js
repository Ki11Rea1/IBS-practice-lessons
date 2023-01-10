import { API_URL } from "./constants.js";

export const GetCatalogData = async () => {
  let response = await fetch(API_URL + `item/`);
  let content = await response.json();
  return content.content;
};
