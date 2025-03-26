import React, {FC} from 'react';
import {UserModel} from "../../models/UserModel";
import {getAllPostsUsers} from "../../servises/APISerise/axios.Api.req";




interface IProps {
    user: UserModel
}

type IPropsType = IProps & {children ?: React.ReactNode} & {lift?: (id: number)=> void}
const UserComponent: FC<IPropsType> = ({user, lift}) => {
    const onclickHendlerPost = () =>{
        if (lift){
            lift(user.id)
        }
    };


    return (
        <div>
            {user.id}
            {user.firstName}
            {user.lastName}

            <button onClick={onclickHendlerPost}>Show me all posts</button>
            <hr/>
        </div>
    );
};

export default UserComponent;