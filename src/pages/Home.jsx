import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@mui/icons-material/Apps";
import { Avatar } from "@mui/material";
import Search from "../components/Search.jsx";

function Home() {
  
  return (

    <div className="home">
      <div className="home__header">
        <div className="home__header--left">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>

        <div className="home__header--right">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppsIcon />
          <Avatar />
          {/* AVATAR - Account */}
        </div>
      </div>



      <div className="home__body">
        <img
          src="https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png"
          alt=""
        />
        <div className="home__input--container">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
