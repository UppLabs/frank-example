import axios from "axios";
import { AsyncStorage } from 'react-native';
import token from "./token";

// https://frank-api.azurewebsites.net/api 
// http://localhost:3000/api
const api= axios.create({
    baseURL: 'http://localhost:3000/api',
});

api.interceptors.request.use(
    async config => {
      config.headers.authorization = await token;
      return config;
    },
    error => {
        console.log(error);
        Promise.reject(error);
    }
  );

api.interceptors.response.use((response) => {
    return response;
}, (error) => {
    const status = error.response.status
    if(status == 401 || status == 403) {
        AsyncStorage.removeItem('token');
    }
    console.log(error.response);
    return Promise.reject(error.response);
})

export default api;