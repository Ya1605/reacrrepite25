import React, {useState} from 'react';
import UsersComponents from "./Components/users/UsersComponents";

import {getAllUserPosts} from "./servises/JPH.Api.Servise";




const App = () => {

   // const [posts, setPosts] = useState<PostModels>([]);

    const lift = (userid:number)=>{
        getAllUserPosts(userid).then(({data})=>{
            console.log(data)
        })

    };

    return (
      <div>
       <UsersComponents lift={lift}/>


      </div>
  );
};

export default App;
