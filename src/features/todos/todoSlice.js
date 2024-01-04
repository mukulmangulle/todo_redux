import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todos",
    initialState: {
        todos: [{
            id: 1, text: "something here"
        }],

        edit: {
            todo: {},
            editMode: false
        },
    },
    reducers: {
        //1
        remove: (state, action) => {
            return {
                ...state,
                todos: state.todos.filter((item) => item.id !== action.payload),
            };
        },

        //2
        save: (state, action) => {
            return {
                ...state,
                todos: [action.payload, ...state.todos],
            };
        },

        //3
        edit: (state, action) => {
            return {
                ...state,
                edit: { todo: action.payload, editMode: true },
            };
        },

        //4
        update: (state, action, update) => {
            return {
                ...state,
                todos: state.todos.map(item => item.id === action.payload.id ? action.payload : item),
                edit: { todo: {}, editMode: false }
            };
        },

    },
});
export const { remove, save, edit , update} = todoSlice.actions;
export default todoSlice.reducer;