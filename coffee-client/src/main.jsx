import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import App from './App.jsx';
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import MainLayout from './components/MainLayout.jsx';
import SignIn from './components/SignIn.jsx';
import Signup from './components/Signup.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,  // <-- Shared layout here
    children: [
      {
        path: '/',
        element: <App />,
        loader: () => fetch('http://localhost:5000/coffee'),
      },
      {
        path: '/add-coffee',
        element: <AddCoffee />,
      },
      {
        path: '/update-coffee/:id',
        element: <UpdateCoffee />,
        loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`),
      },
      {
        path:'sign-in',
        element:<SignIn/>
      }
      ,
    {
      path:'/sign-up',
      element:<Signup/>
    }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
