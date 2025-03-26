import React , {FC}from 'react';
import {PostModel} from "../../models/PostModel";




interface Iprops {
    posts: PostModel[];
}
const PostsComponent: FC<Iprops> = ({posts}) =>{
    console.log(posts);
       return(
           <div>
               POST
             //перетворює обєкт на рядок для виводу на екран//
             <h3>{JSON.stringify(posts)}</h3>

        </div>
    );
};

export default PostsComponent;