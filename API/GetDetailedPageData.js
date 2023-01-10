import { API_URL } from "./constants.js";

export const GetDetailedPageData = async (id) => {
  let response = await fetch(API_URL + `item/` + id);
  let content = await response.json();
  return content.content;
};
