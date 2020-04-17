import { RIDER_POST } from '../actions/types';

const initialState = {

    data:{}

};

export default function(state = initialState, action) {
  switch (action.type) {
    case RIDER_POST:
      return {
        ...state,
        data: action.payload
      };    
    default:
      return state;
  }
}