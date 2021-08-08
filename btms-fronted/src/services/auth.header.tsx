import axios from "axios";


const API_URL: string = "http://localhost:5000/api/auth/";


const register = async (
    username: string, email: string, password: string,
    reppeatpassword: string
    ): Promise<any> => {
        return await axios.post(API_URL+ "register", {
            username, 
            email, 
            password,
            reppeatpassword
        });
};

const login = async (email: string, password:string): Promise<any>=> {
    return await axios.post(API_URL + "login", 

    {
        email, 
        password,
    })                                                                                                                                                                                                                                                                                                                                                                                                      
    .then((response) => {

        if (response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
    });
}   


const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user") || '{}');
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    register, 
    login,
    logout,
    getCurrentUser
};