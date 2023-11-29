import './css/app.css';
import Social from './social/js/social.js'
import Welcome from './welcome/welcome.js';
import Animation from './animation/animation.js'
function App() {
  return (
    <div className="App">
      <div className='socialMedia'>
        <Social/>
      </div>

      <ul className='nav-animation'>
        <li className='navigation'>
        <Welcome/>
        </li>
        <li className='animation-wrapper'>
        <Animation/>
        </li>
      </ul>
      
    </div>
  );
}

export default App;
