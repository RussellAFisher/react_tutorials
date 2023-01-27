import {createSlice} from "@reduxjs/toolkit";
import {getUsers} from "../thunks/getUsers";
import {postUser} from "../thunks/postUser";
import {deleteUser} from "../thunks/deleteUser";

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        data: [],
        isLoading: false,
        error: null
    },
    extraReducers(builder) {
        builder.addCase(getUsers.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(getUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });

        builder.addCase(postUser.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(postUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data.push(action.payload);
        });
        builder.addCase(postUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });

        builder.addCase(deleteUser.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(deleteUser.fulfilled, (state, action) => {
            state.isLoading = false;

            state.data = state.data.filter((user) => {
                return user.id !== action.payload.id;
            })
        });
        builder.addCase(deleteUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });
    }
});

export const usersReducer = usersSlice.reducer;