import axios, { AxiosError } from "axios";

export default axios.create({
  baseURL: "https://free-to-play-games-database.p.rapidapi.com/api",
  params: {
    tag: "3d.mmorpg.fantasy.pvp",
    platform: "pc",
  },
  headers: {
    "X-RapidAPI-Key": "a12849449emsh2570f7239db0aa2p176148jsne6b18242ea5d",
    "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
  },
});

export { AxiosError };
