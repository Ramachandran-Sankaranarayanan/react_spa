
import axios from 'axios';

const apiUrl="localhost:8000";

const contextUrl={
    POST_RIDER:"/rider/submit",
}


class ApiCall {

    get = (key)=>{
       return axios.get(contextUrl[key])
    }

    post = (key,data)=>{
        return axios.post(contextUrl[key],data)
    }

}

export default ApiCall;


