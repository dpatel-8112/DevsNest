import "./App.css";
import About from "./component/About";
import Dashboard from "./component/Dashboard";
import Home from "./component/Home";
import Profile from "./component/Profile";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import NavBar from "./component/NavBar";
import { useState } from "react";
import { ActiveProvider } from "./component/ActiveContext";
import { ActiveContext } from "./component/ActiveContext";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <ActiveProvider value={{ loggedIn, setLoggedIn }}>
          <Router>
            <Route path="/">
              <NavBar />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/profile">
              {loggedIn ? <Profile /> : <Redirect to="/home" />}
            </Route>
            <Route path="/dashboard">
              {loggedIn ? <Dashboard /> : <Redirect to="/home" />}
            </Route>
          </Router>
        </ActiveProvider>
      </header>
    </div>
  );
}

export default App;
