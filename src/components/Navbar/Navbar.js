import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css";
function Navbar() {
  return (
    <div className='contanier-nav-bar' id='top'>
        <div className='child-nav-bar'>
            <div style={{display:"flex", justifyContent:"center", alignItems:"center", textAlign:"center"}}>
                <p className='title'>Yousef Abuaqel</p>
            </div>
            <div className='continar-btn-nav'>
                <a href="#project">
                    <button className='btn-nav'>Project</button>
                </a>
                
            </div>
        </div>

    </div>
  )
}

export default Navbar
