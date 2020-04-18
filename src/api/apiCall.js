
import axios from 'axios';

const apiRoot="http://dummy.restapiexample.com/",apiRoot="http://localhost:8080/";

const contextUrl={
    POST_RIDER:"api/v1/create",
    AUTHENTICATE:"authenticate",
    REGISTER:"register",
    SUBMIT_RIDER:"riders",
    RIDER_VALIDATION:"riders/verify/{id}",
    OFFICIAL:"officials/{currentDate}",
    RIDER_STATUS:"officials/confirmRiderStatus/{id}/{status}"
}


class ApiCall {

    static get(key){
       return axios.get(apiRoot+contextUrl[key])
    }

   static post (key,data) {
        return axios.post(apiRoot+contextUrl[key],data).then(res=>{ return res;}).catch(err=>{
            alert("Connection Error");

        })
    }

}

export default ApiCall;


