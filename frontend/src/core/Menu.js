import React, { Fragment } from "react";
import { Link} from "react-router-dom";

import {  isAuthenticated } from "../auth";

const handlePageChange = () => {
    
}

const Menu = () => {
  return (
    <div>
      <ul className="nav nav-tabs bg-dark" >
        <li className="nav-item" >
          <Link className="nav-link"  to="/" style ={{color: "#fffef2"}}>
            <h3>Home</h3>
          </Link>
        </li>
        
        {!isAuthenticated() && (
          <Fragment>
            <li className="nav-item">
              <Link className="nav-link" to="/signup" style ={{color: "#fffef2"}} >
                <h3>Signup</h3>
              </Link>
            </li>
            <li className="nav-item"> 
             <Link className="nav-link" to="/signin"  style ={{color: "#fffef2"}}>
                <h3>Signin</h3>
              </Link>
            </li>
          </Fragment>
        )}

        {isAuthenticated() && (
          <li className="nav-item">
            <span
              style=  {{cursor : "pointer"}}             
              onClick={handlePageChange}
              className="nav-link text-warning"
            >
              <h3>Sign Out</h3>
            </span>
          </li>
        )}

      </ul>
    </div>
  );
};

export default Menu;
