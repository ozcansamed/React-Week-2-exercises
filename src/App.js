import React from "react";
import Friend from "./components/exercise1/Friend";
import DogGallery from "./components/exercise2/DogGallery";
import RandomJoke from "./components/exercise3/RandomJoke";
import "./App.css";
// https://focused-wescoff-0237b8.netlify.com
function App() {
  return (
    <div className='App'>
      <Friend />
      <hr />
      <DogGallery />
      <hr />
      <RandomJoke />
    </div>
  );
}

export default App;
