import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './pages/About';
import Contacts from './pages/Contacts';
import MainPage from './pages/MainPage';
import Goods from './pages/Goods';
import Authorization from './pages/Authorization';
import { AuthProvider } from './context/AuthContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <MainPage/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/contacts',
        element: <Contacts/>
      },
      {
        path: '/goods',
        element: <Goods/>
      },
      {
        path: '/authorization',
        element: <Authorization/>
      }
    ]
  },
  {
    path: "/pricing",
    element: <div> page pricing</div>
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
        
);
