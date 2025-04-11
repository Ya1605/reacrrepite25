import React, {useEffect, useState} from 'react';
import {userApiServise} from "../servises/ApiService";
import {FC} from "react";
import {IUserModel} from "../model/IUserModel";
import UserComponent from "./UserComponent";


const UsersComponent:FC = () => {


    const [users, setUser] = useState <IUserModel[]>([]);
    useEffect(() => {
        userApiServise.getAllUsers().then(value => {
            setUser(value.data);
        })
    }, []);

    return (
        <div>
            {users.map(user => <UserComponent key = {user.id} user={user}></UserComponent>)}

        </div>
    );
};

export default UsersComponent;