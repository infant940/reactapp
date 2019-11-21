import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component{
  render(){
    return (
      <div>
        <nav className="blue darken-3">
          <div className="nav-wrapper">
            <h1>REACT APP</h1>
            <ul className="right hide-on-small-only">
              <li><Link to="/meetups/add"><i className="fa fa-users"></i> ADD APPKEY</Link></li>         
            </ul>
            <ul className="side-nav" id="main-menu">
            <li><Link to="/meetups"><i className="fa fa-users"></i> VIEW APPKEY</Link></li>  
            <li><Link to="/edit"><i className="fa fa-users"></i> UPDATE APPKEY</Link></li>  
            <li><Link to="/key"><i className="fa fa-users"></i> REMOVE APPKEY</Link></li> 
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar;