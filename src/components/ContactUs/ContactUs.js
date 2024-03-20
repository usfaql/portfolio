import React from 'react'
import gmail from "../assets/gmail.png"
import linkedin from "../assets/linkedin.png"
import github from '../assets/github.png'
import phone from "../assets/phone.png"
import "./style.css"
function ContactUs() {
  return (
    <div id='ContactUs'>
    <h2>Contact Me</h2>
    <h6 style={{color:"#e94f37" ,padding:"0 50px", textAlign:"center", display:"flex",justifyContent:"center", alignItems:"center"}}>You have a new project Contact me now on your new project.</h6>
    <div className="contact-div">
      <div style={{display:"flex", textAlign:"center", alignItems:"center", gap:"5px"}}>
        <img style={{width:"24px"}} src={gmail}/>
        <a style={{color:"#f6f7eb", cursor:"pointer", textDecoration:"none", fontWeight:"bold"}} href='mailto:usfaql@gmail.com'>usfaql@gmail.com</a>
      </div>
      <div style={{display:"flex", textAlign:"center", alignItems:"center", gap:"5px"}}>
        <img style={{width:"24px"}} src={linkedin}/>
        <a style={{color:"#f6f7eb", cursor:"pointer", textDecoration:"none", fontWeight:"bold"}} href='https://www.linkedin.com/in/yousefabuaqel'>YousefAbuaqel</a>
      </div>
      <div style={{display:"flex", textAlign:"center", alignItems:"center", gap:"5px"}}>
        <img style={{width:"24px"}} src={github}/>
        <a style={{color:"#f6f7eb", cursor:"pointer", textDecoration:"none" , fontWeight:"bold"}} href='https://github.com/usfaql'>usfaql</a>
      </div>
      <div style={{display:"flex", textAlign:"center", alignItems:"center", gap:"5px"}}>
      <img style={{width:"24px"}} src={phone}/>
        <a style={{color:"#f6f7eb", cursor:"pointer", textDecoration:"none", fontWeight:"bold"}} href='tel:+962789991280'>+962789991280</a>
      </div>
    </div>
    </div>
    
  )
}

export default ContactUs
