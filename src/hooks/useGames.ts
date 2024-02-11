import { useEffect, useState } from "react";
import apiClient, { AxiosError } from "../service/apiClient";
import { CanceledError } from "axios";

export interface Games {
  id: number;
  title: string;
  thumbnail: string;
  platform: string;
  release_date: string;
  genre: string;
}
export interface Respone {
  error?: string;
  games: Games[];
  isLoading: boolean;
}

interface GameFetchRespond {
  data: Games[];
}

const useGames = (
  selectedGenre: string | null,
  selectedPlatform: string | null
) => {
  const [games, setGames] = useState<Games[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get("/games", {
        signal: controller.signal,
        params: {
          category: selectedGenre,
          platform: selectedPlatform,
        },
      })
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
  }, [selectedGenre, selectedPlatform]);

  return { games, error, isLoading, setIsLoading };
};

export default useGames;
