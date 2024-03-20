import React, { useState } from 'react'
import './style.css'
import 'bootstrap/dist/css/bootstrap.css'; 
import myGymNutri from '../assets/NuriFit/mygym.png';
import freindly from "../assets/friendly.png";
function Projects() {
  const [runCode, setRunCode] = useState(false);

  const [showProjects, setShowProjects] = useState(false);
  const [showCode, setShowCode] = useState(false);

  const handleRunCode = () => {
  setShowCode(true);
  setTimeout(() => setShowProjects(true)
  
  , 1000);
  };

  return (    
    <div id='project' className='container-projects'>
    <h2 id='project'>Projects</h2>
    <div className='div-project'>

    <div className='cont-info-project'>

    <div className='cont-image'>
    <img src={myGymNutri} className='image-project'/>
    </div>
    <div className='cont-info'>
      <h4 className='name-project'>NutriFit (Team)</h4>
      <p className='info-p'>
      a health electronic platform that offers three core services: <br/>
1- Providing users with healthy meal options along with detailed nutritional information for each dish.
<br/>2- Facilitating direct communication between users and their personal trainers. This allows trainers to tailor meal plans and exercise routines to the user's specific needs and body type.
<br/>3- Empowering coaches to deliver targeted information to groups of individuals through electronic gym.
      </p>

      <div className='container-button'>
        <a>
          <button className='btn-project'>Demo</button>
        </a>
        <a>
        <button className='btn-project source'>Source Code</button>
        </a>
      </div>
    </div>
    </div>


    <div className='cont-info-project'>

      <div className='cont-image'>
        <img src={freindly} className='image-project'/>
      </div>
      <div className='cont-info'>
        <h4 className='name-project'>Friendly (Solo)</h4>
        <p className='info-p'>
        A social networking platform that enables users to easily publish their posts, whether they are texts, photos, or short videos. The platform alows active interaction where users can interact with each other's posts and express their opinions and interests</p>

        <div className='container-button'>
          <a>
            <button className='btn-project'>Demo</button>
          </a>
          <a>
          <button className='btn-project source'>Source Code</button>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
    
  )
}

export default Projects
