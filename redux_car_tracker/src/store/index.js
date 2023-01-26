import {configureStore} from "@reduxjs/toolkit";
import {carListReducer, addCar, removeCar, changeSearchTerm} from "./slices/carListSlice";
import {carEntryReducer, changeName, changeCost} from "./slices/carEntrySlice";

const store = configureStore({
    reducer: {
        carList: carListReducer,
        carEntry: carEntryReducer
    }
});

export { store, addCar, removeCar, changeSearchTerm, changeName, changeCost};