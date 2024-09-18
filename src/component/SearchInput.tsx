import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { Dispatch, useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { Games } from "../hooks/useGames";

interface Props {
  games: Games[];
  setGames: Dispatch<React.SetStateAction<Games[]>>;
}

const SearchInput = ({ games, setGames }: Props) => {
  const backUpData = useRef<Games[]>([]);

  if (backUpData.current.length === 0) backUpData.current = games;

  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input
        borderRadius={20}
        placeholder="Search Games"
        variant="filled"
        onChange={(e) => {
          const filteredGames = backUpData.current.filter((game) =>
            game.title.match(new RegExp(e.target.value, "i"))
          );

          setGames(filteredGames);
        }}
      />
    </InputGroup>
  );
};

export default SearchInput;
