import './App.css';
import {Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Cinematography from './components/Cinematography';
import About from './components/About';
// import Calendar from './components/Calendar';
import NavBar from './components/NavBar';
import CinProject from './components/CinProject';
import Directing from './components/Directing';
import DirProject from './components/DirProject';


function App() {
  return (
    <div className="app-container">
      
      <main>
      <Routes>
          <Route path="/cinematography" element={<Cinematography />} />
          <Route path="/about" element={<About />} />
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
