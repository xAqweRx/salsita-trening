import {createSlice} from "@reduxjs/toolkit";

export const ageSlice = createSlice({
    name: 'age',
    initialState: {
        value: 30,
    },
    reducers: {
        increment: (currentState) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            currentState.value += 1
        },
        decrement: (currentState) => {
            currentState.value -= 1
        },
        incrementByAmount: (currentState, action) => {
            currentState.value += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = ageSlice.actions

export default ageSlice.reducer