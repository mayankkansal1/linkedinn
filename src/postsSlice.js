import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addToPost, fetchAllPosts, fetchCount } from './postsApi';

const initialState = {
    value: 0,
    posts: [],
    status: 'idle',
};


export const fetchAllPostsAsync = createAsyncThunk(
    'posts/fetchAllPosts',
    async () => {
        const response = await fetchAllPosts();
        // The value we return becomes the `fulfilled` action payload
        return response.data;
    }
);
export const incrementAsync = createAsyncThunk(
    'posts/fetchCount',
    async (amount) => {
        const response = await fetchCount(amount);
        // The value we return becomes the `fulfilled` action payload
        return response.data;
    }
);
export const addToPostAsync = createAsyncThunk(
    'post/addToPost',
    async (posts) => {
        const response = await addToPost(posts);
        return response.data;
    }
);

export const postsSlice = createSlice({
    name: 'post',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        increment: (state) => {
            state.value += 1;
        }

    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchAllPostsAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchAllPostsAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.posts = action.payload;
            })
            .addCase(incrementAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(incrementAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.value += action.payload;
            })
            .addCase(addToPostAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addToPostAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.posts.push(action.payload);
            });
    },
});

export const { increment } = postsSlice.actions;

export const selectAllPosts = (state) => state.posts.posts;



export default postsSlice.reducer;
