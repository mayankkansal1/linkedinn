import React, { useEffect } from 'react';
// import Header from './Header';
// import Sidebar from './Sidebar';
// import Feed from './Feed';
// import Widgets from './Widgets';
// import Home from "./pages/Home"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Demo from './Demo';
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"
import { useDispatch, useSelector } from 'react-redux';
import { checkAuthAsync, selectLoggedInUser, selectUserChecked } from './auth/authSlice';
import Protected from './protected';
import Logout from './auth/components/LogOut';
import { fetchLoggedInUserAsync } from './user/userSlice';
import Profile from './user/profile';
import PageNotFound from './pages/404';

const router = createBrowserRouter([
  {
    path: "/",
    element: (<Protected>
      <Demo></Demo></Protected>
    )
  },
  {
    path: '/login',
    element: <LoginPage></LoginPage>,
  },
  // {
  //   path: '/logout',
  //   element: <Logout></Logout>,
  // },
  {
    path: '/signup',
    element: <SignupPage></SignupPage>,
  },
  {
    path: '/profile',
    element: <Profile></Profile>,
  }
  ,
  {
    path: '*',
    element: <PageNotFound></PageNotFound>,
  }
])
function App() {
  const dispatch = useDispatch()
  const user = useSelector(selectLoggedInUser)
  const userChecked = useSelector(selectUserChecked)

  useEffect(() => {
    dispatch(checkAuthAsync());
  }, [dispatch]);
  useEffect(() => {
    if (user) {
      // we can get req.user by token on backend so no need to give in front-end
      dispatch(fetchLoggedInUserAsync());
    }
  }, [dispatch, user]);


  return (
    <div className="m-0" >
      {userChecked && (
        <RouterProvider router={router} />
      )}

    </div>
  );
}

export default App;
