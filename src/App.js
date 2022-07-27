import './App.css';
import TopLeftBox from './components/TopLeftBox'
import CenterBox from './components/CenterBox'
import Footer from './components/Footer'
import Background from './img/bg_1.mp4';

function App() {
  return (
    <div id="Root">
      <div className="App">
        <div className="background-video">
          <video className='videoTag' autoPlay loop muted>
              <source src={Background} type='video/mp4' />
          </video>
        </div>
        <div className="video-blur"></div>

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
    </div>
  );
}

export default App;
