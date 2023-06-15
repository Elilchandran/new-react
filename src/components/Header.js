import React from 'react'
import Image from './Image.png'
function Header() {  
  return (
    <header>
      <nav className="nav">
        <img src={Image} className="nav-logo" alt="logo" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Content</li>
        </ul>
      </nav>
    </header>
  );
}


export default Header