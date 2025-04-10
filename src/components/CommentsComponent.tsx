import React, {useEffect, useState} from 'react';
import {CommentsModel} from "../model/CommentsModel";
import {commentApiServise} from "../servises/ApiService";

const CommentsComponent = () => {

    const [comments, setComments] = useState<CommentsModel[]>([]);

    useEffect(() => {
    commentApiServise.getAllComments().then(value => {
        console.log(value);
        setComments(value.data);
    })
    }, []);
    return (
        <div>
            {comments.map((value) =>
                <div>
                    {value.body}
                    {value.name}
                    {value.email}<hr/>
                </div>
            )}
        </div>
    );
};

export default CommentsComponent;