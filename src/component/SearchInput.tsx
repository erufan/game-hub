import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { Dispatch, useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { Games } from "../hooks/useGames";
import useDebounce from "../hooks/useDebounce";

interface Props {
  games: Games[];
  setGames: Dispatch<React.SetStateAction<Games[]>>;
}

const SearchInput = ({ games, setGames }: Props) => {
  const backUpData = useRef<Games[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const filterGames = () => {
    const filteredGames = backUpData.current.filter((game) =>
      game.title.match(new RegExp(searchTerm, "i"))
    );
    setGames(filteredGames);
  };

  useDebounce({
    callback: filterGames,
    time: 300,
    deps: [searchTerm, setGames],
  });

  if (backUpData.current.length === 0) backUpData.current = games;

  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch />} />
      <Input
        borderRadius={20}
        placeholder="Search Games"
        variant="filled"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </InputGroup>
  );
};

export default SearchInput;
