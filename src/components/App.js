import React from "react";
import GifListContainer from "../containers/GifListContainer";
import NavBar from "./NavBar";
import GifSearch from "./GifSearch";
import GifList from "./GifList";

// import React from 'react';
// import NavBar from './NavBar';
// import GifListContainer from './GifListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <GifListContainer />
    </div>
  );
}

export default App;

