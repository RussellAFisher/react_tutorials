import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const getUsers = createAsyncThunk('users/get', async () => {
    const response = await axios.get('http://localhost:3005/users');

    // TODO: remove
    await pause(1000);

    return response.data;
});
// TODO: remove
const pause = (duration) => {
    return new Promise((resolve) => {
       setTimeout(resolve, duration);
    });
}

export {getUsers};