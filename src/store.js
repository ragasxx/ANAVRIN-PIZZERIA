import { combineReducers } from "redux";

import { createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import { cartReducer } from "./reducers/cartReducers";

import { getAllPizzasReducer } from "./reducers/pizzaReducers";
import { registerUserReducer } from "./reducers/userReducers";

const finalReducer = combineReducers({
  getAllPizzasReducer: getAllPizzasReducer,
  cartReducer: cartReducer,
  registerUserReducer: registerUserReducer,
});

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const initialState = {
  cartReducer: {
    cartItems: cartItems,
  },
};

const store = createStore(finalReducer, initialState, applyMiddleware(thunk));

export default store;
