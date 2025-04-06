import ReactDOM from 'react-dom/client';
import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import UsersComponent from "../components/UsersComponent";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const routerConfig = createBrowserRouter(
    [
        {path:'/', element: <MainLayout/>,
         children:[
             {path:'home', element:<HomePage/>},
             {path: 'users', element:<UsersComponent/>}
        ]},

    ]
);

export { routerConfig };