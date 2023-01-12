import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='home'>
      <h1>HOME PAGE</h1>
      <div className="home__header">
        <div className="home__header--left">
          <Link to='/about'>About</Link>
          <Link to='/store'>Store</Link>
        </div>
        <div className="home__header--right">
          <Link to='/gmail'>Gmail</Link>
          <Link to='/images'>Images</Link>
          {/* ICON - Apps */}
          {/* AVATAR - Account */}
        </div>
      </div>
      <div className="home__body">
        
      </div>
    </div>
  );
}

export default Home;
