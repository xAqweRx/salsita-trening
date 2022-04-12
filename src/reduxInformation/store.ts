import {configureStore} from "@reduxjs/toolkit";
import ageReducer from './age/ageSlice';

export const store = configureStore({
    reducer: {
        age: ageReducer,
    },
})


export type RootState = ReturnType<typeof store.getState>;