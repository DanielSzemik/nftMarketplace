import './App.css';
import TopLeftBox from './components/TopLeftBox'
import CenterBox from './components/CenterBox'
import Footer from './components/Footer'
import Background from './img/bg_1.mp4';
import About from './components/About'
import React from "react";
import { useMediaQuery } from 'react-responsive'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 882 })
    return isDesktop ? children : null
  }
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 882 })
    return isMobile ? children : null
  }

  return (
    <Router>
    <div id="Root">
      <Switch>
        <Route path ="/About">
          <About />
        </Route>
        <Route path ="/">
          <div className="App">
            <Desktop>
              <div className="background-video">
                <video className='videoTag' autoPlay loop muted>
                  <source src={Background} type='video/mp4' />
                </video>
              </div>
              <div className="video-blur"></div>
            </Desktop>
            <Mobile>
              <div className="background-video-mobile">
                  <video className='videoTag-mobile' autoPlay loop muted>
                    <source src={Background} type='video/mp4' />
                  </video>
              </div>
              <div className="video-blur"></div>
            </Mobile>

            <div className="top-left-box">
              <TopLeftBox />
            </div>
            <div className="center-box">
              <CenterBox />
            </div>
            <div className="footer">
              <Footer />
            </div>
          </div>
        </Route>


       </Switch>
    </div>
    </Router>

  );
}



export default App;
