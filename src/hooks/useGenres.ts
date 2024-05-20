import useData from "./useData";

export interface Genre {
  id:number,
  name:string,
  image_background:string
}
const useGenres = () => useData<Genre>('/genres'); // we r not filter here so this hook is clean. 
// most of the filtering is happening in useGame hook 

export default useGenres;