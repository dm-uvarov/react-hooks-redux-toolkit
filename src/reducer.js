import { combineReducers } from "redux";
import catsReducer from "./features/cats/catsSlice";
import dogsReducer from "./features/dogs/dogsSlice"


const rootReducer = combineReducers({
  cats: catsReducer,
  dogs: dogsReducer,
});

export default rootReducer;
