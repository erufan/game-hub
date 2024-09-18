import axios, { AxiosError } from "axios";

export default axios.create({
  baseURL: "https://free-to-play-games-database.p.rapidapi.com/api",
  headers: {
    "X-RapidAPI-Key": "a12849449emsh2570f7239db0aa2p176148jsne6b18242ea5d",
    "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
  },
});

export { AxiosError };
