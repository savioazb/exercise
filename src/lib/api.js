import axios from "axios";

export const api = axios.create({
  baseURL: "https://cms.talkdesk.com/wp-json/web-api/v1/content",
  headers: { "Content-Type": "application/json" },
});
