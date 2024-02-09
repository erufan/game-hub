import { useEffect, useState } from "react";
import apiClient, { AxiosError } from "../service/apiClient";
import { CanceledError } from "axios";

export interface Games {
  id: number;
  title: string;
  thumbnail: string;
}

interface GameFetchRespond {
  data: Games[];
}

const useGames = () => {
  const [games, setGames] = useState<Games[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get("/games", { signal: controller.signal })
      .then((res: GameFetchRespond) => setGames(res.data))
      .catch((err: AxiosError) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return { games, error };
};

export default useGames;
