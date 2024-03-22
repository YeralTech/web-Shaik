import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar/index.jsx';
import { Home } from './Pages/Home/Home.jsx';
import { Nosotros } from './Pages/US/US.jsx';
import {QuienesAplican} from './Pages/WhoApply'
import { Blog } from './Pages/Blog/Blog.jsx';
import { Questions } from './Pages/Question/Questions.jsx';
import { Footer } from './components/Footer';

import './App.css';

/**
 * Componente principal que define la estructura de la aplicación y las rutas.
 * Utiliza React Router para manejar la navegación entre las distintas páginas.
 * ```
 */
function App() {
  return (
    <Router>
      {/* Barra de navegación */}
      <NavBar />

      {/* Definición de rutas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/aplican" element={<QuienesAplican />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/preguntas" element={<Questions />} />
      </Routes>

      {/* Pie de página */}
      <Footer />

    </Router>
   
  );
}

export default App;
