import axios from 'axios';
import {http,getToken} from '../utils/localStorage'
const URLLiseReg = 'http://localhost:8000/api/lisereg'; 
//const URLLiseReg = 'http://103.160.107.21:8000/api/lisereg'; 
axios.defaults.withCredentials = true;  
export const namerateCreate = async(data) => {

    const config = {
        headers: {
            "Content-Type":"application/json",
            Authorization : `Bearer ${getToken()}`
        }
    }
    return await axios.post(`${URLLiseReg}/namerateCreate`,data,config);
}