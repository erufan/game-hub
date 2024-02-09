import { useRef } from "react";
import { Respone } from "../hooks/useGames";
import { Badge, Spinner, VStack } from "@chakra-ui/react";

const GenreList = ({ games, isLoading }: Respone) => {
  let genre = useRef<string[]>([]);

  games.map((game) => {
    genre.current.push(game.genre);
  });
  const uniqueGenre = new Set(genre.current);

  return (
    <>
      {isLoading && <Spinner />}
      <VStack paddingX={2} marginY={3} alignItems="flex-start">
        {[...uniqueGenre].map((value) => (
          <Badge
            _hover={{ color: "gray.500" }}
            marginY={0.4}
            key={value}
            cursor="pointer"
          >
            {value}
          </Badge>
        ))}
      </VStack>
    </>
  );
};

export default GenreList;
