import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/api-client";
import { AxiosRequestConfig } from "axios";

interface FetchResponse<T>{
  count:number,
  results: T[]
}


// we will be giving this hook a second parameter (requestConfig) for selected genre which is optional in nature.
  // this will be reponsible for the query.
// added a third peremeter as the array of dependency so that the 
  // component will re-render with the appropiate selected genre. otherwise the com will not re-render.
// both requestConfig and deps are optional. requestConfig for query, deps for re-render with new data.
const useData = <T>(endpoint:string, requestConfig?: AxiosRequestConfig, deps?:any[]) => {
  //states
  const [data,setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=>{
    const controller = new AbortController();

    setIsLoading(true);

    //after the endpoint in the AxiosRequestConfig {} we can pass data in the request body, or set query string parameter etc.
      //here AxiosRequestConfig is spreaded for additional query
    apiClient.get<FetchResponse<T>>(endpoint,{signal:controller.signal,...requestConfig}).then((res)=>{
      setData(res.data.results);
      setIsLoading(false);
    }).catch((err)=> {
      if (err instanceof CanceledError) return
      setError(err.message);
      setIsLoading(false);
    });

    //clean up function 
    return () => controller.abort();

  }, deps? [...deps]: []); // array of dependency in spreaded for the additional dependency.
  //if the deps doesn't exists then there is no array dependencies, if it does than that is the dependancy
  return {data,error,isLoading}

}

export default useData;