// import useData from "./useData";  in using dynamic data
import genres from "../data/genres"; // it holds the static data of genres.


export interface Genre {
  id:number,
  name:string,
  image_background:string
}
//to dynamically add data
//const useGenres = () => useData<Genre>('/genres'); // we r not filter here so this hook is clean. 
// most of the filtering is happening in useGame hook 

// adding the static data
const useGenres =()=>({data:genres,isLoading:false,error:null});

export default useGenres;