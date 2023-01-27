import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {faker} from "@faker-js/faker";

const postUser = createAsyncThunk('users/post', async () => {
    const response = await axios.post('http://localhost:3005/users', {
        name: faker.name.fullName()
    });

    return response.data;
});

export {postUser};