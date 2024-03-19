import "./App.css";
import LeftSide from "./components/LeftSide/LeftSide";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Project/Projects";
import ContactUs from "./components/ContactUs/ContactUs.js";
import Navbar from "./components/Navbar/Navbar.js";
import { useState } from "react";
function App() {

  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleScroll = () => {
    if (window.pageYOffset > 650) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  window.addEventListener('scroll', handleScroll);

  return (
    <div className="App">
      <Navbar/>
      <LeftSide/>
      <Projects/>

      <ContactUs/>
      <button className={`goTop`} style={isVisible? {display:"block"} : {display:"none"}} onClick={scrollToTop}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"/>
      </svg>
      </button>
      
    </div>
  );
}

export default App;
