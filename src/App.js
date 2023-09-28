
import {  useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import Alert from './component/Alert';
import About from './component/About';
import React from "react";

import {
  BrowserRouter as Router,
  
  Routes,
  Route
} from "react-router-dom";

function App() {

  const[mode,setmode]=useState('dark');
  const[alert,setAlert]=useState(null);

  const showAlert=(type, msg)=>{
    setAlert({
    type:type,
    msg:msg
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode==='light'){
      setmode('dark');
      document.querySelector("body").style.backgroundColor="#213555"
      showAlert("success","The theme has been switched to dark mode")
    }
    else{
      setmode('light');
      document.querySelector("body").style.backgroundColor="white"
      showAlert("success","The theme has been switched to light mode")
    }
  }

  
  return (
  
    <>
      
       <Router>
      <Navbar title= "Text Utils" about="About" mode={mode} toggleMode={toggleMode}/>
      
      <Alert alert={alert}/>
      
        <Routes>
      <Route exact path='/' element={
      <div className="container my-3">
          {<Textform className="container my-3" showAlert={showAlert} heading="Enter your text here:" mode={mode}  />}
        </div>} />
      <Route exact path='/about' element={<About mode={mode} />} />
    
      </Routes>
      
        
        </Router>
    </>
  );
}

export default App;
