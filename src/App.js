import React from "react";
import "./App.css";
import Home from "./pages/Home.jsx";
import SearchPage from "./pages/SearchPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    //BEM
    <div className="app">
      <Router>
        <Routes>
          <Route path="/search" exact element={<SearchPage />} />
          <Route path="/" exact element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
