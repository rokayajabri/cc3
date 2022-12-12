import { combineReducers, configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./TodoSlice";
import UserReducer from "./UserSlice";

const reducer = combineReducers({
    todo: TodoReducer,
    user: UserReducer,
});

const store = configureStore({reducer}); 


export default store; 