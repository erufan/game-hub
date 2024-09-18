import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Games } from "../hooks/useGames";
import { Dispatch } from "react";

interface Props {
  games: Games[];
  setGames: Dispatch<React.SetStateAction<Games[]>>;
}

const NavBar = ({ games, setGames }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput games={games} setGames={setGames} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
