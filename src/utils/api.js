import axios from "axios";

const api = axios.create({
  baseURL: "https://text-translator2.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": `${import.meta.env.VITE_API_KEY}`,
    "x-rapidapi-host": "text-translator2.p.rapidapi.com",
  },
});

export default api;
