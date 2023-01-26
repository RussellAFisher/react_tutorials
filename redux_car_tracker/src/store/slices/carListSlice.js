import {createSlice, nanoid} from "@reduxjs/toolkit";

const carListSlice = createSlice({
    name: 'carList',
    initialState: {
        searchTerm: '',
        data: []
    },
    reducers: {
        changeSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
        addCar(state, action) {
            state.data.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid()
            });
        },
        removeCar(state, action) {
            state.data = state.data.filter((car) => {
                return car.id !== action.payload;
            });
        }
    }
});

export const { changeSearchTerm, addCar, removeCar } = carListSlice.actions;
export const carListReducer = carListSlice.reducer;