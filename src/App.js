import React from "react";
import "./App.css";
import Searchbar from "./Searchbar";
import Timestamp from "./Timestamp";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <div className="container">
      <div className="App">
        <Searchbar />
        <Timestamp />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
