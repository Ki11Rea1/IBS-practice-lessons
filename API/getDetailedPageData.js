import { mockoon } from "./client.js";

export const getDetailedPageData = async (id) => {
  let content = await mockoon
    .get(`/item/${id}`)
    .then((responce) => responce.data);
  return content.content;
};
