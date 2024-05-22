import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GamesHeading = ({ gameQuery }: Props) => {
  //Games
  //Action (Platform) Games
  //Action(Platform) RPG(Genre) Games

  const headingTitle = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  return (
    <Heading marginY={5} fontSize="5xl" as="h1">
      {headingTitle}
    </Heading>
  );
};

export default GamesHeading;
