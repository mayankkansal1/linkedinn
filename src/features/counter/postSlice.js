import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addToPost } from './postAPI';

const initialState = {
  value: null,
  posts: [],
};


export const addToPostAsync = createAsyncThunk(
  'post/addToPost',
  async (post) => {
    const response = await addToPost(post);
    return response.data;
  }
);

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {

  },

  extraReducers: (builder) => {
    builder
      .addCase(addToPostAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addToPostAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.posts.push(action.payload);
      });
  },
});

export const selectPost = (state) => state.post.post;


export default postSlice.reducer;
