import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";
import { GameQuery } from "../App";

interface Props {
  //old
  /* selectedGenre: Genre | null;
  selectedPlatform: Platform | null; */

  //new
  gameQuery: GameQuery;
}

// const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
const GameGrid = ({ gameQuery }: Props) => {
  // custom hook useGame
  //const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform); //via useData
  const { data, error, isLoading } = useGames(gameQuery); //via useData
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <div>
      {/* For Error */}
      {error && <Text color="red">{error}</Text>}

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={3}
      >
        {/* For Loading skeleton cards before the actual cards */}
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton></GameCardSkeleton>
            </GameCardContainer>
          ))}

        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game}></GameCard>
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </div>
  );
};

export default GameGrid;
