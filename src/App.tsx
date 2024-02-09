import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./component/NavBar";
import GameGrid from "./component/GameGrid";
import GenreList from "./component/GenreList";
import useGames from "./hooks/useGames";

function App() {
  const { error, games, isLoading } = useGames();

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
        <GameGrid error={error} games={games} isLoading={isLoading} />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"}>
          <GenreList error={error} games={games} isLoading={isLoading} />
        </GridItem>
      </Show>
    </Grid>
  );
}

export default App;
