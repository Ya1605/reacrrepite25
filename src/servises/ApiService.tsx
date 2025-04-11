import axios, {AxiosResponse} from "axios";
import {IUserModel} from "../model/IUserModel";
import {PostModel} from "../model/PostModel";
import {CommentsModel} from "../model/CommentsModel";

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
    },
    getPostsOfUser:async (userId:string):Promise<AxiosResponse<PostModel>> =>{
        const posts = await axiosInstance.get(`/users/${userId}/posts`);
        console.log(posts);
        return posts;
}
};

const commentApiServise = {
    getAllComments():Promise<AxiosResponse<CommentsModel[]>> {
    return axiosInstance.get(`/comments`);
    },

    getAllCommentsByid:async (id:number):Promise<AxiosResponse<CommentsModel>> =>{
    const comments = await axiosInstance.get('/comments');
    console.log(comments);
    return comments;}
}







export {

    userApiServise,
    postApiServise,
    commentApiServise,
}