import { API_URL } from "./constants.js";

export const GetDetailedPageData = async (id) => {
  let response = await fetch(API_URL + id);
  let content = await response.json();
  return content.content;
};
