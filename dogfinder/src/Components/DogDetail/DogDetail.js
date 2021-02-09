import React from "react";
import { Link, Redirect } from "react-router-dom";

const DogDetail = ({ dog }) => {
    if (Object.keys(dog).length === 0) {
        return <Redirect to="/dogs" />
    }
    return (
        <div className="DogDetail">
            <h1>{dog.name}</h1>
            <h2>Age: {dog.age}</h2>
            <img src={dog.src} alt={dog.name}/>
            <ul>
                {dog.facts.map(fact => <li>{fact}</li>)}
            </ul>
            <Link to="/dogs">{"<--"}</Link>
        </div>
    );
}

export default DogDetail;