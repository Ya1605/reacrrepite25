import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from "react-router-dom-v5-compat";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const routerConfig = createBrowserRouter(
  [
    {path:'/', element : 'Hello'}
  ]
)


root.render(
  
  <RouterProvider router={routerConfig}></RouterProvider>

  
);
function createBrowserRouter(arg0: { path: string; }[]) {
  throw new Error('Function not implemented.');
}

