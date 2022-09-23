import { createStore,combineReducers,applyMiddleware} from 'redux';
import {countReducer} from "./reducers/counterReducer"
import {TodoReducer} from "./reducers/TodoReducer"
import{composeWithDevTools} from 'redux-devtools-extension' 
import thunkmiddleware from 'redux-thunk'
import { productReducer } from "./reducers/productReducer"
const composedEnhaner = composeWithDevTools (applyMiddleware(thunkmiddleware))


const rootreducer = combineReducers({
    counter: countReducer,
    Todos: TodoReducer,
    products: productReducer
})

export const store = createStore(rootreducer, composedEnhaner);
 
