export default function(state = null, action){
  //show action data, that send from action
  console.log('action data: ', action);
  //data no longer as promise. because power of middleware : redux-promise
  return state;
}