import React from 'react'
import {Link} from "react-router-dom";
import "../Components/Home.css"

function Home() {
  return (<div className="video-container" style={{backgroundImage:"url(./assests/Libarary.jpg)",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"center"}}>
    <nav className="navbar ">
  <div className="container">
    <a className="navbar-brand" href="#">
        <h2 className='libby'>My Libby</h2>
    </a>

    <ul className="nav justify-content-center">
  <li className="nav-item">
    <Link to="/Repository" className="innernav">Repository</Link>
  </li>
  <li className="nav-item">
  <Link to="/Categories" className="innernav">Categories</Link>
  </li>
  <li className="nav-item">
  <Link to="/Admin" className="innernav">Admin User</Link>
  </li>
 
</ul>


  </div>
</nav>
</div>

  )
}

export default Home