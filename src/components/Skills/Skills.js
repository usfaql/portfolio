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
import ProgressBar from 'react-bootstrap/ProgressBar';
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
      <div className='sk-top' style={{padding:"20px 0", width:"50%",height:"90%", display:"flex", justifyContent:"center",
        flexDirection:"column", alignItems:"center"}}>
        <h2 style={{height:"10%"}}>Skills</h2>

        <div className='sk' style={{width:"100%", display:"flex", flexDirection:"row",flexWrap:"wrap",overflowY:"hidden", gap:"10px", textAlign:"start"}}>
        <div style={{width:"100%", display:"flex" , justifyContent:"space-between"}}>
        <div style={{width:"49%"}}>
          <span>HTML</span>
          <ProgressBar now={96} label={`96%`} variant='danger' style={{backgroundColor:"#393e41"}}/>
        </div>
        <div style={{width:"49%"}}>
        <span>CSS</span>
        <ProgressBar  now={85} label={`85%`} variant='danger' style={{backgroundColor:"#393e41"}}/>
        </div>
        </div>
        
        <div style={{width:"100%", display:"flex" , justifyContent:"space-between"}}>
          <div style={{width:"49%"}}>
        <span>JS</span>
        <ProgressBar now={92} label={`92%`} variant='danger' style={{backgroundColor:"#393e41"}}/>
        </div>
        <div style={{width:"49%"}}>
        <span>React</span>
        <ProgressBar now={93} label={`93%`} variant='danger' style={{backgroundColor:"#393e41"}}/>
        </div>   
        </div>
             


        <div style={{width:"100%", display:"flex" , justifyContent:"space-between"}}>
          <div style={{width:"49%"}}>
        <span>NodeJs</span>
        <ProgressBar now={97} label={`97%`} variant='danger' style={{backgroundColor:"#393e41"}}/>
        </div>        
        <div style={{width:"49%"}}>
        <span>ExpressJs</span>
        <ProgressBar now={98} label={`98%`} variant='danger' style={{backgroundColor:"#393e41"}}/>
        </div> 
        </div>
        

        <div style={{width:"100%", display:"flex" , justifyContent:"space-between"}}>
          <div style={{width:"49%"}}>
        <span>MongoDB</span>
        <ProgressBar now={94} label={`94%`} variant='danger' style={{backgroundColor:"#393e41"}}/>
        </div>        
        <div style={{width:"49%"}}>
        <span>Postgresql</span>
        <ProgressBar now={90} label={`90%`} variant='danger' style={{backgroundColor:"#393e41"}}/>
        </div>
        </div>
        

        <div style={{width:"100%", display:"flex" , justifyContent:"space-between"}}>
          <div style={{width:"49%"}}>
        <span>POSTMAN</span>
        <ProgressBar now={99} label={`99%`} variant='danger' style={{backgroundColor:"#393e41"}}/>
        </div>
        <div style={{width:"49%"}}>
        <span>GIT</span>
        <ProgressBar now={97} label={`97%`} variant='danger' style={{backgroundColor:"#393e41"}}/>
        </div>
        </div>
        
        
        
        
    </div>
      </div>
    </div>
  )
}

export default Skills
