import platforms from "../data/platforms"; // static data

// for dynamic
  // import useData from "./useData"; 
  // import { Platform } from "./useGames";

  // const usePlatform = () => useData<Platform>('/platforms/lists/parents'); // dynamic


const usePlatform = () => ({data:platforms,error:null}); // static
export default usePlatform;