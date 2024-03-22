import "./App.css";
import LeftSide from "./components/LeftSide/LeftSide";
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
    </div>
  );
}

export default App;
