import { FEATCH_WEATHER } from '../actions/index';

export default function(state = [], action){
  switch(action.type){
    case FEATCH_WEATHER:
      return [action.payload.data, ...state] 
      //add new payload into array... 
      // don't never mutation state by using state.push
  }

  return state;
}