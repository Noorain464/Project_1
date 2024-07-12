const {axiosInstance} = require("./index")

//Register new User
// post acts as the send button in the postman
// gives an object
//but written in index.js content type as json
export const RegisterUser = async(value)=>{
    try{
        const response = await axiosInstance.post("api/users/register",value);
        return response.data;
    }catch(error){
        console.log(error);
    }
}

export const LoginUser = async(value)=>{
    try{
        const response = await axiosInstance.post("api/users/login",value);
        return response.data;
    }catch(error){
        console.log(error);
    }
}