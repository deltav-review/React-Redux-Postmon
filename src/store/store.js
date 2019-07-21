import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducer from './reducer';
const reducers = combineReducers({
  reducer: reducer

})
const store = () => 
createStore(applyMiddleware(reducers, composeWithDevTools(applyMiddleware(thunk)) ))
export default store;
