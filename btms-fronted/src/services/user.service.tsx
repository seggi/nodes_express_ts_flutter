import axios from  "axios";
import authHeader from "./auth.service";

const API_URL = "http://localhost:5000/api/nk";

const getPublicContent = () => {
    return axios.get(API_URL + "/", { headers: authHeader() });
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getPublicContent
}
