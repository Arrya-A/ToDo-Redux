import { createSlice } from "@reduxjs/toolkit"

const todoSlice = createSlice({
    name: 'todoSlice',
    initialState: { todos: [] },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
                id: Date.now(), // Using timestamp as a unique ID
                text: action.payload,
                completed: false
            })
        },

        removeTodo: (state, action) => {
            state.todos.splice(action.payload, 1);
        },

        toggleTodo: (state, action) => {
            const todo = state.todos[action.payload];
            if (todo) {
                todo.completed = !todo.completed; // Toggle completion
            }
        }
    }
})

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions
export default todoSlice.reducer