import axios from "axios";

const API_URL = `https://honest-moons-shop.loca.lt/`;

export const instance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
