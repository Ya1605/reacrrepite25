import React, { FC, useEffect, useState} from 'react';
import {UserModels} from "../../models/UserModels";
import UserComponent from "../user/UserComponent";
import {getAllUsers} from "../../servises/JPH.Api.Servise";



type IUsersProps = {lift?:(userid:number)=>void}

const UsersComponents:FC<IUsersProps> = ({lift}) => {


const [users, setUsers] = useState<UserModels[]>([]);

    useEffect(() => {
        getAllUsers()
            .then(({data}) =>{
               // console.log(data, Array.isArray(data));
               // console.log(data);
               // console.log(typeof data);
                setUsers  (data.users);
            })
    }, []);

    return (
        <div>
            {users.map((user) =>
                (<UserComponent key={user.id} user={user} lift={lift}/>))}
        </div>
    );
};

export default UsersComponents;