import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import Portfolio from './components/Portfolio';
import UploadMedia from './components/UploadMedia';

function App() {
  return (
    <Router basename="/mypp.site">
      <div className="App">
        <nav className="main-nav">
          <Link to="/">Home</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/upload">Upload Media</Link>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/upload" element={<UploadMedia />} />
          </Routes>
        </main>
        <footer>
          <p>&copy; 2025 AV Professionals Hub. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;