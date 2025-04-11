import ReactDOM from 'react-dom/client';
import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import UsersComponent from "../components/UsersComponent";
import PostsComponent from "../components/PostsComponent";
import CommentsComponent from "../components/CommentsComponent";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";



const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const routerConfig = createBrowserRouter(
    [
        {
            path:'/',
            element: <MainLayout/>,
            children:[
             {index: true, element: <HomePage/> },

             {
                 path: 'users', element:<UsersPage/>,
                 children:[
                 {path:':id', element: <PostsPage/>}
                 ]},

             {path: 'comments', element: <CommentsComponent/>}
        ]},

    ]
);

export { routerConfig };