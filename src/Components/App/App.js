import React from "react";
// import logo from './logo.svg';
import { SearchBar } from "../SearchBar";
import { SearchResults } from "../SearchResults";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          {/*  Add a SearchBar component  */}
          <SearchBar />

          <div className="App-playlist">
            {/*  Add a SearchResults component  */}
            <SearchResults />

            {/*  Add a Playlist component  */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;