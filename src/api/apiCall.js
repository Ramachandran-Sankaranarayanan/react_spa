
import axios from 'axios';

const apiRoot="http://dummy.restapiexample.com/";

const contextUrl={
    POST_RIDER:"api/v1/create",
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


