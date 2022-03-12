// React modules
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Components
import Nav from './components/Nav';
// import Footer from './components/Footer';

// Pages
import RecetasPage from './pages/RecetasPage';
import RecetaPage from './pages/RecetaPage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';
// import WeatherPage from './pages/WeatherPage';

// Style
import './App.css';
import RecetasSearchPage from './pages/RecetasSearchPage';
import RecetasModifyPage from './pages/RecetasModifyPage';
import RecetasCreatePage from './pages/RecetasCreatePage';
import RecetasResultPage from './pages/RecetasResultPage';

import RecetasAdvancedSearch from './components/RecetasAdvancedSearch';

function App() {
  return (
    <div className="App">

      <Router>
        <Nav />
        <div id="page-body">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/recetas" element={<RecetasPage />} />
            <Route path="/receta/:id" element={<RecetaPage />} />
            <Route path="/recetasSearch" element={<RecetasSearchPage />} />
            <Route path="/recetasModify" element={<RecetasModifyPage />} />
            <Route path="/recetasCreate" element={<RecetasCreatePage />} />
            <Route path="/recetasResultPage" element={<RecetasResultPage />} />
            <Route path="/advancedSearchPage" element={<RecetasAdvancedSearch />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;