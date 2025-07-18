import './App.css';
import './index.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About'
import React,{ useState } from 'react';
import Alert from './components/Alert';

//import {
  //BrowserRouter as Router,
  //Switch,
  //Route
//} from "react-router-dom";


function App() {
  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);

  const  showAlert =(message,type)=>{
        setAlert({
          msg: message,
          type: type
        })
       setTimeout(() => {
        setAlert(false);
       }, 3000);
  }
  const toggleMode =() =>{
        if(mode === 'light'){
          setMode('dark');
          document.body.style.backgroundColor ='#12385e';
          showAlert("Dark mode has been enabled.","Success");
          document.title = 'TextUtils . Dark Mode';
        setInterval(() => {
            document.title = 'TextUtils is Amazing Mode';
          }, 2500);
        setInterval(() => {
            document.title = 'Install TextUtils Now';
          }, 2000);

        }else{
          setMode('light');
          document.body.style.backgroundColor ='white';
          showAlert("Light mode has been enabled.","Success");
          document.title = 'TextUtils . Light Mode';

        }
      }
  const yellowMode =() =>{
        if(mode === 'light'){
          setMode('dark');
          document.body.style.backgroundColor ='#3B4207';
          showAlert("Dark mode has been enabled.","Success");

        }else{
          setMode('light');
          document.body.style.backgroundColor ='white';
          showAlert("Light mode has been enabled.","Success");
        }
      }
  return (
  <>
  {/*<Router>*/}
    <Navbar title="TextUtils" About="About" mode={mode} toggleMode={toggleMode} yellowMode={yellowMode}/>
    <Alert alert={alert}/>
    <dev className="center">
    {/*<Switch>*/}
          {/*<Route exact path="/about">
            <About />
            </Route>*/}
          {/*<Route exact path="/">*/}
          <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/> 
          {/*</dev></Route>*/}
    {/*</Switch>*/}
    </dev>
     {/*</Router> */} 
  </>
  );
}

export default App;