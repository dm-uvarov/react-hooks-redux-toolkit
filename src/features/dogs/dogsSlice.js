// // action creators 

// //async function
// export function fetchDogs() {
//     return function(dispatch) {
//         dispatch({type: "dogs/fetchDogs/pending" });
//         fetch("https://dog.ceo/api/breed/hound/images")
//           .then(r=>r.json())
//           .then((imgs)=>{
//             dispatch({
//               type: "dogs/fetchDogs/filled",
//               payload: imgs.message.images  
                
//             })
//           })
//     }
// }

// //sync func added
// export function dogUpdated(updateDog){
//     return {
//         type: "dogs/dogUpdated",
//         payload: updateDog,
//     };
// }

// export function dogAdded(newDog) {
//   return {
//     type: "dogs/dogAdded",
//     payload: newDog
//   }
// }

// //Reducer 
// const initialState = {
//   entities: [], //array of dog dogImage
//   status: "idle",  //loading state
// }


// export default function dogsReducer(state = initialState, action) {
//   switch (action.type) {
//     //sync getActions
//     case "dogs/dogAdded":
//       return {
//         ...state,
//         entities: [...state.entities, action.payload],

//       };
//     case "dogs/dogUpdated":
//       return {
//         ...state,
//         entities: state.entities.map((dog) => 
//           dog === action.payload ? action.payload : dog),
//       };
//     //async action 
//     case "dogs/fetchDogs/pending":
//       return {
//         ...state, 
//         status: "loading"
//       };
//     case "dogs/fetchDogs/fullfilled":
//       return{
//         ...state, 
//         entities: action.payload,
//         status: "idle",
//       };

//     default:
//       return state;

//   };



// }





import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchDogs = createAsyncThunk("dogs/fetchDogs", 
async ()=>{
  const r = await fetch('https://dog.ceo/api/breed/hound/images');
  const data = await r.json();
  return data.message;
})


const dogsSlice = createSlice({
  name: "dogs",
  initialState: { 
    entities: [], // array of
    status: "idle",
  },
  reducers:{ 
    dogAdded(state,action){
      state.entities.push(action.payload)
    },
    dogDeleted(state, action){
      state = state.entities.filter((dog)=> {return dog !== action.payload})
    },
  },
  extraReducers: {
    [fetchDogs.pending](state) {
      state.status = "loading";
    },
    [fetchDogs.fulfilled](state,action){
      state.entities = action.payload;
      state.status = "idle";
    },

    
  }
})

export const {dogsAdded,dogDeleted} = dogsSlice.actions;
export default dogsSlice.reducer;