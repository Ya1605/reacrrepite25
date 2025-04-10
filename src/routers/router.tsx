import ReactDOM from 'react-dom/client';
import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import UsersComponent from "../components/UsersComponent";
import PostsComponent from "../components/PostsComponent";
import CommentsComponent from "../components/CommentsComponent";



const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const routerConfig = createBrowserRouter(
    [
        {path:'/', element: <MainLayout/>,
         children:[
             {index: true, element: <HomePage /> },
             {path:'home', element:<HomePage/>},
             {path: 'users', element:<UsersComponent/>},
             {path: 'posts', element: <PostsComponent/>},
             {path: 'comments', element: <CommentsComponent/>}
        ]},

    ]
);

export { routerConfig };