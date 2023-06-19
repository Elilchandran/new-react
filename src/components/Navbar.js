import React from 'react';
import Airbnb from './Airbnb .png'
export default function Navbar(){
    return(
            <nav>
            <img src={Airbnb} alt="logo" className="nav-logo" />
        </nav>        
    );
}