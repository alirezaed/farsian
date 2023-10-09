import axios from 'axios';

const instance = axios.create({
  baseURL:'https://burgerbuilderapi.aedalat.ir/',
  headers:{
    "Content-Type": "application/json"
  }
})


export default instance;
