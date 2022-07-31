import axios from "axios";

export const remembranceInstance = axios.create({
  baseURL: typeof import.meta.env.REMEMBRANCE_HOST === "string" ? import.meta.env.REMEMBRANCE_HOST : "http://localhost:8080",
  headers: {
    'Access-Control-Allow-Origin': 'origin',
    'Content-Type': 'application/json'
  },
});



export const authInstance = axios.create({
  baseURL: typeof import.meta.env.AUTH_HOST === "string" ? import.meta.env.AUTH_HOST : "http://localhost:8081",
  headers: {
    'Access-Control-Allow-Origin': 'origin',
    'Content-Type': 'application/json'
  },
});


