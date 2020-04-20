import ApiCall from './apiCall';


export const verifyRide=(vehicle)=>{

   return ApiCall.getWithData("RIDER_VALIDATION","/"+vehicle);

}


