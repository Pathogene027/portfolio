import './css/app.css';
import Social from './social/js/social.js'
import Welcome from './welcome/welcome.js';
import Animation from './animation/js/animation.js'
import Home from './home-button/home.js'
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutMe from './welcome/about/about.js'
function App() {
  const [clicked, setClicked] = useState('')
  const [clickedAnimationEffect, setClickedAnimationEffect] = useState('')

  useEffect(()=>{
    setClickedAnimationEffect(clicked)
    console.log(clicked)
  }, [clicked])
  
  return (
    <div className="App">
      <div className='socialMedia'>
        {clicked=== 'clicked'? <Home/> :<Social/>}
      </div>
      <ul className='nav-animation'>
        <li className='navigation'>
        <Welcome clicked= {clicked} setClicked={setClicked}/>
        </li>
        <li className='animation-wrapper'>
        <Animation clicked={clickedAnimationEffect}/>
        </li>
        <Router>
          <Routes>
            <Route path='/About' element={<AboutMe/>}/>
          </Routes>
        </Router>
        
        <li className='render'>

        </li>
      </ul>
      
    </div>
  );
}

export default App;
