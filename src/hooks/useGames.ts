import { useEffect, useState } from "react";
import apiClient, { AxiosError } from "../service/apiClient";
import { CanceledError } from "axios";

export interface Games {
  id: number;
  title: string;
  thumbnail: string;
  platform: string;
  release_date: string;
}

interface GameFetchRespond {
  data: Games[];
}

const useGames = () => {
  const [games, setGames] = useState<Games[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get("/games", { signal: controller.signal })
      .then((res: GameFetchRespond) => {
        setIsLoading(false);
        setGames(res.data);
      })
      .catch((err: AxiosError) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { games, error, isLoading };
};

export default useGames;
