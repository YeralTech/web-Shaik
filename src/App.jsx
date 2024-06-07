import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar'
{/*import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Aplican from './pages/Aplican';
import Blog from './pages/Blog';
import Preguntas from './pages/Preguntas';*/}
import { Home } from './Pages/Home/Home';
import './App.css';

const App = () => {
  return (
    <Router>
    <NavBar/>
       <Routes>
      <Route path="/" element={<Home/>} />
        {/* <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/aplican" element={<Aplican />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/preguntas" element={<Preguntas />} />*/}
      </Routes>
    </Router>
  );
};

export { App };
