
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';// we remove this beacuse routing not support when deploye using github
import Foter from './components/Foter';
function App() {
  const [mode, setMode] = useState('secondary'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'secondary'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
    }
    else{
      setMode('secondary');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }
  return (
   <>
    <Navbar title="TextAnalyzer" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <br></br>
    <TextForm showAlert={showAlert} heading="Enter  Your Text to Analysis" mode={mode}/>
    </>
   
  );
}

export default App;
