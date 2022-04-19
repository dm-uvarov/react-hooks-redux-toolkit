import { configureStore } from "@reduxjs/toolkit";

import catsReducer from "./features/cats/catsSlice";
import dogReducer from "./features/dogs/dogsSlice"

const store = configureStore({
  reducer: {
    cats: catsReducer,
    dogs: dogReducer
  },
});

export default store;
