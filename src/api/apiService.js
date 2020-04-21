import ApiCall from './apiCall';


export const verifyRide=(vehicle)=>{
   return ApiCall.getWithData("RIDER_VALIDATION","/"+vehicle);
}

export const login=(data)=>{
   return ApiCall.post("AUTHENTICATE", data);
}

export const  getRiderRequestByDate = (date)=>{
   return ApiCall.getWithData("OFFICIAL","/"+date);

}
export const postRiderStatus = (data)=>{
   return ApiCall.post("RIDER_STATUS","/"+data);

}

