// Action Creators

// async actions
// export function fetchCats() {
//   return function (dispatch) {
//     dispatch({ type: "cats/fetchCats/pending" });
//     fetch("https://learn-co-curriculum.github.io/cat-api/cats.json")
//       .then((response) => response.json())
//       .then((data) => {
//         dispatch({
//           type: "cats/fetchCats/fulfilled",
//           payload: data.images,
//         });
//       });
//   };
// }

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCats = createAsyncThunk("cats/fetchCats", async ()=>{
  const r = await fetch('https://learn-co-curriculum.github.io/cat-api/cats.json');
  const data = await r.json();
  return data.images;
})


const catsSlice = createSlice({
  name: "cats",
  initialState: { 
    entities: [], // array of
    status: "idle",
  },
  reducers:{ 
    catAdded(state,action){
      state.entities.push(action.payload)
    },
    catUpdated(state, action){
      const cat = state.entities.find(cat=> cat.id === action.payload.id)
      cat.url = action.payload.url;
    },
  },
  extraReducers: {
    [fetchCats.pending](state) {
      state.status = "loading";
    },
    [fetchCats.fulfilled](state,action){
      state.entities = action.payload;
      state.status = "idle";
    },

    
  }
})

export const {catAdded,catUpdated} = catsSlice.actions;
export default catsSlice.reducer;

// // sync actions added for demo purposes
// export function catAdded(newCat) {
//   return {
//     type: "cats/catAdded",
//     payload: newCat,
//   };
// }

// export function catUpdated(updatedCat) {
//   return {
//     type: "cats/catUpdated",
//     payload: updatedCat,
//   };
// }

// // Reducer
// const initialState = {
//   entities: [], // array of cats
//   status: "idle", // loading state
// };

// function catsReducer(state = initialState, action) {
//   switch (action.type) {
//     // sync actions
//     case "cats/catAdded":
//       return {
//         ...state,
//         entities: [...state.entities, action.payload],
//       };
//     case "cats/catUpdated":
//       return {
//         ...state,
//         entities: state.entities.map((cat) =>
//           cat.id === action.payload.id ? action.payload : cat
//         ),
//       };

//     // async actions
//     case "cats/fetchCats/pending":
//       return {
//         ...state,
//         status: "loading",
//       };
//     case "cats/fetchCats/fulfilled":
//       return {
//         ...state,
//         entities: action.payload,
//         status: "idle",
//       };

//     default:
//       return state;
//   }
// }

// export default catsReducer;
