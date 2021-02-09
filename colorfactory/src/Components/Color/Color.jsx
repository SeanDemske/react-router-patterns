import React from "react";
import { Link } from "react-router-dom";
import "./Color.css"

const Color = ({ activeColor }) => {
    return (
        <div className="Color" style={{backgroundColor: activeColor.color}}>
            <p>{activeColor.name}</p>
            <Link to="/colors">{"<-"}</Link>
        </div>
    );
}

export default Color;