import React, {useEffect, useState} from 'react';
import PostsComponent from "../components/PostsComponent";
import {PostModel} from "../model/PostModel";
import {postApiServise} from "../servises/ApiService";
import {useParams} from "react-router-dom";
import {useLocation} from "react-router-dom";


const PostsPage = () => {
    const {id} = useParams();
    const location = useLocation();
    console.log(location);
    const [posts, setPost] = useState<PostModel[]>([]);
    useEffect(() => {
            if (id)
                postApiServise.getPostsOfUser(id)
                    .then(value => setPost(value.data))

        },
        [id]);

    return (
        <div>
            <PostsComponent posts={posts}/>


        </div>
    );
};

export default PostsPage;