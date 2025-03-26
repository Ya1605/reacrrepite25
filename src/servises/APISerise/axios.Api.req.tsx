import axios, {AxiosResponse} from "axios";
import {UserModel} from "../../models/UserModel";
import {PostModel} from "../../models/PostModel";

let axiosInstance = axios.create({
    baseURL: "https://dummyjson.com",
    headers: {'content-type' : 'application/json; charset = UTF-8'}
});

const getAllUsers =  ():Promise<AxiosResponse<UserModel[]>> => {
    return axiosInstance.get("/users");
};

const getAllPostsUsers = (id: number): Promise<AxiosResponse<PostModel[]>>  =>{

return axiosInstance.get("/posts/" + id);
};

export {
    getAllUsers,
    getAllPostsUsers
}