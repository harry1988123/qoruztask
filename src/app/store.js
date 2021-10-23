import { configureStore, MiddlewareArray } from '@reduxjs/toolkit'; 
import appReducer from "../Slices/appSlice";
import {createStore, applyMiddleware, compose} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = configureStore({
  reducer: {
     todoList : appReducer
  },
},
composeEnhancers(applyMiddleware(thunk))
);
