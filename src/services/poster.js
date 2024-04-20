import axios from "axios";
const instance = axios.create({
  baseURL: "https://api.itv.uz/",
  timeout: 12000,
  headers: { "X-Custom-Header": "foobar" },
});

export default instance;