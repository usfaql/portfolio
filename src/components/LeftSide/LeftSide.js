import React from 'react'
import './style.css'
import me from '../assets/Profile.jpg';
function LeftSide() {
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };
  return (
    <div className='left-side'>
      <div className='container-info'>
        <div style={{height:"30%"}}>
        <img src={me} style={{width :"25%",height:"25%", borderRadius:"100%"}}/>
        </div>
        <div style={{height:"25%", display:"flex", flexDirection:"column", justifyContent:"center"}}>
        <div style={{display:"flex", textAlign:"center", alignItems:"center", justifyContent:"center"}}>
          <h4 className='hi'>Hi! <span style={{color:"#1A181B"}}>My name is </span> Yousef Abuaqel</h4>
        </div>
        
        <div  style={{padding:"25px", color:"#1A181B", display:"flex", justifyContent:"center", alignItems:"center", }} >
          <p className="typing-effect" style={{fontSize:"18px",textAlign:"start"}}>I'm a passionate <span style={{color:'#3C6E71', fontWeight:"bold"}}>full-stack developer</span> with expertise in building scalable and efficient web applications. My tech stack includes React.js for the frontend, Node.js with Express.js for the backend, and MongoDB for data storage. I also have skills in JavaScript, HTML, and CSS.</p>
        </div>
        </div>
        
        <button className='contact-btn' onClick={scrollToBottom}>Contact Me</button>
        
      </div>

    </div>
  )
}

export default LeftSide
