import React from 'react'
import Header from '../Header/Header';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
        <div className="left-h">
          <Header />
        </div>
        <div className="right-h">right</div>
    </div>
  )
}

export default Home