import React,{useEffect} from "react";
import {useSelector, useDispatch } from 'react-redux';
import DogList from "./DogList";
import {fetchDogs} from "./dogsSlice";

export default function Dogs() {
    let dogsImgs = useSelector((state)=> state.dogs);
    console.log(dogsImgs)
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(fetchDogs());
    },[dispatch]);

    return (
        <div className="App"> 
            <h2> Dog's Mordas </h2>
            <DogList dogsImgs = {dogsImgs} />
        </div>
    )
}



