import React from "react";
import './App.css';
import Characters from "./components/Characters";
import Header from "./components/Header";


function App() {
  return (
    <div className="App">
      <h1>Hola Mundo</h1>
      <Header />
      <Characters />
    </div>
  );
}

export default App;
