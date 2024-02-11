import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./component/NavBar";
import GameGrid from "./component/GameGrid";
import GenreList from "./component/GenreList";
import useGames from "./hooks/useGames";
import { useState } from "react";
import PlatformMenu from "./component/PlatformMenu";
import SortMenu from "./component/SortMenu";

export interface gameQuery {
  genre: string | null;
  platform: string | null;
}

function App() {
  const [gameQuery, setgameQuery] = useState<gameQuery>({} as gameQuery);

  const { error, games, isLoading, setIsLoading } = useGames(gameQuery);

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
        <HStack spacing={5} paddingLeft={3} marginBottom={5}>
          <PlatformMenu
            filterPlatform={(platform) =>
              setgameQuery({ ...gameQuery, platform })
            }
          />
          <SortMenu />
        </HStack>
        <GameGrid error={error} games={games} isLoading={isLoading} />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"}>
          <GenreList
            onSelect={(genre) => {
              setIsLoading(true);
              setgameQuery({ ...gameQuery, genre });
            }}
            boldGenre={gameQuery.genre}
          />
        </GridItem>
      </Show>
    </Grid>
  );
}

export default App;
