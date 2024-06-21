import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar'

import { Home } from './Pages/Home/Home';
import './App.css';
import { Service } from './Pages/Service';
import { UsSection } from './Pages/Us';
import { Footer } from './components/footer';
import { Blog } from './Pages/Blog';

import { BlogArticle } from './components/BlogArticle';
import { Questions } from './Pages/Questions';


const App = () => {
  return (
    <>
    <Router>
    <NavBar/>
       <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/servicios" element={<Service/>} />
      <Route path="/nosotros" element={<UsSection/>} />
      <Route path="/blog" element={<Blog/>} />
      <Route path="/blog/:id" element={<BlogArticle />} />
      <Route path="/preguntas" element={<Questions/>} />
      </Routes>

      <Footer/>
    </Router>

    </>
  );
};

export { App };
