import axios from "axios";

export default axios.create({
  baseURL:'https://api.rawg.io/api',
  params:{
    key: '8625b14e537d421683fb6e0f5497bae0'
  }
})

