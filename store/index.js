import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import BreadReducer from "./reducers/breads.reducer";
import CartReducer from "./reducers/cart.reducer";
import CategoryReducer from "./reducers/category.reducer";

const RootReducer = combineReducers({
    categories: CategoryReducer,
    breads: BreadReducer,
    cart: CartReducer
})

export default createStore(RootReducer, applyMiddleware(thunk));