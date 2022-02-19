import { combineReducers } from "redux";

import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";

import { getAllPizzasReducer } from "./reducers/pizzaReducers";

const finalReducer = combineReducers({
  getAllPizzasReducer: getAllPizzasReducer,
});

const initialState = {};

const store = createStore(finalReducer, initialState, applyMiddleware(thunk));

export default store;
