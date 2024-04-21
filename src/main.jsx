import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import Phones from './components/Phones.jsx';
import Root from './components/Root.jsx';
import Phone from './components/Phone.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/phones",
        element: <Phones />,
        loader : () => fetch('http://localhost:3000/phones/'),
      },
      {
        path: "/phones/:id",
        element: <Phone />,
        loader : ({params}) => fetch(`http://localhost:3000/phones/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
