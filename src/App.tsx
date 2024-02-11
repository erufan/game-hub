import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./component/NavBar";
import GameGrid from "./component/GameGrid";
import GenreList from "./component/GenreList";
import useGames from "./hooks/useGames";
import { useState } from "react";
import PlatformMenu from "./component/PlatformMenu";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const { error, games, isLoading, setIsLoading } = useGames(selectedGenre);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <GridItem area={"main"}>
        <PlatformMenu />
        <GameGrid error={error} games={games} isLoading={isLoading} />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"}>
          <GenreList
            onSelect={(value) => {
              setIsLoading(true);
              setSelectedGenre(value);
            }}
            boldGenre={selectedGenre}
          />
        </GridItem>
      </Show>
    </Grid>
  );
}

export default App;
