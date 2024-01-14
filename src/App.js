import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';

//Routing, remember this importing syntax

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  // NOTES:-

  //Whatever changes we do, we do in App.js

  // JSX starts, basically js disguised as html

  //changes:- class-> classNameName, for-> htmlFor, onclick-> onClick, tabindex-> tabIndex, camelCase for all attributes

  // we've to return a single element, so we wrap everything in a div

  // <></> is a jsx fragment, it's a wrapper that doesn't render anything, it's just a wrapper

  // anything we put in {} inside jsx will be treated as javascript

  //this type of syntax is known as function based component

  // we need a closing tag in every tag or we'll get an error

  //node module folder can be installed again by "npm install" command

  //any component name must start from a capital letter

  //eg. 'title' is a props, i.e props are the variables that we give to our components

  //props are Read-Only

  //To set the state of navbar used mode={} inside navbar tag

  //To use toggleMode function use toggleMode={toggleMode} i.e basically we can camelcase name any tag-property we want

  //inside setAlert() passed an pbject with different properties

  //useState('light') means by default light mode is used, set mode is a function that is runs and makes changes to the state varible "mode" that is passed as a prop in our component which makes the req. changes to our component. Here, useState() is known as "React-Hook". Remember that syntax, also setMode() is a function passed wth the required value, according to our toggleMode() function.

// Remember:- "document.body.style.backgroundColor = 'white';" is a js styling syntax.

//Remember the syntax for routing. This routing syntax is only applicable for a specific version of react-router-dom(5.3.0). Can be installed using:- "npm install react-router-dom@5.3.0"

// use "exact path" in react routing

//To make your webapp into a production build that can be deployed through a static server, use command "npm run build"

//Go to that build folder and that can be deployed

  const [mode, setMode] = useState('light'); //wether dark mode is enabled or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=> {
    setAlert({
      msg: message,
      type: type
    })
  }

  const toggleMode = ()=> {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
    <>
    <Router>
          <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>

          <Alert alert={alert}/>

          <div className="container my-3">
            <Switch>
                  <Route exact path="/about">
                    <About/>
                  </Route>
                  <Route exact path="/">
                        <TextForm heading="Enter the text to analyze" mode={mode}/>
                  </Route>
            </Switch>
          </div>
    </Router>
    </>

  );
}

export default App;
