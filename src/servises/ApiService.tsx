import axios, {AxiosResponse} from "axios";
import {IUserModel} from "../model/IUserModel";
import {PostModel} from "../model/PostModel";

let axiosInstance = axios.create({

    baseURL: "http://jsonplaceholder.typicode.com",
    headers: {}
});


const userApiServise = {
    getAllUsers():Promise<AxiosResponse<IUserModel[]>> {
        return axiosInstance.get("/users");
    },
    getAllUserById: async (userId:number):Promise<AxiosResponse<IUserModel>> =>{
     const user = await axiosInstance.get(`/users/${userId}`);

    return user;
    }
};

const postApiServise = {
    getAllPosts():Promise<AxiosResponse<PostModel[]>>{
       return axiosInstance.get(`/posts`, );
},

    getAllPostById: async ( id:number):Promise<AxiosResponse<PostModel>> =>{
        const post = await axiosInstance.get('/posts' + id);
        console.log(post);
        return post;
    }
};

export {

    userApiServise,
    postApiServise,
}