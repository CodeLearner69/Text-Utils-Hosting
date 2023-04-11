// import './App.css';
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React,{useState} from 'react'



function App() {
  const [mode,setMode]  = useState('light');
  const [modeTxt,setModeTxt]  = useState('Enable dark mode');
  const toggleMode=()=>{
    if (mode==='light'){
      document.body.style.backgroundColor = 'grey';
      setMode('dark');
      setModeTxt('Enable light mode');
    }
    else{
      document.body.style.backgroundColor = 'white';
      
      setMode('light');
      setModeTxt('Enable dark mode');
    }
  }
  return (
    <>
      <Navbar mode = {mode} modeTxt = {modeTxt} toggleMode={toggleMode}/>
      <Textform mode = {mode}/>
      
    </>
  );
}

export default App;
