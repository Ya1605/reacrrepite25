import axios, { AxiosResponse} from "axios";
import {UserModels} from "../models/UserModels";
import {PostModels} from "../models/PostModels";

let axiosInstance = axios.create({
    baseURL:'https://dummyjson.com',
    headers:{'content-type' : 'application/json; charset = UTF-8'}
});

const getAllUsers = ():Promise<AxiosResponse<UserModels>> => {
  return axiosInstance.get('/users');
};

const getAllUserPosts = (id:number):Promise<AxiosResponse <PostModels[]>> => axiosInstance.get('/posts' + id);



export {
    getAllUsers,
    getAllUserPosts,
}