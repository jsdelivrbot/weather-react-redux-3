import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  
  console.log('Action received', action);
  
  switch(action.type) {
    case FETCH_WEATHER:
      // return state.concat([ action.payload.data ]);
      return [ action.payload.data, ...state ]; // equivalent to [ payload.data, payload.data, payload.data ] NOT [ payload.data, [ payload.data, payload.data ]]
  }

  return state;
}