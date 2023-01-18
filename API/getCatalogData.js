import { mockoon } from "./client.js";

export const getCatalogData = async () => {
  let content = await mockoon.get("/item/").then((responce) => responce.data);
  return content.content;
};
