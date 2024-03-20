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
      <div className='center-info'>
      <div className='container-info'>
        <div style={{height:"40%"}}>
        <img src={me} style={{width :"30%",height:"30%", borderRadius:"100%"}}/>
        </div>
        <div style={{height:"25%", display:"flex", flexDirection:"column", justifyContent:"center"}}>
        <div style={{display:"flex", textAlign:"center", alignItems:"center", justifyContent:"center"}}>
          <h4 className='hi'>Hi! <span style={{color:"#f6f7eb"}}>My name is </span> Yousef Abuaqel</h4>
        </div>
        
        <div  style={{padding:"25px", color:"#393e41", display:"flex", justifyContent:"center", alignItems:"center" }} >
          <p className="typing-effect" style={{fontSize:"18px",textAlign:"start", fontWeight:"500"}}>I'm a passionate <span style={{color:'#e94f37', fontWeight:"bold"}}>full-stack developer</span> with expertise in building scalable and efficient web applications. My tech stack includes React.js for the frontend, Node.js with Express.js for the backend, and MongoDB for data storage. I also have skills in JavaScript, HTML, and CSS.</p>
        </div>
        </div>
        
        <button className='contact-btn' onClick={scrollToBottom}>Contact Me</button>
        
      </div>
      </div>
      

    </div>
  )
}

export default LeftSide
