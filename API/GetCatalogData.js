import { API_URL } from "./ConstURL";

export const getData = async () => {
  let response = await fetch(API_URL);
  let content = await response.json();
  return content.content;
};
