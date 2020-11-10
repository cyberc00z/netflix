import React, { useEffect, useState } from 'react';
import './Nav.css';

function Nav() {
    const [show, handleShow]=  useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                handleShow(true);

            }else handleShow(false);
            
        })
        return () => {
            window.removeEventListener("scroll");
        };
    },[]);
    return (
        <div className={`nav ${show && "nav_black"}`}>
        <img  src={ require('./download.png')} alt="Netflix Logo" className="nav_logo" />
        
            
        </div>
    )
}

export default Nav
