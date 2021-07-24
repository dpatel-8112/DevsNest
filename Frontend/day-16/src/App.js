import logo from "./logo.svg";
import "./App.css";
import Home from "./component/Home";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
      </header>
    </div>
  );
}

export default App;
