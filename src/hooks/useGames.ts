import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
  id:number,
  name:string,
  slug:string
}

export interface Game {
  id: number;
  name: string;
  background_image:string;
  parent_platforms : {platform:Platform}[]
  metacritic: number
  rating_top: number
}

// const useGames = (selectedGenre: Genre | null, selectedPlatform:Platform |null) => useData<Game>(
const useGames = (gameQuery:GameQuery) => useData<Game>(
  '/games',
  {
    params: 
      // { genres:selectedGenre?.id, platforms:selectedPlatform?.id
      { genres:gameQuery.genre?.id, 
        platforms:gameQuery.platform?.id, 
        ordering:gameQuery.order, 
        search:gameQuery.searchText
    }
  }, 
  // [selectedGenre?.id,selectedPlatform?.id]
  [gameQuery] // if any value of gameQuery changes then it will re-render
)
// Here, added the param which is a AxiosRequestConfig obj that takes value as a quary string parameter.
// selectedGenre?.id is used as this is optional
// here we will be quary the genre based on id. Cz, the API allowed id wise filter.
//if the selectedGenre is null then the genre in param will also be null
// added the array of dependency [selectedGenre?.id] which is needed for the re-render | re-request of the component 
  // with selected data set. (selectedGenre)

export default useGames;