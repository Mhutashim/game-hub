import useGenres, { Genre } from "../hooks/useGenres";
import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void; // a call back function for Genre -> App
  //this will return an object genre to the App component
  selectGenre: Genre | null; // for highlighting the selected Genre
}

const GenreList = ({ onSelectGenre, selectGenre }: Props) => {
  const { data, error, isLoading } = useGenres(); //via useData - now made static
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div>
      {/* if there is error show nothing - not needed now Cz static data */}
      {error && null}

      {/* While is loading - not needed now Cz static data*/}
      {isLoading && <Spinner></Spinner>}
      {isLoading &&
        skeletons.map((skeleton) => (
          <GenreListSkeleton key={skeleton}></GenreListSkeleton>
        ))}

      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} marginY="8px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit="cover" //img will be scaled to fill the container while preserving the aspect ratio
                src={getCroppedImageUrl(genre.image_background)}
              ></Image>
              <Button
                fontWeight={selectGenre?.id === genre.id ? "bold" : "normal"}
                // whiteSpace="nowrap" <- this is the default value in button
                textAlign="left" // to line up the text to left
                whiteSpace="normal"
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
