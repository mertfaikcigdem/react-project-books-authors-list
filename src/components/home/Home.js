import React from 'react'
import "./Home.css";
import { Link } from 'react-router-dom'

function Home() {
    return (
        
    <div className="home-content">
      <div className="b-content">
      <Link to="/books">
      <span>KİTAPLARA GÖZ AT</span>
      </Link>
      </div>
      <div className="a-content">
      <Link to="/author">
      <span>YAZARLARA GÖZ AT</span>
      </Link>
      </div>
    </div>
    )
}

export default Home
