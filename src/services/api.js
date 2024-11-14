import axios from 'axios'

//Create a axios instance with some base configutations;
export const api = axios.create({
    baseURL: "http://localhost:3336"

})