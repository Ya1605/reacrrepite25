import React, {FC, useEffect, useState} from 'react';
import {UserModel} from "../../models/UserModel";
import UserComponent from "../userComponent/UserComponent";
import {getAllUsers} from "../../servises/APISerise/axios.Api.req";


type IPostsType = {lift?:(id:number) => void }
const UsersComponent:FC<IPostsType> = ({lift}) => {

    const [users, setUsers] = useState<UserModel[]>([]);
    useEffect(() => {
            getAllUsers().then(({data}) =>
                setUsers(data.users));

        },
        []);
    return (
        <div>
            {users.map((user) => (<UserComponent  user={user} lift={lift}/>))}
        </div>
    );
};

export default UsersComponent;