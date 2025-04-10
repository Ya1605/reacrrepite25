import React, {useEffect, useState} from 'react';
import {userApiServise} from "../servises/ApiService";
import {FC} from "react";
import {IUserModel} from "../model/IUserModel";


const UsersComponent:FC = () => {


    const [user, setUser] = useState <IUserModel[]>([]);
    useEffect(() => {
        userApiServise.getAllUsers().then(value => {
            setUser(value.data);
        })
    }, []);

    return (
        <div>
            {user.map(value =>
                <div key={value.id}>
               <ul>
                   <li>{value.name}</li>
                   <li>{value.email}</li>
               </ul></div>)}
        </div>
    );
};

export default UsersComponent;