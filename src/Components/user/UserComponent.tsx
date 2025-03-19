import React, {FC} from 'react';
import {UserModels} from "../../models/UserModels";

export interface IProps {
    user: UserModels;
}

type IPropsType = IProps & {children? :React.ReactNode} & {lift?: (userid : number) => void};





const UserComponent:FC<IPropsType> = ({user,lift}) => {

const onClickHandler = () => {
  if (lift){
      lift (user.id);}
};

    return (
        <div>
            <ul>
            <li> Id: {user.id} ----
                AGE: {user.age}----
               GENDER: {user.gender}----
                LASTNAME: {user.lastName}-----
               EMAIL: {user.email}-----
            </li>
            </ul>
            <div>
                <button onClick={onClickHandler}>
                    show komment to post
                </button>
            </div>
        </div>
    );
};

export default UserComponent;
