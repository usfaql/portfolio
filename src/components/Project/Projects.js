import React, { useState } from 'react'
import './style.css'
import 'bootstrap/dist/css/bootstrap.css'; 
import Carousel from 'react-bootstrap/Carousel'; 
import loginNutri from '../assets/NuriFit/Login.png';
import registerNutri from '../assets/NuriFit/Register.png';
import myGymNutri from '../assets/NuriFit/mygym.png';
import myPrivateNutri from '../assets/NuriFit/myprivate.png';
import recipeNutri from '../assets/NuriFit/recipes.png';
import oneRecipeNutri from '../assets/NuriFit/oneRecipes.png';
import allgymNutri from '../assets/NuriFit/allgymbyuser.png';

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
    <h2 id='project' style={{height:"20%"}}>Projects</h2>
    <div className='conter-project'>
      <h3 style={{color:"#3C6E71" , paddingLeft:"5px", margin:"0"}}>Friendly (Solo)</h3>
      <p style={{ textAlign:"start", fontWeight:"500", paddingLeft:"5px", margin:"0"}}>A social networking platform that enables users to easily publish their posts, whether they are texts, photos, or short videos. The platform alows active interaction where users can interact with each other's posts and express their opinions and interests</p>

      <div style={{ display: 'block', width: '100%', padding: "5px", borderRadius:"8px" }}> 
      <Carousel> 
        <Carousel.Item interval={2500}> 
          <img 
            className="d-block w-100"
            src={loginNutri}
            alt="Login Page"
            style={{borderRadius:"8px"}}
          /> 
        </Carousel.Item> 
        <Carousel.Item interval={2500}> 
          <img 
            className="d-block w-100"
            src={registerNutri}
            alt="Register Page"
            style={{borderRadius:"8px"}}
          /> 
        </Carousel.Item> 

        <Carousel.Item interval={2500}> 
          <img 
            className="d-block w-100"
            src={myGymNutri}
            alt="My Gym Joined & Created"
            style={{borderRadius:"8px"}}
          /> 
        </Carousel.Item> 

        <Carousel.Item interval={2500}> 
          <img 
            className="d-block w-100"
            src={allgymNutri}
            alt="All Gyms for All"
            style={{borderRadius:"8px"}}
          /> 
        </Carousel.Item> 
        <Carousel.Item interval={2500}> 
          <img 
            className="d-block w-100"
            src={myPrivateNutri}
            alt="Private for Coach"
            style={{borderRadius:"8px"}}
          /> 
        </Carousel.Item> 


        <Carousel.Item interval={2500}> 
          <img 
            className="d-block w-100"
            src={recipeNutri}
            alt="Recipes for All"
            style={{borderRadius:"8px"}}
          /> 
        </Carousel.Item> 


        <Carousel.Item interval={2500}> 
          <img 
            className="d-block w-100"
            src={oneRecipeNutri}
            alt="details for recipe"
            style={{borderRadius:"8px"}}
          />
        </Carousel.Item> 
        </Carousel> 


      </div> 
        <p style={{textAlign:"start", paddingTop:"10px", fontWeight:"bold", margin:"0", paddingLeft:"5px"}}>Technologies used</p>
        <div style={{display:"flex", justifyContent:"start", overflowX:"auto", paddingLeft:"5px"}}>
        
        <ul style={{display:"flex", textAlign:"start", flexDirection:"row", paddingTop:"10px",flexWrap:"wrap", paddingLeft:"25px", listStyle:"none", gap:"10px",paddingLeft:"0",overflowY:"hidden", justifyContent:"start", alignItems:"start"}}>
        <li className='list-front' style={{color:'#3C6E71', fontWeight:"bold",backgroundColor:"transparent", border:"1px solid #3C6E71"}}>FrontEnd</li>
        <li className='list-front'>React</li>
        <li className='list-front'>JavaScript</li>
        <li className='list-front'>HTML</li>
        <li className='list-front'>CSS</li>
        <li className='list-front' style={{color:'#1A181B', fontWeight:"bold",backgroundColor:"transparent", border:"1px solid #1A181B"}}>Backend</li>
        <li className='list-backend'>NodeJs</li>
        <li className='list-backend' >ExpressJs</li>
        <li className='list-backend'>MongoDB</li>
        </ul>

        </div>
        <div style={{display:"flex", justifyContent:"center"}}>
        
        <a href='https://github.com/C9-usfaql/MERAKI_Academy_Project_4' target='_blank' className='btnS'>Preview</a>
        <a href='https://github.com/C9-usfaql/MERAKI_Academy_Project_4' target='_blank' className='btnS'>Source Code</a>
        </div>
        
      </div>

      <div className='conter-project'>
      <h3 style={{color:"#3C6E71", paddingLeft:"5px", margin:"0"}}>NutriFit (Team)</h3>
        <p style={{ textAlign:"start", fontWeight:"500",paddingLeft:"5px", margin:"0"}}> a health electronic platform that offers three core services:
        <br/>1- Providing users with healthy meal options along with detailed nutritional
        information for each dish.
        <br/>2- Facilitating direct communication between users and their personal
        trainers. This allows trainers to tailor meal plans and exercise routines to the
        user's specific needs and body type.
        <br/> <span style={{paddingTop:"5px"}}>3- Empowering coaches to deliver targeted information to groups of
        individuals through electronic gym.</span></p>

        <div style={{ display: 'block', width: '100%', padding: "5px", borderRadius:"8px" }}> 
      <Carousel> 
        <Carousel.Item interval={2500}> 
          <img 
            className="d-block w-100"
            src={loginNutri}
            alt="Login Page"
            style={{borderRadius:"8px"}}
          /> 
        </Carousel.Item> 
        <Carousel.Item interval={2500}> 
          <img 
            className="d-block w-100"
            src={registerNutri}
            alt="Register Page"
            style={{borderRadius:"8px"}}
          /> 
        </Carousel.Item> 

        <Carousel.Item interval={2500}> 
          <img 
            className="d-block w-100"
            src={myGymNutri}
            alt="My Gym Joined & Created"
            style={{borderRadius:"8px"}}
          /> 
        </Carousel.Item> 

        <Carousel.Item interval={2500}> 
          <img 
            className="d-block w-100"
            src={allgymNutri}
            alt="All Gyms for All"
            style={{borderRadius:"8px"}}
          /> 
        </Carousel.Item> 
        <Carousel.Item interval={2500}> 
          <img 
            className="d-block w-100"
            src={myPrivateNutri}
            alt="Private for Coach"
            style={{borderRadius:"8px"}}
          /> 
        </Carousel.Item> 


        <Carousel.Item interval={2500}> 
          <img 
            className="d-block w-100"
            src={recipeNutri}
            alt="Recipes for All"
            style={{borderRadius:"8px"}}
          /> 
        </Carousel.Item> 


        <Carousel.Item interval={2500}> 
          <img 
            className="d-block w-100"
            src={oneRecipeNutri}
            alt="details for recipe"
            style={{borderRadius:"8px"}}
          /> 
        </Carousel.Item> 
        </Carousel> 


      </div> 
        <p style={{textAlign:"start", paddingTop:"10px", fontWeight:"bold", margin:"0", paddingLeft:"5px"}}>Technologies used</p>
        <div style={{display:"flex", justifyContent:"start", overflowX:"auto", paddingLeft:"5px"}}>
        
        <ul style={{display:"flex", textAlign:"start", flexDirection:"row", paddingTop:"10px",flexWrap:"wrap", paddingLeft:"25px", listStyle:"none", gap:"10px",paddingLeft:"0",overflowY:"hidden", justifyContent:"start", alignItems:"start"}}>
        <li className='list-front' style={{color:'#3C6E71', fontWeight:"bold",backgroundColor:"transparent", border:"1px solid #3C6E71"}}>FrontEnd</li>
        <li className='list-front'>React</li>
        <li className='list-front'>Redux</li>
        <li className='list-front'>socket.io-client</li>
        <li className='list-front'>JavaScript</li>
        <li className='list-front'>HTML</li>
        <li className='list-front'>CSS</li>
        <li className='list-front' style={{color:'#1A181B', fontWeight:"bold",backgroundColor:"transparent", border:"1px solid #1A181B"}}>Backend</li>
        <li className='list-backend'>NodeJs</li>
        <li className='list-backend' >ExpressJs</li>
        <li className='list-backend'>socket.io</li>
        <li className='list-backend'>MongoDB</li>
        <li className='list-backend'>Postgresql</li>
        </ul>

        </div>
        <div style={{display:"flex", justifyContent:"center"}}>
        
        <a href='https://github.com/C9-usfaql/MERAKI_Academy_Project_4' target='_blank' className='btnS'>Preview</a>
        <a href='https://github.com/C9-usfaql/MERAKI_Academy_Project_4' target='_blank' className='btnS'>Source Code</a>
        </div>
      </div>
      
    </div>
    
  )
}

export default Projects
