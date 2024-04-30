import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/api-client";

export interface Game {
  id: number;
  name: string;
  background_image:string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {

  //states
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController(); // controller object 

    //Fetching HTTP
    apiClient
      .get<FetchGamesResponse>("/games", {signal: controller.signal})
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return
        setError(err.message)});

      //clean-up function 
      return () => controller.abort();

  }, []); //array of dependencies
  return {games,error};
}

export default useGames;