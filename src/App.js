import './App.css';
import {Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Container from 'react-bootstrap/Container';

import Cinematography from './components/Cinematography';
import About from './components/About';
// import Calendar from './components/Calendar';
import NavBar from './components/NavBar';
import CinProject from './components/CinProject';
import Directing from './components/Directing';
import DirProject from './components/DirProject';
// import reel from './reel.mp4'


function App() {
  return (
    <div className="app-container" style={{display: 'grid', justifyContent:'center'}}>
      {/* <Container className='reel' style={{justifySelf: 'center'}}>
        <video className='video' autoPlay muted loop preload='metadata'>
          <source src={reel} type='video/mp4' />
        </video>
      </Container> */}
      <main>
      <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/cinematography" element={<Cinematography />} />
          <Route path="/directing" element={<Directing />} />
        </Routes>
        </main>
        <footer>
          <NavBar/>
          <Routes>
          <Route path="/cinematography/:CinProjectUrl" element={<CinProject />}
              loader={({ params }) => {
                console.log(params.CinProjectUrl);
              }}> </Route>
              <Route path="/directing/:DirProjectUrl" element={<DirProject />}
              loader={({ params }) => {
                console.log(params.DirProjectUrl);
              }}> </Route>
          </Routes>
      </footer>
    </div>
  );
}

export default App;
