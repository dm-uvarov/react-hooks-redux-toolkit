import React from 'react';

export default function DogList({dogsImgs }) {
    return (
        <div>
            {dogsImgs.map((img) => {
                return(
                <img key={img} src = {img} alt={"dog"} />
            )})}
        </div>
    )
}