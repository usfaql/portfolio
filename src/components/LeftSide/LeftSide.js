import React from 'react'
import './style.css'
import me from '../assets/Profile.jpg';
import ProgressBar from 'react-bootstrap/ProgressBar';
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

      <div className='container-skillss'>
      <h3>Skills</h3>
      <div style={{width:"100%", display:"flex", flexDirection:"row",flexWrap:"wrap",overflowY:"hidden", gap:"10px", textAlign:"start"}}>
        
        
        
        
        <div style={{width:"100%", display:"flex" , justifyContent:"space-between"}}>
        <div style={{width:"49%"}}>
          <span>HTML</span>
          <ProgressBar variant="warning" now={96} label={`96%`}/>
        </div>
        <div style={{width:"49%"}}>
        <span>CSS</span>
        <ProgressBar variant="warning" now={85} label={`85%`}/>
        </div>
        </div>
        
        <div style={{width:"100%", display:"flex" , justifyContent:"space-between"}}>
          <div style={{width:"49%"}}>
        <span>JS</span>
        <ProgressBar variant="info" now={92} label={`92%`}/>
        </div>
        <div style={{width:"49%"}}>
        <span>React</span>
        <ProgressBar variant="warning" now={93} label={`93%`}/>
        </div>   
        </div>
             


        <div style={{width:"100%", display:"flex" , justifyContent:"space-between"}}>
          <div style={{width:"49%"}}>
        <span>NodeJs</span>
        <ProgressBar variant="warning" now={97} label={`97%`}/>
        </div>        
        <div style={{width:"49%"}}>
        <span>ExpressJs</span>
        <ProgressBar variant="warning" now={98} label={`98%`}/>
        </div> 
        </div>
        

        <div style={{width:"100%", display:"flex" , justifyContent:"space-between"}}>
          <div style={{width:"49%"}}>
        <span>MongoDB</span>
        <ProgressBar variant="warning" now={94} label={`94%`}/>
        </div>        
        <div style={{width:"49%"}}>
        <span>Postgresql</span>
        <ProgressBar variant="warning" now={90} label={`90%`}/>
        </div>
        </div>
        

        <div style={{width:"100%", display:"flex" , justifyContent:"space-between"}}>
          <div style={{width:"49%"}}>
        <span>POSTMAN</span>
        <ProgressBar variant="warning" now={99} label={`99%`}/>
        </div>
        <div style={{width:"49%"}}>
        <span>GIT</span>
        <ProgressBar variant="warning" now={97} label={`97%`}/>
        </div>
        </div>
        
        
        
        
    </div>
      </div>
      </div>
      

    </div>
  )
}

export default LeftSide
