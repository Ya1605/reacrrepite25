import React, {FC} from 'react';
import {PostModel} from "../model/PostModel";

interface IProps {
    post: PostModel;
}

const PostComponent:FC<IProps> = ({post}) => {
    return (
        <div>
            {post.title}
        </div>
    );
};

export default PostComponent;