import axios from "axios";

const instance = axios.create({
  baseURL: typeof import.meta.env.VITE_FAMOUS_QUOTES_HOST === "string" ? import.meta.env.VITE_FAMOUS_QUOTES_HOST : "localhost:8080",
  headers: {
    'Access-Control-Allow-Origin' : 'origin',
    'Content-Type': 'application/json'
  },
});

export default instance;
