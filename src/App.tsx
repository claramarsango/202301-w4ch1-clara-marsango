import React from "react";
import GentleManCard from "./components/GentlemanCard/GentleManCard";
import gentlemenArray from "./components/Gentleman.data";
import "./App.css";
import "./css/styles.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="main-header">
          <h1 className="main-title">The pointing gentlemen</h1>
        </header>
        {gentlemenArray.map((gentleman) => (
          <GentleManCard gentleman={gentleman} />
        ))}
      </div>
    </div>
  );
}

export default App;
