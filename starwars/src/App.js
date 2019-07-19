import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import PeopleWrapper from "./components/PeopleWrapper/PeopleWrapper";

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people")
      .then(({ data: { results } }) => {
        return setCharacters(prevCharacters => results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  if (characters.length === 0) {
    return <div style={{ color: "red", fontSize: "72px" }}>Loading...</div>;
  } else {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        {/* {console.log(characters)} */}
        <PeopleWrapper characters={characters} />
      </div>
    );
  }
};

export default App;
