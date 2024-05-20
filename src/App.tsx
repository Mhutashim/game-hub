import {
  Button,
  ButtonGroup,
  Grid,
  GridItem,
  PopoverArrow,
  Show,
} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";

//Refactoring by adding Query object pattern - The Query Object pattern is a design pattern used to manage database queries in software applications.
//Query Object pattern simplifies query construction, improves code organization, and enhances maintainability. It’s a powerful tool for managing database queries effectively!
export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  //didn't named selectedGenre, selectedPlatform cz it's repeatitive
}

function App() {
  // States - old
  /* const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null); //can be either genre obj or null
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  ); */

  // State - new
  // will be using query object that will have all the info we need to make a query.
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery); // it will always return an obj however the properties might be null.

  return (
    <Grid
      templateAreas={{
        base: `"nav" " main"`,
        lg: `"nav nav" "aside main"`, // equal or larger than ~992px
      }}
      // To ensure the gamegrid stretchs while the aside panel remains the same
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr", // first column (aside panel) will get 200px and the remaing game grid then rest of the space
      }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>

      <Show above="lg" /* below="" */>
        {/* this will only show in lg screen and higher display */}
        <GridItem area="aside" paddingX={5}>
          <GenreList
            // onSelectGenre={(genre) => setSelectedGenre(genre)} -old
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })} // Spread operator to add it to existing (genre) property
            // selectGenre={selectedGenre}
            selectGenre={gameQuery.genre}
          ></GenreList>
        </GridItem>
      </Show>

      <GridItem area="main">
        <PlatformSelector
          // selectedPlatform={selectedPlatform} -old
          selectedPlatform={gameQuery.platform}
          // onSelectPlatform={(platform) => setSelectedPlatform(platform)} -old
          onSelectedPlatform={(platform) =>
            setGameQuery({ ...gameQuery, platform })
          }
        ></PlatformSelector>
        <GameGrid
          // selectedGenre={selectedGenre}
          // selectedPlatform={selectedPlatform}
          gameQuery={gameQuery}
        ></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
