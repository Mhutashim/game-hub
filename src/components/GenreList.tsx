import React from "react";
import useGenres, { Genre } from "../hooks/useGenres";
import useData from "../hooks/useData";
import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void; // a call back function for Genre -> App
  //this will return an object genre to the App component
  selectGenre: Genre | null; // for highlighting the selected Genre
}

const GenreList = ({ onSelectGenre, selectGenre }: Props) => {
  const { data, error, isLoading } = useGenres(); //via useData
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div>
      {/* if there is error show nothing */}
      {error && null}

      {/* While is loading */}
      {isLoading && <Spinner></Spinner>}
      {isLoading &&
        skeletons.map((skeleton) => (
          <GenreListSkeleton key={skeleton}></GenreListSkeleton>
        ))}

      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} marginY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              ></Image>
              <Button
                fontWeight={selectGenre?.id === genre.id ? "bold" : "normal"}
                fontSize="lg"
                variant="link"
                onClick={() => onSelectGenre(genre)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default GenreList;
