// import './App.css';
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React,{useState} from 'react'



function App() {
  const [mode,setMode]  = useState('light');
  const [modeTxt,setModeTxt]  = useState('Enable dark mode');
  const [alert,setAlert]  = useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode=()=>{
    if (mode==='light'){
      document.body.style.backgroundColor = '#383838';
      setMode('dark');
      setModeTxt('Enable light mode');
      showAlert("Dark mode has been enabled","success")
    }
    else{
      document.body.style.backgroundColor = 'white';
      setMode('light');
      setModeTxt('Enable dark mode');
      showAlert("Light mode has been enabled","success")
    }
  }
  return (
    <>
      <Navbar mode = {mode} modeTxt = {modeTxt} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <Textform mode= {mode} showAlert= {showAlert} />
      
    </>
  );
}

export default App;
