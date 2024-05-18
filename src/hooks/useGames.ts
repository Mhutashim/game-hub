import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/api-client";

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

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {

  //states
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController(); // controller object 

    //Fetching HTTP
    setIsLoading(true);
    apiClient
      .get<FetchGamesResponse>("/games", {signal: controller.signal})
      .then((res) => {
        setGames(res.data.results)
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return
        setError(err.message);
        setIsLoading(false);
      });

      //clean-up function 
      return () => controller.abort();

  }, []); //array of dependencies
  return {games,error,isLoading};
}

export default useGames;