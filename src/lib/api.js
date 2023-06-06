import axios from "axios";
import { AxiosError } from "axios";

export const api = axios.create({
  baseURL: "https://cms.talkdesk.com/wp-json/web-api/v1/content",
  headers: { "Content-Type": "application/json" },
});

export async function getPosts(
  page = 1,
  industry = "all-industries",
  integration = "all-integrations",
  region = "all-regions",
  limit = 20
) {
  try {
    const response = await api.post("/cards", {
      category: [],
      industry,
      integration,
      region,
      page,
      limit,
      order: "ASC",
      order_by: "title",
      post_type: ["customers"],
    });
    return response.data.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.response.data);
    }
  }
}
