import React from 'react';
import './Navigation.css'
function Navigation() {
    return (
      <nav className="navigation">
        <ul>
          <li><a href="#">Power Tools</a></li>
          <li><a href="#">Hand Tools</a></li>
          <li><a href="#">Garden Tools</a></li>
          <li><a href="#">Cleaning Tools</a></li>
          <li><a href="#">Automotive Tools</a></li>
        </ul>
      </nav>
    );
  }
  export default Navigation;