import React, {useState} from 'react';
import {BrowserRouter as Router,Routes,Route,NavLink } from 'react-router-dom';
import Login from './Login';
import Plans from './plans';
import Home from './Home';
import ExploreNow from './ExploreNow'
export default function Navbar() {

  // menubar for navbar
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
 
  return (
    <Router>

      <nav>


<div className="d-flex justify-content-between align-items-center px-2 py-1">
<h3 className="text-warning">Animelist</h3>
<button onClick={handleClick} className="menu-bar"><i className={click ? "fas fa-times" : "fas fa-bars"}></i></button>
</div>

<div className={click ? "navlist show" : "navlist"}>

        <ul>
          <li><NavLink style={{textDecoration:'none'}}   exact to="/">Home</NavLink></li>
          <li><NavLink style={{textDecoration:'none'}}  to="/login">Login</NavLink></li>
          <li><NavLink style={{textDecoration:'none'}} to="/plans">Plans</NavLink></li>
        </ul>


</div>
        </nav>
<Routes>
  <Route exact path="/" element={<Home />}/>
  <Route path="/login" element={<Login />}/>
  <Route path="/plans" element={<Plans />}/>
  <Route path="/ExploreNow" element={<ExploreNow />}/>
</Routes>

    </Router>
  )
}
