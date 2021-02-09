import React from "react";
import { NavLink } from "react-router-dom";
import "./DogList.css";


const DogList = ({ dogs, setActiveDog }) => {

    return (
        <div className="DogList">
            {dogs.map(dog => {
                return <NavLink to={`/dogs/${dog.name}`} key={dog.age} onClick={() => setActiveDog({...dog})}>{dog.name}</NavLink>
            })}
        </div>
    );
}

export default DogList;