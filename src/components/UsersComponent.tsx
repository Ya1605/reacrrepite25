import React, {useEffect, useState} from 'react';
import {userApiServise} from "../servises/ApiService";
import {FC} from "react";
import {IUserModel} from "../model/IUserModel";
import UserComponent from "./UserComponent";


const UsersComponent:FC = () => {


    const [user, setUser] = useState <IUserModel[]>([]);
    useEffect(() => {
        userApiServise.getAllUsers().then(value => {
            setUser(value.data);
        })
    }, []);

    return (
        <div>
            {user.map(user => <UserComponent user={user.id} user={user}/>)}

        </div>
    );
};

export default UsersComponent;