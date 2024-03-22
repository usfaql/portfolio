import React from 'react'
import './style.css'
import me from '../assets/Profile.png';
import imgHtml from '../assets/skills/html.png'
import imgCss from '../assets/skills/css-3.png'
import imgExpress from '../assets/skills/Expressjs.png'
import imgGit from '../assets/skills/Git.png'
import imgJs from '../assets/skills/js.png'
import imgMongoDB from '../assets/skills/MongoDB.png'
import imgNodeJs from '../assets/skills/Nodejs.png'
import imgPostgreSQL from '../assets/skills/Postgresql.png'
import imgPostman from '../assets/skills/Postman.png'
import imgReact from '../assets/skills/react.png'
import gmail from "../assets/gmail.png"
import linkedIn from "../assets/linkedin.png"
import gitGu from "../assets/github.png"
import phone from "../assets/phone.png"

function LeftSide() {
 
  return (
    <div className='container-page'>
      <div className='container-card-one'>

        <div className='card-me'>
        
        <div className='container-image'>
          <img className='image-me' src={me}/>
        </div>
        <div className='container-me'>
          <h5 className='p'>A WEB DEVELOPER</h5>
          <h1 className='name'>Yousef Abuaqel.</h1>
          <p className='p'>I am a full-stack developer with a passion for creating innovative web solutions.</p>
        </div>

        </div>


        <div className='right-card'>
        <div className='news-bar'>
        If there a will, there is a way
        </div>

        <div className='container-two-card'>
          <div className='card-credentials cont'>
          <img style={{maxWidth:"100%", margin:"auto auto 16px auto"}} src='https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/sign.png'/>

            <div className='container-action-go'>
              <div className='container-action'>
                <h5  style={{fontSize:"12px", textTransform:"uppercase", color:"#BCBCBC", opacity:"0.7", letterSpacing:"1.1px"}}>More ABOUT ME</h5>
                <h1 className='name' style={{fontSize:"20px", fontWeight:"500px"}}>Credentials</h1>
              </div>
              <div className='container-go'>
              <img src='https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon.svg'/>
              </div>
            </div>
          </div>
    
          <div className='card-credentials cont'>
          <img style={{maxWidth:"100%", margin:"auto auto 16px auto"}} src='https://wpriverthemes.com/gridx/wp-content/uploads/2023/04/my-works.png'/>

            <div className='container-action-go'>
              <div className='container-action'>
                <h5  style={{fontSize:"12px", textTransform:"uppercase", color:"#BCBCBC", opacity:"0.7", letterSpacing:"1.1px"}}>SHOWCASE</h5>
                <h1 className='name' style={{fontSize:"20px", fontWeight:"500px"}}>Projects</h1>
              </div>
              <div className='container-go'>
              <img src='https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon.svg'/>
              </div>
            </div>
          </div>

        </div>

        
        </div>
        
      </div>

    <div className='container-card-two'>

      <div className='container-skills'>
        <div className='container-skills-image'>
          <img className='skills-images' src={imgReact} />
          <img className='skills-images' src={imgHtml} />
          <img className='skills-images' src={imgCss} />
          <img className='skills-images' src={imgJs} style={{borderRadius:"4px"}}/>
          <img className='skills-images' src={imgNodeJs} style={{background:"white", padding:"5px", borderRadius:"4px"}} />
          <div className='skills-images'>ExpressJs</div>
          <img className='skills-images' src={imgPostgreSQL} />
          <img className='skills-images dv' src={imgMongoDB} style={{background:"white", padding:"5px", borderRadius:"4px"}}/>
          <img className='skills-images' src={imgGit} />
          <img className='skills-images dv' src={imgPostman} />
        </div>
      
      </div>

      <div className='container-contact'>
      <div style={{display:"flex", justifyContent:"center", gap:"14px"}}>
        <img className='skills-images' src={gmail} style={{width:"64px", cursor:"pointer"}}/>
        <img className='skills-images' src={linkedIn} style={{width:"64px", cursor:"pointer"}}/>
      </div>
      <div style={{display:"flex", justifyContent:"center", gap:"14px"}}>
        <img className='skills-images' src={gitGu} style={{width:"64px", cursor:"pointer"}}/>
        <img className='skills-images' src={phone} style={{width:"64px", cursor:"pointer"}}/>
      </div>
      </div>

    </div>
      
    <div className='container-card-three'>

      <div className='container-contact-let cont'>
      <div style={{display:"flex", justifyContent:"center", gap:"14px", flexDirection:"column", textAlign:"start", fontSize:"32px"}}>
        <h2 style={{display:"block"}}>Let's</h2>
        <h2 style={{display:"block"}}>work <span style={{color:"#5b78f6"}}>together.</span></h2>
      </div>
      <div className='container-go'>
              <img src='https://wpriverthemes.com/gridx/wp-content/themes/gridx/assets/images/icon.svg'/>
              </div>
      </div>

    </div>
  </div>
  )
}

export default LeftSide
