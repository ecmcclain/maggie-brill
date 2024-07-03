import './App.css';
import {Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Container from 'react-bootstrap/Container';

import Cinematography from './components/Cinematography';
import About from './components/About';
import NavBar from './components/NavBar';
import CinProject from './components/CinProject';
import Directing from './components/Directing';
import DirProject from './components/DirProject';


function App() {
  return (
    <div className="app-container" style={{margin: '0', justifyContent:'center', position: 'relative'}}>
      <Container className='reel' style={{margin: '0', justifyContent:'center'}}>
        <video className='video' autoPlay muted loop preload='metadata'>
          <source src='/reel.mp4' type='video/mp4' />
        </video>
      </Container>
      <main style={{position: 'absolute', top: '0'}}>
      <Routes>
          <Route path="/" />
          <Route path="/about" element={<About />} />
          <Route path="/cinematography" element={<Cinematography />} />
          <Route path="/cinematography/:CinProjectUrl" element={<CinProject />}
              loader={({ params }) => {
                console.log(params.CinProjectUrl);
              }}> </Route>
          <Route path="/directing" element={<Directing />} />
          <Route path="directing/:DirProjectUrl" element={<DirProject />}
              loader={({ params }) => {
                console.log(params.DirProjectUrl);
              }}> </Route>
        </Routes>
        </main>
        <footer>
          <NavBar/>
      </footer>
    </div>
  );
}

export default App;
