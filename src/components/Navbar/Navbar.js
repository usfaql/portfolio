import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css";
import logo from "../assets/ya.png"
import resume from "../assets/Resume_Yousef_Abuaqel.pdf"
function Navbar() {
    const handleClick = () => {
        // تنفيذ عملية تحميل الملف
        window.open(resume, '_self');
      };
  return (
    <div className='contanier-nav-bar' id='top'>
        <div className='child-nav-bar'>
            <div style={{display:"flex", justifyContent:"start", alignItems:"center", textAlign:"center"}}>
                <img className='title' src={logo}/>
            </div>
            <div className='continar-btn-nav'>
                    <button className='btn-nav' onClick={handleClick}>Download Resume</button>

                
            </div>
        </div>

    </div>
  )
}

export default Navbar
