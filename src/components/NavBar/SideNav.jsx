import React from 'react';
import './sideNav.css';
import { NavLinks } from './NavBarUtils';

function SideNav() {
  return (
    <nav className='collapse d-lg-block sidebar collapse bg-white' id="side-nav">
        <div className="position-sticky" >
            <div className="list-group list-group-flush">
              {NavLinks}
            </div>
        </div>
    </nav>
    
  )
}

export default SideNav