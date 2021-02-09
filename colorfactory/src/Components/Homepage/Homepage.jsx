import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";

const Homepage = ({ colorList, setActiveColor }) => {
    const handleMouseEnter = (e) => {
        e.target.style.color = e.target.getAttribute('data-colorval');
    }

    const handleMouseLeave = (e) => {
        e.target.style.color = "black";
    }
    
    console.log(colorList);

    return (
        <div className="Homepage">
            <header>
                <h1>Welcome to the color factory.</h1>
                <Link to="/colors/create">Add a color</Link>
            </header>
            <div className="ColorSelectionContainer">
                <p>Please select a color</p>
                <ul>
                    {colorList.map(color => (
                        <li>
                            <Link 
                                data-colorval={color.color}
                                to={`colors/${color.name}`}
                                onClick={() => setActiveColor(color)} 
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                {color.name}
                            </Link>
                        </li> 
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Homepage;