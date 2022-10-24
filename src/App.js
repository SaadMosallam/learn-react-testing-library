import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Root from './components/Root';
import ErrorPage from './components/ErrorPage';
import Login from './components/Login';
import Profile from './components/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/profile',
    element: <Profile name="John Doe" title="Software Engineer" details="I love developing Apps using React" />,
    errorElement: <ErrorPage />,
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
