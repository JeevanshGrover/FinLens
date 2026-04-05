import { configureStore } from "@reduxjs/toolkit";
import TransactionReducer from "./TransactionSlice.js"

export const store = configureStore({
    reducer: {
        transaction : TransactionReducer,
    }
})