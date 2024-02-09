import { useRef } from "react";
import useGames from "../hooks/useGames";

const GenreList = () => {
  const { games } = useGames();
  let genre = useRef<string[]>([]);

  games.map((game) => {
    genre.current.push(game.genre);
  });
  const uniqueGenre = new Set(genre.current);

  return (
    <ul>
      {[...uniqueGenre].map((value) => (
        <li>{value}</li>
      ))}
    </ul>
  );
};

export default GenreList;
