import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
    </div>
  );
}

export default App;
