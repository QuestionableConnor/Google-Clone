import React from "react";
import "./App.css";
import Home from "./pages/Home.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    //BEM
    <div className="app">
      <Router>
        <Routes>
          <Route path="/search" />
          {/*Second Page - Search Page (Page with all the search results)
            <h1>This is the search bar</h1>*/}
          <Route path="/" exact element={<Home />} />{" "}
          {/*First Page - Home Page page with the search bar*/}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
