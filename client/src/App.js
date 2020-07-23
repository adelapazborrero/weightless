import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import UserScreen from "./components/UserScreen";

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/user/:name" component={UserScreen} />
    </div>
  );
}

export default App;
