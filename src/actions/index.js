import axios from 'axios';

const API_KEY = 'cc9c4ddbc4919ed5eb4d9665e34bfec8';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FEATCH_WEATHER = 'FEATCH_WEATHER';

export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
  
  return {
    type : FEATCH_WEATHER,
    payload : request
  };
}