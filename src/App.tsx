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
function App() {
  // Selected Genra
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null); //can be either genre obj or null
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );

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
            onSelectGenre={(genre) => setSelectedGenre(genre)}
            selectGenre={selectedGenre}
          ></GenreList>
        </GridItem>
      </Show>

      <GridItem area="main">
        <PlatformSelector
          selectedPlatform={selectedPlatform}
          onSelectedPlatform={(platform) => setSelectedPlatform(platform)}
        ></PlatformSelector>
        <GameGrid
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlatform}
        ></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
