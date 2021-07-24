import logo from "./logo.svg";
import "./App.css";
import Home from "./component/Home";
import { useState } from "react";
import { ActiveProvider } from "./component/ActiveContext";
import Generator from "./component/Generator";

function App() {
  const [active, setActive] = useState("");
  const [isHomeActive, setIsHomeActive] = useState(true);

  const setActiveHandler = (newState) => {
    setActive(newState);
  };

  const setActiveHomeHandler = (newState) => {
    setIsHomeActive(newState);
  };
  return (
    <div className="App">
      <header className="App-header">
        <ActiveProvider
          value={{
            setActiveHandler,
            active,
            setActive,
            setActiveHomeHandler,
          }}
        >
          {isHomeActive ? <Home /> : <Generator />}
        </ActiveProvider>
      </header>
    </div>
  );
}

export default App;
