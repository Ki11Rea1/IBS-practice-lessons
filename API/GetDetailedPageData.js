import { API_URL } from "./ConstURL";

export const getItem = async (id) => {
  let response = await fetch(API_URL + id);
  let content = await response.json();
  return content.content;
};
