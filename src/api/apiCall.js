
import axios from 'axios';

const apiRoot="http://localhost:8080/";

const contextUrl={
    POST_RIDER:"api/v1/create",
    AUTHENTICATE:"authenticate",
    REGISTER:"register",
    SUBMIT_RIDER:"riders",
    RIDER_VALIDATION:"riders/verify",
    OFFICIAL:"officials/{currentDate}",
    RIDER_STATUS:"officials/confirmRiderStatus/{id}/{status}"
}


class ApiCall {

    static get(key){
       return axios.get(apiRoot+contextUrl[key]).then(res=>{ return res;}).catch(err=>{
        alert("Connection Error");
    });
    }

    static getWithData(key, data){
        return axios.get(apiRoot+contextUrl[key]+data).then(res=>{ return res;}).catch(err=>{
            alert("Connection Error");
            return null;
        });
     }

   static post (key,data) {
        return axios.post(apiRoot+contextUrl[key],data).then(res=>{ return res;}).catch(err=>{
            alert("Connection Error");

        })
    }

}

export default ApiCall;


