import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import Color from "./Color/Color";   
import CreateColorForm from "./CreateColorForm/CreateColorForm";

const Routes = () => {
    const INITIAL_COLORS = [
        {
            name: "Deep Blue",
            color: "#2a6592"
        },
        {
            name: "Dark Sand",
            color: "#db9833"
        },
        {
            name: "Egyption Stone",
            color: "#f6d8ac"
        }
    ];
    const [colors, setColors] = useState(INITIAL_COLORS);
    const [activeColor, setActiveColor] = useState({});

    const addColor = (color) => {
        setColors([
            ...colors,
            color
        ])
    }

    return (
        <Switch>
            <Route exact path="/colors">
                <Homepage colorList={colors} setActiveColor={setActiveColor} />
            </Route>
            <Route exact path="/colors/create">
                <CreateColorForm addColor={addColor} />
            </Route>
            <Route exact path="/colors/:color">
                <Color activeColor={activeColor} />
            </Route>
            <Redirect to="/colors" />
        </Switch>
    );
}

export default Routes;