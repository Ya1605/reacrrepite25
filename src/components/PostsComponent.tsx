import React, {FC,} from 'react';
import {PostModel} from "../model/PostModel";
import PostComponent from "./PostComponent";

interface IProps {
    posts: PostModel[]
}

const PostsComponent: FC<IProps> = ({posts}) => {


    return (
        <div>
            {
                posts.map(post => <PostComponent key={post.id} post={post}/>)
            }
        </div>
    );
};

export default PostsComponent;

