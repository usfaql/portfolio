import React, { useState } from 'react'
import './style.css'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { cb, coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
function Projects() {
  const [runCode, setRunCode] = useState(false);

  const [showProjects, setShowProjects] = useState(false);
  const [showCode, setShowCode] = useState(false);

  const handleRunCode = () => {
  setShowCode(true);
  setTimeout(() => setShowProjects(true)
  
  , 1000); // تأخير ظهور container-projects بعد اختفاء code-anim
  };
  const codeString = `
  <div>
  <h2>Projects</h2>
  <div>
    <div>
      <h3>Friendly</h3>
        <p>Solo</p>
        <p>A social networking platform that enables users to easily publish their posts,
        whether they are texts, photos, or short videos.
        The platform allows active interaction where users can interact 
        with each other's posts and express their opinions and interests</p>
        <p>Technologies used</p>
        <div>
          <ul>
          <span>FrontEnd</span>
          <li>React</li>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS</li>
          </ul>

          <ul>
              <span>Backend</span>
          <li>NodeJs</li>
          <li>ExpressJs</li>
          <li>MongoDB (NoSQL)</li>
          <li>Postgresql (SQL)</li>
          </ul>
        </div>
      <div>
        <a>Preview</a>
        <a>Source Code</a>
      </div>
    </div>
  <div>
    <h3>NutriFit</h3>
    <p>Team</p>
    <p> a health electronic platform that offers three core services:
    <br/>1- Providing users with healthy meal options along with detailed nutritional
    information for each dish.
    <br/>2- Facilitating direct communication between users and their personal
    trainers. This allows trainers to tailor meal plans and exercise routines to the
    user's specific needs and body type.
    <br/> <span>3- Empowering coaches to deliver targeted information to groups of
    individuals through electronic gym.</span></p>

    <p>Technologies used</p>
    <div>
        
    <ul>
    <span>FrontEnd</span>
    <li>React</li>
    <li>JavaScript</li>
    <li>HTML</li>
    <li>CSS</li>
    <li>Redux</li>
    </ul>

    <ul>
    <span>Backend</span>
    <li>NodeJs</li>
    <li>ExpressJs</li>
    <li>MongoDB (NoSQL)</li>
    <li>Postgresql (SQL)</li>
    </ul>
    
  </div>
  <div>
    <a>Preview</a>
    <a>Source Code</a>
  </div>
  </div>
</div>
  
</div>`
  return (
    <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
    <h2 id='project' style={{height:"20%"}}>Projects</h2>
    <div style={{display:"flex", justifyContent:"center"}}>
    
    <div id='project' className={showProjects ? 'container-projects' : "no-container-projects"}>
    
    <div className='con-project' style={{display:"flex", justifyContent:"space-between", height:"80%"}}>

    <div className='conter-project'>
      <h3 style={{color:"#3C6E71"}}>Friendly</h3>
        <p>Solo</p>
        <p style={{color:"#3C6E71", textAlign:"start", paddingTop:"10px"}}>A social networking platform that enables users to easily publish their posts, whether they are texts, photos, or short videos. The platform alows active interaction where users can interact with each other's posts and express their opinions and interests</p>

        <p style={{textAlign:"start", paddingTop:"10px", fontWeight:"bold"}}>Technologies used</p>
        <div style={{display:"flex", justifyContent:"center"}}>
            
        <ul style={{width:"50%", display:"flex", textAlign:"start", flexDirection:"column", paddingTop:"10px", paddingRight:"25px", paddingLeft:"25px"}}>
        <span style={{color:'#3C6E71', fontWeight:"bold"}}>FrontEnd</span>
        <li>React</li>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
        </ul>

        <ul style={{width:"50%", display:"flex", textAlign:"start", flexDirection:"column", paddingTop:"10px"}}>
            <span style={{color:'#3C6E71', fontWeight:"bold"}}>Backend</span>
        <li>NodeJs</li>
        <li>ExpressJs</li>
        <li>MongoDB (NoSQL)</li>
        <li>Postgresql (SQL)</li>
        </ul>
        
        </div>
        <div style={{display:"flex", justifyContent:"space-between"}}>
        
        <a href='https://github.com/C9-usfaql/MERAKI_Academy_Project_4' target='_blank' className='btn'>Preview</a>
        <a href='https://github.com/C9-usfaql/MERAKI_Academy_Project_4' target='_blank' className='btn'>Source Code</a>
        </div>
        
      </div>

      <div className='conter-project'>
      <h3 style={{color:"#3C6E71"}}>NutriFit</h3>
        <p>Team</p>
        <p style={{color:"#3C6E71", textAlign:"start", paddingTop:"10px"}}> a health electronic platform that offers three core services:
        <br/>1- Providing users with healthy meal options along with detailed nutritional
        information for each dish.
        <br/>2- Facilitating direct communication between users and their personal
        trainers. This allows trainers to tailor meal plans and exercise routines to the
        user's specific needs and body type.
        <br/> <span style={{paddingTop:"5px"}}>3- Empowering coaches to deliver targeted information to groups of
        individuals through electronic gym.</span></p>

        <p style={{textAlign:"start", paddingTop:"10px", fontWeight:"bold"}}>Technologies used</p>
        <div style={{display:"flex", justifyContent:"center"}}>
            
        <ul style={{width:"50%", display:"flex", textAlign:"start", flexDirection:"column", paddingTop:"10px" , paddingRight:"25px", paddingLeft:"25px"}}>
        <span style={{color:'#3C6E71', fontWeight:"bold"}}>FrontEnd</span>
        <li>React</li>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Redux</li>
        </ul>

        <ul style={{width:"50%", display:"flex", textAlign:"start", flexDirection:"column", paddingTop:"10px"}}>
            <span style={{color:'#3C6E71', fontWeight:"bold"}}>Backend</span>
        <li>NodeJs</li>
        <li>ExpressJs</li>
        <li>MongoDB (NoSQL)</li>
        <li>Postgresql (SQL)</li>
        </ul>
        
        </div>
        <div style={{display:"flex", justifyContent:"space-between"}}>
        
        <a href='https://github.com/C9-usfaql/MERAKI_Academy_Project_4' target='_blank' className='btn'>Preview</a>
        <a href='https://github.com/C9-usfaql/MERAKI_Academy_Project_4' target='_blank' className='btn'>Source Code</a>
        </div>
      </div>
    </div>
      
    </div>
    

    </div>
    <div className={showCode ? 'code-anim' : 'code'}>
      <p style={{color:"#D64045"}}>Please run the code from below to show the projects</p>
    <SyntaxHighlighter language="html" style={cb} className="code-view">
        {codeString.trim()}
      </SyntaxHighlighter>
      <div style={{display:"flex", justifyContent:"end"}}>
        <button className='run-code' onClick={handleRunCode}>
        <svg svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
        <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
        </svg>
        Run Code
        </button>
      </div>
    </div>
    </div>

    
  )
}

export default Projects
