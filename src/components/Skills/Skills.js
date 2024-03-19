import React, { useState } from 'react'
import "./style.css"
import html from "../assets/skills/html.png"
import css from "../assets/skills/css-3.png"
import js from "../assets/skills/js.png"
import react from "../assets/skills/react.png"
import node from "../assets/skills/Nodejs.png"
import express from "../assets/skills/Expressjs.png"
import mongo from "../assets/skills/MongoDB.png"
import postGress from "../assets/skills/Postgresql.png"
import postman from "../assets/skills/Postman.png"
import git from "../assets/skills/Git.png"
function Skills() {

  const [isVisible, setIsVisible] = useState(false);
  const handleScroll = () => {
    if (window.pageYOffset > 500) {
      setIsVisible(true);
    }
  };
  window.addEventListener('scroll', handleScroll);
  return (
    <div id="skills" className='container-skills'>
      <div style={{padding:"20px 0", width:"100%",height:"90%", display:"flex", justifyContent:"center",
    flexDirection:"column", alignItems:"center"}}>
        <h2 style={{height:"10%"}}>Skills</h2>

        <div className={isVisible? 'sk' : "sk-hidden"} style={{display:"flex" , gap:"10px", flexWrap:"wrap", width:"40%", justifyContent:"center", alignItems:"center"}}>
          <div style={{display:"flex"}}>
            <div style={{color:"#3C6E71", padding:"5px", borderRadius:"8px"}}>
              <img style={{width:"96px"}} src={html}/>
              <p style={{fontWeight:"bold", fontSize:"18px"}}>HTML</p>                
            </div>
    
            <div style={{ padding:"5px", borderRadius:"8px", }}>
              <img style={{width:"96px"}} src={css}/>
              <p style={{color:"#3C6E71", fontWeight:"bold", fontSize:"18px"}}>CSS</p>
            </div>
          </div>
            
          <div style={{display:"flex"}}>
            <div style={{ padding:"5px", borderRadius:"8px", }}>
            <img style={{width:"96px", borderRadius:"8px"}} src={js}/>
            <p style={{color:"#3C6E71", fontWeight:"bold", fontSize:"18px"}}>JavaScript</p>
            </div>

            <div style={{ padding:"5px", borderRadius:"8px", }}>
            <img style={{width:"96px"}} src={react}/>
            <p style={{color:"#3C6E71", fontWeight:"bold", fontSize:"18px"}}>React</p>
            </div>
          </div>

          <div style={{display:"flex"}}>
            <div style={{ padding:"5px", borderRadius:"8px"}}>
            <img style={{width:"96px",height:"100px", objectFit:"contain"}} src={node}/>
            <p style={{color:"#3C6E71", fontWeight:"bold", fontSize:"18px"}}>NodeJs</p>
            </div>
            <div style={{ padding:"5px", borderRadius:"8px"}}>
            <img style={{width:"96px",height:"100px", objectFit:"contain"}} src={express}/>
            <p style={{color:"#3C6E71", fontWeight:"bold", fontSize:"18px"}}>Expressjs</p>
            </div>
          </div>


          <div style={{display:"flex"}}>
            <div style={{ padding:"5px", borderRadius:"8px"}}>
            <img style={{width:"96px",height:"100px", objectFit:"contain"}} src={mongo}/>
            <p style={{color:"#3C6E71", fontWeight:"bold", fontSize:"18px"}}>MongoDB</p>
            </div>

            <div style={{ padding:"5px", borderRadius:"8px"}}>
            <img style={{width:"96px"}} src={postGress}/>
            <p style={{color:"#3C6E71", fontWeight:"bold", fontSize:"18px"}}>Postgresql</p>
            </div>
          </div>
            
          <div style={{display:"flex"}}>
            <div style={{ padding:"5px", borderRadius:"8px"}}>
            <img style={{width:"96px",height:"100px", objectFit:"contain"}} src={postman}/>
            <p style={{color:"#3C6E71", fontWeight:"bold", fontSize:"18px"}}>POSTMAN</p>
            </div>

            <div style={{ padding:"5px", borderRadius:"8px"}}>
            <img style={{width:"96px"}} src={git}/>
            <p style={{color:"#3C6E71", fontWeight:"bold", fontSize:"18px"}}>GIT</p>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Skills
