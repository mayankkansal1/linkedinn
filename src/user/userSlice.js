import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchLoggedInUser } from './userAPI';
const initialState = {
    status: 'idle',
    userinfo: null
}

export const fetchLoggedInUserAsync = createAsyncThunk(
    'user/fetchLoggedInUser',
    async () => {
        const response = await fetchLoggedInUser()
        return response.data
    }
)

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchLoggedInUserAsync.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchLoggedInUserAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.userinfo = action.payload;
            })
    }

})
export const selectUserInfo = (state) => state.user.userInfo;

export default userSlice.reducer
