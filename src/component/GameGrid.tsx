import { useEffect, useState } from "react";
import apiClient, { AxiosError } from "../service/apiClient";
import { Text } from "@chakra-ui/react";

interface Games {
  id: number;
  title: string;
}

interface GameFetchRespond {
  data: Games[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Games[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    apiClient
      .get("/games")
      .then((res: GameFetchRespond) => setGames(res.data))
      .catch((err: AxiosError) => setError(err.message));
  }, []);

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.title}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
