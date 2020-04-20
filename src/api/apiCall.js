
import axios from 'axios';
import SnackbarContent from '@material-ui/core/SnackbarContent';

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

const api = axios.create({
    baseURL: "https://localhost/aplicacao",
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
});

api.interceptors.request.use(async config => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

const headers= {
    headers: { "Content-Type":"application/json",'Access-Control-Allow-Origin': '*' }
}


class ApiCall {

    static get(key){
       return api.get(apiRoot+contextUrl[key],headers).then(res=>{ return res;}).catch(err=>{
        alert("Connection Error");
    });
    }

    static getWithData(key, data){
        return api.get(apiRoot+contextUrl[key]+data,headers).then(res=>{ return res;}).catch(err=>{
            alert("Connection Error");
            return null;
        });
     }

   static post (key,data) {
        return api.post(apiRoot+contextUrl[key],data,headers).then(res=>{ return res;}).catch(err=>{
            console.log();
            if(err.response.status == "401"){
                alert("Invalid Credentails");
            }else{
                alert("Connection Error");
            }

        })
    }

}

export default ApiCall;


