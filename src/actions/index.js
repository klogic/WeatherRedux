import axios from 'axios';

const API_KEY = 'b6907d289e10d714a6e88b30761fae22';
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast&appid=${API_KEY}`;

export const FEATCH_WEATHER = 'FEATCH_WEATHER';

export function fetchWeather(city){
  const url = `${ROOT_URL}?q=${city},us`;
  const request = axios.get(url);
  
  return {
    type : FEATCH_WEATHER,
    payload : request
  };
}