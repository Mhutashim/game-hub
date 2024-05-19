import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
  id:string,
  name:string,
  slug:string
}

export interface Game {
  id: number;
  name: string;
  background_image:string;
  parent_platforms : {platform:Platform}[]
  metacritic: number
}

const useGames = (selectedGenre: Genre | null) => useData<Game>('/games',{params: {genres:selectedGenre?.id}}, [selectedGenre?.id])
// Here, added the param which is a AxiosRequestConfig obj that takes value as a quary string parameter.
// selectedGenre?.id is used as this is optional
// here we will be quary the genre based on id. Cz, the API allowed id wise filter.
//if the selectedGenre is null then the genre in param will also be null
// added the array of dependency [selectedGenre?.id] which is needed for the re-render | re-request of the component 
  // with selected data set. (selectedGenre)

export default useGames;