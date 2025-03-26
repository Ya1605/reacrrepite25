//  https://dummyjson.com/docs/users
//   отримати та вивести інфу по всіх юзерах. 
//   Для запитів використовуємо axios та 
//   розносимо логіку в сервіси
//   Структура компонентів : App - Users- User
//   в компоненті User зробити кнопку при натсиканні на 
//   яку відбувається стейт ліфтінг ід користувача в 
//   батьківську компоненту. В батьківській компоненті 
//   вивести всі пости обраного юзера 
//   (https://dummyjson.com/docs/posts 
//   Get all posts by user id)

import React, {useState} from 'react';
import UsersComponent from "./components/usersComponent/UsersComponent";
import PostsComponent from "./components/postsComponent/PostsComponent";
import {getAllPostsUsers} from "./servises/APISerise/axios.Api.req";
import {PostModel} from "./models/PostModel";


const App = () => {
    const [posts, setPosts] = useState<PostModel[]>([]);
    const lift = (id:number)=>{

        getAllPostsUsers(id)
            .then(({data})=>{
             //console.log(data);повертало обєкт а не масив
                // тому треба було юзати SON.stringify
             //console.log(Array.isArray(data.posts));
             const postObject = data;
             setPosts(postObject);
        });
    }

    return (
      <div>
        <div><UsersComponent lift={lift}/></div>
          <div><PostsComponent posts={posts}/></div>
      </div>
  );
};

export default App;