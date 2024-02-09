import { useRef } from "react";
import { Respone } from "../hooks/useGames";
import { Spinner } from "@chakra-ui/react";

const GenreList = ({ games, isLoading }: Respone) => {
  let genre = useRef<string[]>([]);

  games.map((game) => {
    genre.current.push(game.genre);
  });
  const uniqueGenre = new Set(genre.current);

  return (
    <>
      {isLoading && <Spinner />}
      <ul>
        {[...uniqueGenre].map((value) => (
          <li key={value}>{value}</li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
