import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todos/todoSlice"

const sotre= configureStore({
    reducer:{
        todos:todoReducer,
    }
})

export default sotre;