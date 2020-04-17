import { RIDER_POST } from './types';
import ApiCall from '../api/apiCall'

export const postRider = (data) => dispatch => {
    ApiCall.post("POST_RIDER",data).then(res=>{
        dispatch({
            type: RIDER_POST,
            payload: res.data
          });
    }
    );
      
};