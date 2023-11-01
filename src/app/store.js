import { configureStore } from '@reduxjs/toolkit';
import postsReducer from "../postsSlice"
import authReducer from '../auth/authSlice';
import usersReducer from '../user/userSlice'

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    auth: authReducer,
    users: usersReducer
  },
});
