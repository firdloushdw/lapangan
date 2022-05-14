// api.js
import Axios from "axios";

let urls = {
  test: process.env.API_URL,
  development: "http://47.254.215.55:5000/",
  production: "http://47.254.215.55:5000/",
};

const api = Axios.create({
  baseURL: urls[process.env.NODE_ENV],
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default api;
