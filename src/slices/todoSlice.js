import { createSlice } from '@reduxjs/toolkit';

//all initial state, action and reducers at one place and for different action just write the
//action name like addTodo, removeTodo, editTodo as key of the reducers function and
//do the modification(updation of state) on the state array itself(here it is todos) instead of returning the state 
//which we were doing earlier(in todoReducer) as there the state object was immutable.
//but in createSlice we can directly update the main state object as it makes is mutable bcz of immerJS
//but for immerJS to use fiter(), return the state or use the initial state as object(nested one) as below instead of just array.
//so now we don't need to do this if (action.type == ADD_TODO) { } 

const todoSlice = createSlice({
    name: 'todos', //name of slice or name of the part of the state which will be handled by this slice.
    initialState: {
        value: [] //to avoid immutabe of immerJS use a nested object instead of direct array.
    },
    reducers: {
        addTodo: (todos, action) => {
            //state array -> todos is modified and need not return any state.
            todos.value.push({ id: action.payload.id, title: action.payload.title });
        },
        removeTodo: (todos, action) => {
            todos.value = todos.value.filter(todo => todo.id != action.payload);
        },
        editTodo: (todos, action) => {
            todos.value = todos.value.map((todo) => {
                if (todo.id == action.payload.id) {
                    todo.title = action.payload.title
                }
                return todo;
            });
        }
    }
});

//console.log("initia state--", todoSlice.getInitialState()); //Provides access to the initial state value given to the slice. 

export default todoSlice;