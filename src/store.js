// import { createStore, combineReducers } from 'redux';
// import todoReducer from './reducers/todoReducer';

// const reduxDevToolEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
// const store = createStore(combineReducers({todos: todoReducer}), {}, reduxDevToolEnhancer);

import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './slices/todoSlice.js';

//inside configureStore just like above we give a single reducer and if there are more we need to combine all of them
//by giving names of all the reducers function inside the reducer key of the configureStore.
//we can pass other keys inside the configureStore like devTools to configure redux-dev-toos, middleware and so on.

const store = configureStore({
    reducer: {
        todos: todoSlice.reducer,
        //users: userSlice.reducer -> here both the reducer get combine on its own and we don't need to combine it.
    },
    devTools: true
});

export default store;