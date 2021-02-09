import { Route, Switch, Redirect } from "react-router-dom";
import React, { useState } from "react";
import DogList from "./Components/DogList/DogList";
import DogDetail from "./Components/DogDetail/DogDetail";
import './App.css';

import whiskey from "./img/whiskey.jpg";
import duke from "./img/duke.jpg";
import perry from "./img/perry.jpg";
import tubby from "./img/tubby.jpg";



function App({ dogs }) {
  const [activeDog, setActiveDog] = useState({});

  return (
    <Switch className="App">
      <Route exact path="/dogs">
        <DogList dogs={dogs} setActiveDog={setActiveDog} />
      </Route>
      <Route exact path="/dogs/:dogName">
        <DogDetail dog={activeDog} />
      </Route>
      <Redirect to="/dogs" />
    </Switch>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 2,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}

export default App;
