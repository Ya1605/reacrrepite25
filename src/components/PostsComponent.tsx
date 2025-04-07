import React, {FC, useEffect, useState} from 'react';
import {PostModel} from "../model/PostModel";
import {postApiServise} from "../servises/ApiService";

const PostsComponent:FC = () => {
    const [posts, setPost] = useState<PostModel[]>([]);
    useEffect(() => {
        postApiServise.getAllPosts().then(value => {
           console.log(value);
            setPost(value.data);
        })
    }, []);



    return (
        <div>
            <h1>Posts</h1>
            {posts.map(post => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );

};

export default PostsComponent;